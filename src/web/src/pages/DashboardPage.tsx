import { useAuth } from '../contexts/AuthContext';

export function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: '2rem', maxWidth: 960, margin: '0 auto' }}>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e293b' }}>
            Hoş geldiniz, {user?.firstName} {user?.lastName}
          </h1>
          <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
            {user?.role === 'STUDENT' && 'Öğrenci'}
            {user?.role === 'TEACHER' && 'Öğretim Görevlisi'}
            {user?.role === 'ADMIN' && 'Yönetici'}
            {' • '}
            {user?.email}
          </p>
        </div>
        <button
          onClick={logout}
          style={{
            padding: '0.5rem 1.25rem',
            borderRadius: 8,
            border: '1px solid #e2e8f0',
            background: '#fff',
            color: '#64748b',
            cursor: 'pointer',
            fontWeight: 500,
            transition: 'all 0.2s',
          }}
        >
          Çıkış Yap
        </button>
      </header>

      <div
        style={{
          background: '#f8fafc',
          borderRadius: 12,
          padding: '2rem',
          textAlign: 'center',
          color: '#94a3b8',
        }}
      >
        <p style={{ fontSize: '1.1rem' }}>
          🎓 Dashboard içeriği buraya eklenecek.
        </p>
      </div>
    </div>
  );
}

export default DashboardPage;
