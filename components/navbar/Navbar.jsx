"use client";

import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button, buttonVariants } from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { cn } from "@/lib/utils";
import styles from "./Navbar.module.css";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../Dropdown";
import GoogleButton from "react-google-button";

export default function Navbar() {
  const { data: session } = useSession();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  console.log(session);

  return (
    <header className="sticky shadow-lg top-0 z-100 w-full border-b bg-white">
      <nav
        className={cn(
          styles.navbar,
          "container flex max-w-7xl mx-auto h-16 items-center space-x-4 justify-between"
        )}
      >
        <div className="flex items-center">
          <Link className="flex" href={"/"}>
            <Image
              className={styles.logoImage}
              src={logo}
              alt="Stockr Logo"
              width={60}
              height={60}
            />
            <h1 className="h-full font-bold text-lg self-center">Stockr</h1>
          </Link>
        </div>
        {session ? (
          <div className="flex">
            <p className="self-center pr-4 hidden sm:block">{`Hi, ${session?.user?.name}`}</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src={session?.user?.image ? session?.user?.image : ""}
                    alt="user avatar"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-4 mr-1">
                <DropdownMenuItem>
                  <Link
                    className={buttonVariants()}
                    href={`/dashboard`}
                  >
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className={buttonVariants()} href={"/search"}>
                    Search
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className={buttonVariants()} href={"/gainers"}>
                    Top Gainers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className={buttonVariants()} href={"/settings"}>
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button className="pr-4" onClick={() => signOut()}>
                    Sign out
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <Button className="pr-0" onClick={() => signIn("google")}>
           Sign in
          </Button>
        )}
      </nav>
    </header>
  );
}
