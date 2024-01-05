import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
export default function Hero() {
    return (
        <div className="py-[3rem]">
            <Fade duration={1000}
                triggerOnce>
                <div className="grid lg:grid-cols-5 gap-[2rem] 2xl:h-[30rem] items-center max-w-[1300px] px-[10px] mx-auto 2xl:relative">
                    <div className="flex lg:col-span-2 flex-col gap-[1rem] items-center md:items-start">
                        <h1 className="text-[40px] font-[600] leading-[50px] text-[--blackColor] text-center md:text-left">Vender con <span className="text-[--primaryColor]">influencers</span> nunca fue más simple</h1>
                        <p className="text-[16px] font-[500] leading-[24px] text-[#2D3648] text-center md:text-left">Conoce la primera solución global de marketing con influencers. Diseñada para empresas, agencias y creadores de contenido.</p>
                        <button className="text-[16px] font-[600] leading-[20px] w-fit text-white list-none bg-[--primaryColor] outline-none rounded-[6px] py-[16px] px-[24px]">¡Empecemos! 🚀</button>
                    </div>
                    <div className="flex lg:col-span-3 gap-[1rem]">
                        <Image src="/images/iphone15.png" width={800} height={500} alt="" className="2xl:absolute 2xl:right-[-9rem] 2xl:top-0" />
                    </div>
                </div>
            </Fade>
        </div>
    )
}
