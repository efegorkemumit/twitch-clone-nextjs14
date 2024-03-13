import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import {ResultPage, ResultSkeleton} from "./_components/Result";
import { Suspense } from "react";

export default function Home() {
  return (
   
   <div className="h-full p-8 max-w-screen-2xl mx-auto">

    <Suspense fallback={<ResultSkeleton/>}>
           <ResultPage/>


    </Suspense>


   </div>
  );
}


