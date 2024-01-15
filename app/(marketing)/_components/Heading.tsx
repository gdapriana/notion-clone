'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { metadata } from '@/app/(marketing)/_components/metadata';
import { useConvexAuth } from 'convex/react';
import { Skeleton } from '@/components/ui/skeleton';
import { SignInButton } from '@clerk/clerk-react';
import Link from 'next/link';

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="font-bold text-xl md:text-2xl">
        {metadata.headline} <span className="underline">{metadata.app}</span>
      </h1>
      <h3 className="text-base sm:text-lg">{metadata.tagline}</h3>
      {isLoading && (
        <Skeleton className="w-[160px] mx-auto h-[40px] rounded-lg" />
      )}
      {!isLoading && !isAuthenticated && (
        <SignInButton mode="modal">
          <Button className="gap-1">
            {metadata.button.noauth} {metadata.app} free{' '}
            <ArrowRight className="w-4" />
          </Button>
        </SignInButton>
      )}
      {!isLoading && isAuthenticated && (
        <Button className="gap-1" asChild>
          <Link href={'/documents'}>
            {metadata.button.auth} {metadata.app} <ArrowRight className="w-4" />
          </Link>
        </Button>
      )}
    </div>
  );
};
