"use client";

import { signIn, useSession } from "next-auth/react";

export default function HeroSection() {
  const { data: session, status } = useSession();
  return (
    <section className="w-full flex-center flex-col py-[80px]">
      <h1 className="mt-10 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center">
        Discover & Learn <br className="max-md:hidden" />
        <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent text-center">
          Stocks
        </span>
      </h1>
      <p className="mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl mx-auto text-center">
        A platfrom to discover and learn about stocks and the stock market.
      </p>
      <div className="mt-8 flex mx-auto items-center justify-center gap-10">
        <button
          onClick={() => signIn("google")}
          className="rounded-3xl px-9 py-2 sm:py-4 bg-green-500 text-white font-bold tracking-widest hover:bg-green-500/60"
        >
          Sign Up
        </button>
        <button className="rounded-3xl px-9 py-2 sm:py-4 bg-white border-green-500 border text-green-500 font-bold tracking-widest hover:bg-gray-100">
          Learn More
        </button>
      </div>
    </section>
  );
}
