'use client';

import Image from 'next/image';
import { useUser } from '@clerk/clerk-react';

const DocumentsPage = () => {
  const { user } = useUser();
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
    </div>
  );
};

export default DocumentsPage;
