"use client";

import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div>
      <p>Navbar</p>
      <button onClick={() => signIn()}>Sign in with Google</button>
      <button onClick={() => signOut()}>Sign out with Google</button>
    </div>
  );
}
