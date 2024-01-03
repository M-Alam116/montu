import Image from "next/image"
export default function Home() {
  return (
    <div className="">
      {/* =================== Hero Section start ================= */}
      <div className="py-[5rem]">
        <div className="grid lg:grid-cols-5 gap-[2rem] items-center max-w-[1440px] px-[10px] mx-auto">
          <div className="flex lg:col-span-2 flex-col gap-[1rem]">
            <h1 className="text-[40px] font-[600] leading-[50px] text-[--blackColor]">Vender con <span className="text-[--primaryColor]">influencers</span> nunca fue más simple</h1>
            <p className="text-[16px] font-[500] leading-[24px] text-[--blackColor]">Conoce la primera solución global de marketing con influencers. Diseñada para empresas, agencias y creadores de contenido.</p>
            <button className="text-[16px] font-[600] leading-[20px] w-fit text-white list-none bg-[--primaryColor] outline-none rounded-[6px] py-[16px] px-[24px]">¡Empecemos! 🚀</button>
          </div>
          <div className="flex lg:col-span-3 gap-[1rem]">
            <Image src="/images/iphone15.png" width={1251} height={756} alt="" />
          </div>
        </div>
      </div>
      {/* =================== Hero Section End ================= */}
    </div>
  )
}
