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

      {/* =========== Companies list section start ============= */}
      <div className="bg-[#f7f7f7] py-[3rem]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[2rem] max-w-[1440px] px-[10px] mx-auto">
          <Image src="/images/company1.png" width={278} height={53} alt="" />
          <Image src="/images/company2.png" width={278} height={53} alt="" />
          <Image src="/images/company3.png" width={278} height={53} alt="" />
          <Image src="/images/company4.png" width={278} height={53} alt="" />
          <Image src="/images/company5.png" width={278} height={53} alt="" />
        </div>
      </div>
      {/* =========== Companies list section end ============= */}

      {/* ======================= start ================  */}
      <div className="py-[4rem]">
        <div className="container flex-col gap-[4rem]">
          <div className="flex flex-col gap-[10px] mx-auto md:w-[57%]">
            <h1 className="text-[32px] font-[600] leading-[35px]">Empieza a colaborar hoy mismo a través de campañas con impacto real</h1>
            <p className="text-[16px] font-[500] leading-[22px]">Desarrolla colaboraciones con impacto en las ventas de tu negocio o las de tus clientes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] place-items-center">
            <div className="bg-[#DED2FF] max-w-[420px] w-full px-[24px] py-[100px] flex flex-col gap-[1.5rem] rounded-[8px]">
              <h1 className="text-[32px] font-[600] leading-[35px]">🚀 Crea tu campaña</h1>
              <p className="text-[16px] font-[400] leading-[22px]">Completa el brief de la campaña y lanza tu campaña en nuestra app, libre de cobros y comisiones.</p>
            </div>
            <div className="bg-[#FFEEF7] max-w-[420px] w-full px-[24px] py-[100px] flex flex-col gap-[1.5rem] rounded-[8px]">
              <h1 className="text-[32px] font-[600] leading-[35px]">📱 Elige y colabora</h1>
              <p className="text-[16px] font-[400] leading-[22px]">¿No sabes cómo elegir? Utiliza nuestras recomendaciones basadas en datos de audiencia y engagement.</p>
            </div>
            <div className="bg-[#FFEFD4] max-w-[420px] w-full px-[24px] py-[100px] flex flex-col gap-[1.5rem] rounded-[8px]">
              <h1 className="text-[32px] font-[600] leading-[35px]">⭐ Califica y repite</h1>
              <p className="text-[16px] font-[400] leading-[22px]">Cuéntanos sobre tu experiencia y vuelve a colaborar. Contrata nuestros planes mensuales para colaboraciones ilimitadas.</p>
            </div>
          </div>
        </div>
      </div>
      {/* ======================= end ================  */}
    </div>
  )
}
