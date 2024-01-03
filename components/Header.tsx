"use client"

import Image from "next/image";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { ImCross } from "react-icons/im";

export default function Header() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        console.log("Toggle menu called");
        setMenuVisible(!menuVisible);
    };

    return (
        <div className="bg-[#FDF7FA] h-[70px] flex items-center">
            <div className="container justify-between items-center">
                <Link href="/">
                    <div className="">
                        <Image src="/images/logo.png" width={119} height={48} alt="logo" />
                    </div>
                </Link>
                <div className={`navigation ${menuVisible ? "showMenu" : ""}`}>
                    <div className="flex items-center gap-[2rem] menu">
                        <span onClick={() => setMenuVisible(!menuVisible)}>
                            <ImCross className="w-[20px] h-[20px] sm:hidden text-black absolute top-[2rem] left-[2rem]" />
                        </span>
                        <Link href="/">
                            <li className="text-[16px] font-[600] leading-[20px] list-none text-[--primaryColor]">Home</li>
                        </Link>
                        <Link href="influencers">
                            <li className="text-[16px] font-[600] leading-[20px] list-none text-[--primaryColor]">Influencers</li>
                        </Link>
                        <button className="text-[16px] font-[600] leading-[20px] text-white list-none bg-[--primaryColor] outline-none rounded-[6px] py-[12px] px-[20px]">¡Empecemos! 🚀</button>
                    </div>
                </div>
                <span className="block sm:hidden" onClick={toggleMenu}>
                    <BiMenu className="w-[35px] h-[35px] text-black cursor-pointer" />
                </span>
            </div>
        </div>
    );
}
