import React, { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import {
  AlignJustify,
  Heart,
  LogIn,
  LogOut,
  Search,
  ShoppingBag,
  ShoppingCart,
  Star,
  User,
  XCircle,
} from "lucide-react";
import Link from "next/link";

import DropDown from "../svg/dropDown";

function Header() {
  const [token, setToken] = useState(false);

  const [openRight, setOpenRight] = useState(false);

  const [openLanguage, setOpenLanguage] = useState(false);

  const [openUserSetting, setOpenUserSetting] = useState(false);

  const openDrawerRight = useCallback(() => setOpenRight(true), []);

  const closeDrawerRight = useCallback(() => setOpenRight(false), []);

  const openSelectLanguage = useCallback(() => setOpenLanguage((open) => !open), []);

  const openUserSettingMenu = useCallback(() => setOpenUserSetting(true), []);

  const closeUserSettingMenu = useCallback(() => setOpenUserSetting(false), []);

  useEffect(() => {
    const getToken = localStorage.getItem("TOKEN");

    setToken(getToken);
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("TOKEN");

    setOpenUserSetting(false);
  }, []);

  return (
    <>
      <section className="bg-black z-[1] font-poppins text-text-1 text-[0.875rem] leading-[1.3125rem] py-3">
        <div className="container grid grid-cols-12 gap-2">
          <div className="hidden lg:block col-span-2" />

          <div className="col-span-12 md:col-span-10: lg:col-span-8 md:flex items-center md:justify-start lg:justify-center text-center">
            <span className="mr-2">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>

            <Link className="font-[600] underline" href="./products">
              ShopNow
            </Link>
          </div>

          <div className="hidden col-span-2 lg:flex justify-end relative">
            <button className="flex items-center justify-between gap-1" type="button" onClick={openSelectLanguage}>
              <span className="font-[400]">English</span>

              <DropDown />
            </button>

            <ul
              className={classNames(
                "absolute !z-[4] rounded-lg top-10 px-3 py-2 right-1 flex flex-col justify-start bg-black",
                !openLanguage && "hidden",
              )}
            >
              <li className="cursor-pointer hover:text-text-2 hover:bg-secondary-1">
                <button onClick={openSelectLanguage} type="button" className="w-full text-left px-1 py-1">
                  English
                </button>
              </li>

              <li className="cursor-pointer hover:text-text-2 hover:bg-secondary-1">
                <button onClick={openSelectLanguage} type="button" className="w-full text-left px-1 py-1">
                  Tiếng Việt
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <header className="sticky top-0 z-[3] text-black bg-white border-b-gray-400 border-b-[1px]">
        <div className="container pt-[40px] pb-[15px] flex items-center">
          <Link href="./" className="font-inter font-[700] text-[1.5rem] leading-[1.5rem] mr-auto">
            Exclusive
          </Link>

          <div className="hidden lg:flex gap-[3rem] text-[1rem] font-[400] leading-[1.5rem]">
            <Link className="font-poppins border-b-gray-400 border-b-[2px]" href="./">
              Home
            </Link>

            <Link className="font-poppins" href="./products">
              Contact
            </Link>

            <Link className="font-poppins" href="./products">
              About
            </Link>

            <Link className="font-poppins" href="./signUp">
              Sign Up
            </Link>
          </div>

          <div className="hidden ml-[8.12rem] md:flex items-center justify-center">
            <form className="relative w-[15.1875rem] h-[2.375rem]">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="h-10 w-full bg-secondary-1 py-[0.3475rem] px-[0.75rem] pr-[2rem]"
              />

              <button type="submit" className="absolute top-2 right-1">
                <Search />
              </button>
            </form>

            <Link
              className="w-[2rem] h-[2rem] ml-[1.5rem] mr-[1rem] flex justify-center items-center"
              href="./wishList"
            >
              <Heart />
            </Link>

            <Link className="w-[2rem] h-[2rem] flex items-center justify-center" href="./products">
              <ShoppingCart />
            </Link>

            <button
              type="button"
              onMouseEnter={openUserSettingMenu}
              onMouseLeave={closeUserSettingMenu}
              className="group relative flex items-center justify-center w-[2rem] h-[2rem] ml-[1rem] rounded-full hover:bg-secondary-2"
            >
              <User className="group-hover:text-text-1" />

              <div
                className={classNames(
                  "absolute right-0 top-[1.7rem] w-[14rem] bg- flex pt-[1.125rem] pr-[0.75rem] pb-[0.625rem] pl-[1.25rem] justify-end items-center backdrop-blur-sm bg-[rgba(0,0,0,0.8)] rounded-[0.25rem]",
                  !openUserSetting && "hidden",
                )}
              >
                {token ? (
                  <div className="flex flex-col items-start gap-[0.8125rem]">
                    <Link href="./" className="flex items-center gap-[1rem] hover:bg-gray-500">
                      <User className="w-[2rem] h-[2rem] text-text-1" />

                      <span className="text-text-1 flex items-center justify-start w-[9rem]  font-poppins text-[0.875rem] font-[400] leading-[1.3125rem]">
                        Manage My Account
                      </span>
                    </Link>

                    <Link href="./" className="flex items-center gap-[1rem] hover:bg-gray-500">
                      <ShoppingBag className="w-[2rem] h-[2rem] text-text-1" />

                      <span className="text-text-1 flex items-center justify-start w-[9rem] font-poppins text-[0.875rem] font-[400] leading-[1.3125rem]">
                        My Order
                      </span>
                    </Link>

                    <Link href="./" className="flex items-center gap-[1rem] hover:bg-gray-500">
                      <XCircle className="w-[2rem] h-[2rem] text-text-1" />

                      <span className="text-text-1 flex items-center justify-start w-[9rem] font-poppins text-[0.875rem] font-[400] leading-[1.3125rem]">
                        My Cancellations
                      </span>
                    </Link>

                    <Link href="./" className="flex items-center gap-[1rem] hover:bg-gray-500">
                      <Star className="w-[2rem] h-[2rem] text-text-1" />

                      <span className="text-text-1 flex items-center justify-start w-[9rem] font-poppins text-[0.875rem] font-[400] leading-[1.3125rem]">
                        My Reviews
                      </span>
                    </Link>

                    <Link
                      href="./logIn"
                      onClick={handleLogout}
                      className="flex items-center gap-[1rem] hover:bg-gray-500"
                    >
                      <LogOut className="w-[2rem] h-[2rem] text-text-1" />

                      <span className="text-text-1 flex items-center justify-start w-[9rem] font-poppins text-[0.875rem] font-[400] leading-[1.3125rem]">
                        Logout
                      </span>
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col items-start gap-[0.8125rem]">
                    <Link
                      href="./logIn"
                      onClick={handleLogout}
                      className="flex items-center gap-[1rem] hover:bg-gray-500"
                    >
                      <LogIn className="w-[2rem] h-[2rem] text-text-1" />

                      <span className="text-text-1 flex items-center justify-start w-[9rem] font-poppins text-[0.875rem] font-[400] leading-[1.3125rem]">
                        Login
                      </span>
                    </Link>
                  </div>
                )}
                {/* <div className="flex flex-col items-start gap-[0.8125rem]">
                  <Link href="./" className="flex items-center gap-[1rem] hover:bg-gray-500">
                    <User className="w-[2rem] h-[2rem] text-text-1" />

                    <span className="text-text-1 flex items-center justify-start w-[9rem]  font-poppins text-[0.875rem] font-[400] leading-[1.3125rem]">
                      Manage My Account
                    </span>
                  </Link>

                  <Link href="./" className="flex items-center gap-[1rem] hover:bg-gray-500">
                    <ShoppingBag className="w-[2rem] h-[2rem] text-text-1" />

                    <span className="text-text-1 flex items-center justify-start w-[9rem] font-poppins text-[0.875rem] font-[400] leading-[1.3125rem]">
                      My Order
                    </span>
                  </Link>

                  <Link href="./" className="flex items-center gap-[1rem] hover:bg-gray-500">
                    <XCircle className="w-[2rem] h-[2rem] text-text-1" />

                    <span className="text-text-1 flex items-center justify-start w-[9rem] font-poppins text-[0.875rem] font-[400] leading-[1.3125rem]">
                      My Cancellations
                    </span>
                  </Link>

                  <Link href="./" className="flex items-center gap-[1rem] hover:bg-gray-500">
                    <Star className="w-[2rem] h-[2rem] text-text-1" />

                    <span className="text-text-1 flex items-center justify-start w-[9rem] font-poppins text-[0.875rem] font-[400] leading-[1.3125rem]">
                      My Reviews
                    </span>
                  </Link>

                  <Link
                    href="./logIn"
                    onClick={handleLogout}
                    className="flex items-center gap-[1rem] hover:bg-gray-500"
                  >
                    <LogOut className="w-[2rem] h-[2rem] text-text-1" />

                    <span className="text-text-1 flex items-center justify-start w-[9rem] font-poppins text-[0.875rem] font-[400] leading-[1.3125rem]">
                      Logout
                    </span>
                  </Link>
                </div> */}
              </div>
            </button>
          </div>

          <button onClick={openDrawerRight} className="lg:hidden ml-5" type="button">
            <AlignJustify />
          </button>
        </div>

        <div
          onClick={closeDrawerRight}
          onKeyDown={closeDrawerRight}
          role="button"
          tabIndex={0}
          aria-label="close"
          className={classNames(
            "h-screen w-screen bg-opacity-50 fixed top-0 backdrop-blur-sm cursor-default",
            !openRight && "hidden",
          )}
        />

        <div
          className={classNames(
            "h-screen w-fit shadow-2xl fixed flex flex-col items-center !p-[2rem] top-0 right-0 z-[9999] bg-white",
            !openRight && "hidden",
          )}
        >
          <button type="button" onClick={closeDrawerRight} className="absolute top-3 left-3">
            <XCircle />
          </button>

          <div className="lg:hidden flex justify-center relative">
            <button
              className="px-2 py-1 mt-5 rounded-lg bg-black text-text-1 flex items-center justify-between gap-1"
              type="button"
              onClick={openSelectLanguage}
            >
              <span className="font-[400]">English</span>

              <DropDown />
            </button>

            <ul
              className={classNames(
                "absolute rounded-lg z-[4] text-text-1 top-[3.5rem] px-2 py-2 right-30 flex flex-col justify-start bg-black",
                !openLanguage && "hidden",
              )}
            >
              <li className="cursor-pointer hover:text-text-2 hover:bg-secondary-1">
                <button
                  onClick={openSelectLanguage}
                  type="button"
                  className="w-full text-left px-1 py-1 !whitespace-nowrap"
                >
                  English
                </button>
              </li>

              <li className="cursor-pointer hover:text-text-2 hover:bg-secondary-1">
                <button
                  onClick={openSelectLanguage}
                  type="button"
                  className="w-full text-left px-1 py-1 !whitespace-nowrap"
                >
                  Tiếng Việt
                </button>
              </li>
            </ul>
          </div>

          <div className="md:hidden ml-auto flex flex-col items-center">
            <form className="relative mt-5 w-[15.1875rem] h-[2.375rem]">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="h-10 w-full bg-secondary-1 py-[0.3475rem] px-[0.75rem] pr-[2rem]"
              />

              <button type="submit" className="absolute top-2 right-1">
                <Search />
              </button>
            </form>
            <div className="flex mt-[2rem] gap-3">
              <Link className="flex items-center" href="./products">
                <Heart />
              </Link>

              <Link className="flex items-center ml-[1rem]" href="./products">
                <ShoppingCart />
              </Link>

              <button type="button" className="ml-[1rem]">
                <User />
              </button>
            </div>
          </div>

          <div className="lg:hidden mt-[3rem] w-full flex flex-col items-start gap-[2rem] text-[1rem] font-[400] leading-[1.5rem]">
            <Link className="font-poppins w-fit border-b-gray-400 border-b-[2px]" href="./products">
              Home
            </Link>

            <Link className="font-poppins w-fit" href="./products">
              Contact
            </Link>

            <Link className="font-poppins w-fit" href="./products">
              About
            </Link>

            <Link onClick={closeDrawerRight} className="font-poppins w-fit" href="./signUp">
              Sign Up
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
