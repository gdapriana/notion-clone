import { Logo } from '@/app/(marketing)/_components/Logo';
import { metadata } from "@/app/(marketing)/_components/metadata";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        {metadata.supports.map((item: {name: string, link: string}, index:number) => {
          return <Button key={index} variant="ghost">{item.name}</Button>
        })}
      </div>
    </div>
  );
};
