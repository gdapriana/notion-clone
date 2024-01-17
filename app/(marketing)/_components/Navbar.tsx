'use client';
import { useScrollTop } from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';
import { Logo } from '@/app/(marketing)/_components/Logo';
import { DarkModeToggle } from '@/components/dark-mode-toggle';
import { useConvexAuth } from 'convex/react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { SignInButton, UserButton } from '@clerk/clerk-react';
import { LogIn } from 'lucide-react';
import { metadata } from '@/app/(marketing)/_components/metadata';
import { useUser } from '@clerk/clerk-react';

export const Navbar = () => {
  const { user } = useUser();
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        'z-50 bg-background fixed top-0 flex items-center w-full p-6',
        scrolled && 'border-b',
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Skeleton className="w-[60px] h-[40px] rounded-lg" />}
        {!isLoading && !isAuthenticated && (
          <SignInButton mode="modal">
            <Button className="gap-2" variant="ghost">
              <LogIn size={20} />
              {metadata.button.navbar}
            </Button>
          </SignInButton>
        )}
        {isAuthenticated && !isLoading && (
          <div className="flex gap-2 mr-4 justify-center items-center">
            <UserButton afterSignOutUrl="/" />
            <p className="text-sm">{user?.fullName}</p>
          </div>
        )}
        <DarkModeToggle />
      </div>
    </div>
  );
};
