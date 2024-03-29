"use client"

import Image from "next/image"
import { Fade } from "react-awesome-reveal"

export default function Influencers() {
    return (
        <div className='py-[3rem] md:py-[5rem]'>
            <div className="container flex-col md:flex-row gap-[2rem] items-center">
                <div className="flex flex-col gap-[1rem] items-center md:items-start">

                    <Fade duration={1500}
                        delay={500}
                        triggerOnce
                        direction="down"
                    >
                        <h1 className="text-[40px] font-[600] leading-[50px] text-[--blackColor] text-center md:text-left">Create your Freedom.</h1>
                    </Fade>
                    <Fade duration={1500}
                        delay={500}
                        triggerOnce
                    >
                        <p className="text-[16px] font-[500] leading-[24px] text-[#2D3648] w-full md:w-[60%] text-center md:text-left">La primera aplicación con la cual podrás colaborar con marcas, agencias y otros creadores.</p>
                    </Fade>
                    <Fade duration={1500}
                        delay={500}
                        triggerOnce
                        direction="up">

                        <div className="flex flex-wrap items-center gap-[1rem] justify-center">
                            <Image src="/images/apple.svg" width={150} height={52} alt="apple"></Image>
                            <Image src="/images/playstore.svg" width={150} height={52} alt="playstore"></Image>
                        </div>
                    </Fade>
                </div>
                <Fade duration={1500}
                    delay={500}
                    triggerOnce
                >
                    <div className="flex gap-[1rem]">
                        <Image src="/images/image1.png" width={300} height={623} alt=""></Image>
                        <Image src="/images/image2.png" width={300} height={623} alt=""></Image>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
