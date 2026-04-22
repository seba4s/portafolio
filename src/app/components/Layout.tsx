import { Outlet } from 'react-router';
import { Toaster } from 'sonner';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useTheme } from '../context/theme-context';

export function Layout() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F9FAFB] flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: theme === 'dark' ? '#111827' : '#FFFFFF',
            color: theme === 'dark' ? '#F9FAFB' : '#0F172A',
            border: '1px solid #22C55E',
          },
        }}
      />
    </div>
  );
}
