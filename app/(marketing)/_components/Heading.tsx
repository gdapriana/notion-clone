'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { metadata } from "@/app/(marketing)/_components/metadata";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="font-bold text-xl md:text-2xl">
        {metadata.headline} <span className="underline">{metadata.app}</span>
      </h1>
      <h3 className="text-base sm:text-lg">
        {metadata.tagline}
      </h3>
      <Button className="gap-1">
        {metadata.button.text} {metadata.app} <ArrowRight className="w-4" />
      </Button>
    </div>
  );
};
