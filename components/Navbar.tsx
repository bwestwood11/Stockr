"use client";

import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import logo from '@/public/logo.png';

export default function Navbar() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <nav className="container flex max-w-7xl mx-auto h-16 items-center space-x-4 justify-between"> 
      <div className="flex items-center">
            <Link href={"/"}>
             <Image 
          src={logo}
          alt="Stockr Logo"
          width={60}
          height={60}
        />   
        <h1 className="font-bold text-lg">Stockr</h1>
        </Link>
        </div>
        {session ? (
          <Button className="pr-10" onClick={() => signOut()}>
            Sign out
          </Button>
        ) : (
          <Button className="pr-10" onClick={() => signIn("google")}>
            Sign in
          </Button>
        )}
      </nav>
    </header>
  );
}
