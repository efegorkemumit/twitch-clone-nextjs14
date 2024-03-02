import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
   
    <div className="h-screen">
    <UserButton afterSignOutUrl="/"/>
  </div>
  );
}


