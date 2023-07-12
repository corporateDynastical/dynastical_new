"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCall } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { Lilita_One } from "next/font/google";
import style from "@styles/Navbar.module.scss";

const lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const data = [
    { item: "home", link: "/" },
    { item: "about", link: "/about-us" },
    { item: "digital marketing", link: "/digital-marketing" },
    { item: "corporate  solutions", link: "/corporate-solutions" },
    { item: "political  analysis", link: "/political-analysis" },
    { item: "events", link: "/events" },
    { item: "corporate clients", link: "/corporate-clients" },
    { item: "political clients", link: "/political-clients" },
    { item: "blogs", link: "/blogs" },
    { item: "contact", link: "/contact-us" },
  ];

  const [show, setShow] = useState(false);

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 1.2,
      },
    },
  };

  return (
    <>
      <div className={style.container}>
        <nav className={style.navbar}>
          <div className={style.logo}>
            <Link href={"/"}>
              <div className={style.picture}>
                <Image
                  src={"/assets/images/main_logo.svg"}
                  alt="dynastical communication logo"
                  fill
                />
              </div>
            </Link>
          </div>
          <div className={style.navButton}>
            <button onClick={() => setShow(true)}>
              Menu{" "}
              <span>
                <GiHamburgerMenu />
              </span>
            </button>
          </div>
          <AnimatePresence>
            {show && (
              <motion.div
                variants={item}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "100vh", opacity: 1 }}
                transition={{ duration: .5 }}
                exit="exit"
                className={style.navMenu}>
                <div className={style.menuContainer}>
                  <div className={style.topDiv}>
                    <motion.h1
                      initial={{ y: 80, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      exit={{
                        opacity: 0,
                        y: -90,
                        transition: {
                          ease: "easeInOut",
                          delay: 0
                        }
                      }}
                      className={style.menu}>Menu</motion.h1>
                    <motion.button
                      initial={{ y: 80, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      exit={{
                        opacity: 0,
                        y: -90,
                        transition: {
                          ease: "easeInOut",
                          delay: 0
                        }
                      }}
                      onClick={() => setShow(false)}>
                      <AiOutlineClose />
                    </motion.button>
                  </div>
                  <div className={style.menuDiv}>
                    <ul>
                      {data.map((item, index) => {
                        return (
                          <motion.li
                            initial={{ y: 80, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 * index }}
                            exit={{
                              opacity: 0,
                              y: 90,
                              transition: {
                                ease: "easeInOut",
                                delay: 0.01 * index,
                                duration: 0.5
                              }
                            }}
                            onClick={() => setShow(false)}
                            key={index}
                          >
                            <Link href={item.link}>{item.item}</Link>
                            <hr />
                          </motion.li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
