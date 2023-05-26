"use client";
import React from "react";
import Link from "next/link";
import Imgae from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export default function Nav() {
  const isLoggedIn = true;
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProviders();
  }, []);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center text-white">
        Logo
      </Link>

      {/* desktop navigatipn */}
      <div className="sm:flex hidden">
        {isLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/admin" className="black_btn text-white">
              Admin Panel
            </Link>
            <button
              type="button"
              onClick={signOut}
              className="black_btn text-white"
            >
              Sign Out
            </button>
            <Link href="/profile" className="black_btn text-white">
              Profile
            </Link>
          </div>
        ) : (
          <>Hello</>
        )}
      </div>
    </nav>
  );
}
