import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance, { setTokens, clearTokens, getAccessToken } from '../lib/axios';
import type {
  User,
  LoginCredentials,
  RegisterData,
  AuthContextValue,
  AuthResponse,
} from '../types/auth.types';

// ─── Context ─────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// ─── Provider ────────────────────────────────────────────────────────

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(
    getAccessToken(),
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const isAuthenticated = !!user && !!accessToken;

  // ── Verify session on mount ──────────────────────────────────────

  useEffect(() => {
    const verifySession = async () => {
      const token = getAccessToken();

      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const { data } = await axiosInstance.get<User>('/auth/me');
        setUser(data);
        setAccessToken(token);
      } catch {
        clearTokens();
        setUser(null);
        setAccessToken(null);
      } finally {
        setIsLoading(false);
      }
    };

    verifySession();
  }, []);

  // ── Login ────────────────────────────────────────────────────────

  const login = useCallback(
    async (credentials: LoginCredentials) => {
      const { data } = await axiosInstance.post<AuthResponse>(
        '/auth/login',
        credentials,
      );

      setTokens(data.tokens.accessToken, data.tokens.refreshToken);
      setAccessToken(data.tokens.accessToken);
      setUser(data.user);
      navigate('/', { replace: true });
    },
    [navigate],
  );

  // ── Register ─────────────────────────────────────────────────────

  const register = useCallback(
    async (registerData: RegisterData) => {
      const { data } = await axiosInstance.post<AuthResponse>(
        '/auth/register',
        registerData,
      );

      setTokens(data.tokens.accessToken, data.tokens.refreshToken);
      setAccessToken(data.tokens.accessToken);
      setUser(data.user);
      navigate('/', { replace: true });
    },
    [navigate],
  );

  // ── Logout ───────────────────────────────────────────────────────

  const logout = useCallback(() => {
    clearTokens();
    setUser(null);
    setAccessToken(null);
    navigate('/login', { replace: true });
  }, [navigate]);

  // ── Value ────────────────────────────────────────────────────────

  const value: AuthContextValue = {
    user,
    accessToken,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// ─── Hook ────────────────────────────────────────────────────────────

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an <AuthProvider>');
  }

  return context;
}

export default AuthContext;
