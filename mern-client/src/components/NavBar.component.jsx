import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import bookByte_logo from "../assets/bookByte.png";
import { AuthContext } from "../store/AuthProvider.store";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { user } = useContext(AuthContext);
  // console.log(user);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Book", path: "/admin/dashboard" },
    { link: "BLog", path: "/blog" },
  ];

  return (
    <>
      <header className="w-full bg-transparent fixed top-0 right-0 left-0 transition-all ease-in duration-300">
        <nav
          className={`py-4 lg:px-20 px-4 ${
            isSticky
              ? "sticky top-0 left-0 right-0 bg-gradient-to-tr from-pink-400 to-pink-50 "
              : ""
          }`}>
          <div className="flex justify-between items-center text-base lg:gap-8 max-lg:gap-6">
            {/* logo */}
            <Link
              to="/"
              className="text-2xl font-bold text-pink-600 flex items-center gap-2 md:pl-3 pt-3">
              <img
                src={bookByte_logo}
                alt="BookByte-logo"
                className="w-14 mx-2 object-fill"
              />
              <div className=" text-3xl leading-snug">BookByte</div>
            </Link>

            <div className="w-3/4 flex lg:justify-around lg:flex-row md:flex-col md:items-end lg:items-center md:pt-4 lg:mt-0 md:gap-3 lg:gap-8">
              {/* naveItems */}
              <ul className="md:flex space-x-12  hidden md:pr-4 lg:pr-0">
                {navItems?.map(({ link, path }) => (
                  <Link
                    key={path}
                    to={path}
                    className="block text-base text-black uppercase hover:text-pink-600 text-center">
                    {link}
                  </Link>
                ))}
              </ul>

              {/* menuBar for lg device */}
              <Link
                to="/admin/dashboard/user-profile"
                className="gap-2 md:flex hidden items-center md:pt-3 md:pr-4 lg:py-0 lg:pr-0 ">
                {user ? (
                  <>
                    {user?.profileURL ? (
                      <img src={user.profileURL} alt="" />
                    ) : (
                      <div className=" text-center align-middle rounded-full bg-blue-300 w-6 h-6 font-bold text-pink-500 outline-dotted outline-2 outline-gray-700">
                        {user?.email[0].toUpperCase()}
                      </div>
                    )}
                    <div className=" text-red-600 hover:text-red-600 font-mono">
                      <p>{user?.email}</p>
                    </div>
                  </>
                ) : (
                  <div className="w-60 flex justify-around ">
                    <Link
                      to="/login"
                      className="text-base text-black px-6 py-2 rounded-lg hover:bg-pink-300 leading-snug">
                      Log In
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-base text-black bg-pink-400 px-6 py-2 mx-1 rounded-lg hover:bg-pink-300 leading-snug">
                      <span>Sign Up</span>
                    </Link>
                  </div>
                )}
              </Link>
            </div>
            {/* menu bar for mobile */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-black focus:outline-none p-3">
                {isMenuOpen ? (
                  <FaXmark className="h-5 w-5 text-black" />
                ) : (
                  <FaBarsStaggered className="h-5 w-5 text-black" />
                )}
              </button>
            </div>

            {/* nav items for sm devices */}
            <div
              className={`space-y-4 px-4 mt-16 py-7 bg-pink-500 ${
                isMenuOpen ? "block fixed top-3 right-0 left-0" : "hidden"
              }`}>
              {navItems?.map(({ link, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="block text-base text-white uppercase hover:text-pink-600">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
