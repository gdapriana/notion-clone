'use client';

import Image from 'next/image';
import { useUser } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';
import metadata from "@/app/(main)/_components/metadata"

const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({
      title: 'Untitled',
    });

    toast.promise(promise, {
      loading: metadata.toast.createPage.loading,
      success: metadata.toast.createPage.success,
      error: metadata.toast.createPage.error,
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        alt="Empty"
        height="300"
        width="300"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        alt="Empty"
        height="300"
        width="300"
        className="hidden dark:block"
      />

      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s {metadata.app}
      </h2>
      <Button onClick={onCreate} className="gap-2">
        <PlusCircle className="w-4" />
        Create note
      </Button>
    </div>
  );
};

export default DocumentsPage;
