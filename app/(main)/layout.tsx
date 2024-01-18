'use client';
import { ReactNode } from 'react';
import { useConvexAuth } from 'convex/react';
import { redirect } from 'next/navigation';
import { Navigation } from '@/app/(main)/_components/Navigation';

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { isLoading, isAuthenticated } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }
  if (!isAuthenticated) {
    return redirect('/');
  }
  return (
    <div className="h-full flex">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
