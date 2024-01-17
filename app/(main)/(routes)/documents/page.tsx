'use client';

import Image from 'next/image';
import { useUser } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import {useMutation} from "convex/react";
import {api} from "@/convex/_generated/api"
import {toast} from "sonner";

const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create)

  const onCreate = () => {
    const promise = create({
      title: "Untitled"
    })

    toast.promise(promise, {
      loading: "Creating a new note",
      success: "Success create a note",
      error: "Failed create a note"
    })
  }

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
        Welcome to {user?.fullName}&apos;s mindmemo
      </h2>
      <Button onClick={onCreate} className="gap-2">
        <PlusCircle className="w-4" />
        Create note
      </Button>
    </div>
  );
};

export default DocumentsPage;
