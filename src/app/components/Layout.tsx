import { Outlet } from 'react-router';
import { Toaster } from 'sonner';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
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
            background: '#111827',
            color: '#F9FAFB',
            border: '1px solid #22C55E',
          },
        }}
      />
    </div>
  );
}
