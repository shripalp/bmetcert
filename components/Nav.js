"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export default function Nav() {
  const isLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropDown] = useState(false);
  useEffect(() => {
    const setGetProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setGetProviders();
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
            <Image
              src="/images/cdt_logo.gif"
              width={37}
              height={37}
              className="rouded-full text-white"
              alt="profile"
            />
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
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
      {/*Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {isLoggedIn ? (
          <div className="flex">
            <Image
              src="/images/cdt_logo.gif"
              width={50}
              height={50}
              className="rouded-full text-white"
              alt="profile"
              onClick={() =>
                setToggleDropDown((prev) => setToggleDropDown(!prev))
              }
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/admin"
                  className="dropdown_link text-white"
                  onClick={() => setToggleDropDown(false)}
                >
                  Admin Panel
                </Link>
                <Link
                  href="/profile"
                  className="dropdown_link text-white"
                  onClick={() => setToggleDropDown(false)}
                >
                  My profile
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropDown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn text-white"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
}
