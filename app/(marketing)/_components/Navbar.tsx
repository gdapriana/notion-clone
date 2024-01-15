'use client';
import { useScrollTop } from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';
import { Logo } from '@/app/(marketing)/_components/Logo';
import { DarkModeToggle } from '@/components/dark-mode-toggle';
import { useConvexAuth } from 'convex/react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { LogIn } from "lucide-react";

export const Navbar = () => {
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
            <Button className="gap-2" variant="ghost"><LogIn size={20} />Log In</Button>
          </SignInButton>
        )}
        {
          isAuthenticated && !isLoading && (
            <div>
              <UserButton afterSignOutUrl="/" />
            </div>
          )
        }
        <DarkModeToggle />
      </div>
    </div>
  );
};
