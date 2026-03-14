import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@/hooks/use-theme';

export function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Routes>
        <Route
          path="*"
          element={
            <div className="flex min-h-screen items-center justify-center">
              <p className="text-muted-foreground">
                OBS UI Component Library — bileşenler hazır.
              </p>
            </div>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
