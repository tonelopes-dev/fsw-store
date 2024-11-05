"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data } = useSession();
  console.log(data);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-gray-900">Welcome to Next.js!</h1>
      {data && (
        <>
          <p className="text-3xl font-bold text-gray-900">
            Hello, {data?.user?.name}!
          </p>
          <p className="text-lg font-medium text-gray-700">
            You are currently logged in.
          </p>
          <Image
            height={100}
            width={100}
            src={data?.user?.image as string}
            alt={data?.user?.name as string}
            className="rounded-full shadow-md shadow-orange-200"
          />
          <div></div>
        </>
      )}
    </div>
  );
}
