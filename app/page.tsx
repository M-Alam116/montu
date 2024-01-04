import Image from "next/image"
export default function Home() {
  return (
    <div className="">
      {/* =================== Hero Section start ================= */}
      <div className="py-[3rem]">
        <div className="grid lg:grid-cols-5 gap-[2rem] items-center max-w-[1300px] px-[10px] mx-auto">
          <div className="flex lg:col-span-2 flex-col gap-[1rem] items-center md:items-start">
            <h1 className="text-[40px] font-[600] leading-[50px] text-[--blackColor] text-center md:text-left">Vender con <span className="text-[--primaryColor]">influencers</span> nunca fue más simple</h1>
            <p className="text-[16px] font-[500] leading-[24px] text-[#2D3648] text-center md:text-left">Conoce la primera solución global de marketing con influencers. Diseñada para empresas, agencias y creadores de contenido.</p>
            <button className="text-[16px] font-[600] leading-[20px] w-fit text-white list-none bg-[--primaryColor] outline-none rounded-[6px] py-[16px] px-[24px]">¡Empecemos! 🚀</button>
          </div>
          <div className="flex lg:col-span-3 gap-[1rem]">
            <Image src="/images/iphone15.png" width={1251} height={756} alt="" />
          </div>
        </div>
      </div>
      {/* =================== Hero Section End ================= */}

      {/* =========== Companies list section start ============= */}
      <div className="bg-[#f7f7f7] py-[3rem] md:py-[5rem]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[2rem] max-w-[1300px] px-[10px] mx-auto">
          <Image src="/images/company1.png" width={278} height={53} alt="" />
          <Image src="/images/company2.png" width={278} height={53} alt="" />
          <Image src="/images/company3.png" width={278} height={53} alt="" />
          <Image src="/images/company4.png" width={278} height={53} alt="" />
          <Image src="/images/company5.png" width={278} height={53} alt="" />
        </div>
      </div>
      {/* =========== Companies list section end ============= */}

      {/* ======================= start ================  */}
      <div className="py-[3rem] md:py-[5rem]">
        <div className="container flex-col gap-[4rem]">
          <div className="flex flex-col gap-[10px] mx-auto md:w-[57%]">
            <h1 className="text-[32px] font-[600] leading-[35px]">Empieza a colaborar hoy mismo a través de campañas con impacto real</h1>
            <p className="text-[16px] font-[500] leading-[22px] text-[#717D96]">Desarrolla colaboraciones con impacto en las ventas de tu negocio o las de tus clientes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] place-items-center">
            <div className="bg-[#DED2FF] max-w-[420px] w-full px-[15px] md:px-[24px] py-[50px] md:py-[100px] flex flex-col gap-[1.5rem] rounded-[8px]">
              <h1 className="text-[28px] md:text-[32px] font-[600] leading-[35px] text-center md:text-left">🚀 Crea tu campaña</h1>
              <p className="text-[16px] font-[400] leading-[22px] text-center md:text-left">Completa el brief de la campaña y lanza tu campaña en nuestra app, libre de cobros y comisiones.</p>
            </div>
            <div className="bg-[#FFEEF7] max-w-[420px] w-full px-[15px] md:px-[24px] py-[50px] md:py-[100px] flex flex-col gap-[1.5rem] rounded-[8px]">
              <h1 className="text-[28px] md:text-[32px] font-[600] leading-[35px] text-center md:text-left">📱 Elige y colabora</h1>
              <p className="text-[16px] font-[400] leading-[22px] text-center md:text-left">¿No sabes cómo elegir? Utiliza nuestras recomendaciones basadas en datos de audiencia y engagement.</p>
            </div>
            <div className="bg-[#FFEFD4] max-w-[420px] w-full px-[15px] md:px-[24px] py-[50px] md:py-[100px] flex flex-col gap-[1.5rem] rounded-[8px]">
              <h1 className="text-[28px] md:text-[32px] font-[600] leading-[35px] text-center md:text-left">⭐ Califica y repite</h1>
              <p className="text-[16px] font-[400] leading-[22px] text-center md:text-left">Cuéntanos sobre tu experiencia y vuelve a colaborar. Contrata nuestros planes mensuales para colaboraciones ilimitadas.</p>
            </div>
          </div>
        </div>
      </div>
      {/* ======================= end ================  */}

      {/* ================== start ================== */}
      <div className="bg-[#F7F7F7] py-[3rem] md:py-[5rem]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[2rem]">
            <div className="flex flex-col gap-[2rem]">
              <h1 className="text-[32px] font-[600] leading-[35px] text-center">¿Por qué Montu?</h1>
              <p className="text-[16px] font-[500] leading-[22px] text-[#717D96]">Nuestra plataforma integrada te ahorra horas de trabajo, con creadores verificados y resultados garantizados.</p>
              <div className="flex items-center gap-[1rem]">
                <span className="text-[30px]">🤖</span>
                <h2 className="text-[20px] md:text-[24px] font-[600] leading-[24px]">Automatizaciones que te ahorrarán horas de trabajo.</h2>
              </div>
              <div className="flex items-center gap-[1rem]">
                <span className="text-[30px]">✅</span>
                <h2 className="text-[20px] md:text-[24px] font-[600] leading-[24px]">Creadores verificados y calificados.</h2>
              </div>
              <div className="flex items-center gap-[1rem]">
                <span className="text-[30px]">📈</span>
                <h2 className="text-[20px] md:text-[24px] font-[600] leading-[24px]">Recomendaciones a medida y resultados garantizados.</h2>
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <Image src="/images/mobile.png" width={700} height={700} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      {/* ================== end ================== */}

      {/* =============== start =================== */}
      <div className="py-[3rem] md:py-[5rem]">
        <div className="container flex-col gap-[1rem]">
          <h1 className="text-[32px] font-[600] leading-[35px]">Nuestros clientes no lo pueden creer.</h1>
          <p className="text-[16px] font-[500] leading-[22px] text-[#717D96] mb-[1rem]">Mira lo que nuestros usuarios dicen sobre Montu.</p>
          <div className="flex flex-col md:flex-row items-center gap-[1rem] bg-[#DED2FF] p-[1.5rem] rounded-[8px]">
            <div className="w-[150px] md:w-[100px] h-[150px] md:h-[100px] flex items-center justify-center">
              <Image src="/images/person1.svg" width={150} height={150} alt="" className="w-full" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <h2 className="text-[24px] font-[600] leading-[26px]">“Montu me ahorra horas de trabajo y nos permite conectar con nuestro público objetivo”.</h2>
              <p className="text-[16px] font-[500] leading-[22px]">Pedro Fernández, Marketing Specialist.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-[1rem] bg-[#FFEEF7] p-[1.5rem] rounded-[8px] my-[1rem]">
            <div className="w-[150px] h-[150px] flex items-center justify-center">
              <Image src="/images/person2.svg" width={150} height={150} alt="" className="w-full" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <h2 className="text-[24px] font-[600] leading-[26px]">“Montu fue el empujón que necesitábamos para atrevernos a hacer campañas con influencers. Los resultados nos han sorprendido”.</h2>
              <p className="text-[16px] font-[500] leading-[22px]">Isabel Muñoz, Emprendedora.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-[1rem] bg-[#FFEFD4] p-[1.5rem] rounded-[8px]">
            <div className="w-[150px] h-[150px] flex items-center justify-center">
              <Image src="/images/person3.svg" width={150} height={150} alt="" className="w-full" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <h2 className="text-[24px] font-[600] leading-[26px]">“Montu nos permite ordenar el trabajo con grandes volúmenes de creadores de contenido a través de un canal directo”.</h2>
              <p className="text-[16px] font-[500] leading-[22px]">Rosa Salinas, ejecutiva agencia de marketing digital.</p>
            </div>
          </div>
        </div>
      </div>
      {/* ============== end ===================== */}

      {/* ==================== start =================== */}
      <div className="py-[3rem] md:py-[5rem] bg-[#F7F7F7]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[4rem] place-items-center">
            <div className="flex gap-[1rem]">
              <Image src="/images/image3.png" width={300} height={623} alt=""></Image>
              <Image src="/images/image4.png" width={300} height={623} alt=""></Image>
            </div>
            <div className="flex flex-col gap-[2rem]">
              <h1 className="text-[32px] font-[600] leading-[35px] text-[--blackColor]">Descubre todo el poder de las integraciones</h1>
              <p className="text-[16px] font-[500] leading-[24px] text-[#717D96]">Te ofrecemos la primera app 100% integrada con Meta y TikTok, para que tengas información al detalle de todos tus colaboradores.</p>
              <div className="flex items-center gap-[1rem]">
                <Image src="/images/meta.png" width={50} height={50} alt="apple"></Image>
                <h2 className="text-[24px] font-[600] leading-[26px]">Meta Business Suite</h2>
              </div>
              <div className="flex items-center gap-[1rem]">
                <Image src="/images/insta.png" width={50} height={50} alt="apple"></Image>
                <h2 className="text-[24px] font-[600] leading-[26px]">Instagram Graph</h2>
              </div>
              <div className="flex items-center gap-[1rem]">
                <Image src="/images/tiktoc.png" width={50} height={50} alt="apple"></Image>
                <h2 className="text-[24px] font-[600] leading-[26px]">TikTok for Business</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== end =================== */}

      {/* ==================== start =================== */}
      <div className="py-[3rem] md:py-[5rem]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[4rem] place-items-center">
            <div className="flex flex-col gap-[2rem]">
              <h1 className="text-[32px] font-[600] leading-[35px] text-[--blackColor]">Todos los beneficios del marketing de influencers en un solo lugar</h1>
              <p className="text-[16px] font-[500] leading-[24px] text-[#717D96]">Gracias al poder de nuestra tecnología, podemos darte acceso a mejores colaboraciones, a un precio que no rompe tu bolsillo.</p>
              <div className="flex items-center gap-[1rem]">
                <span className="text-[30px]">🥇</span>
                <h2 className="text-[24px] font-[600] leading-[26px]">Mejora tu posicionamiento</h2>
              </div>
              <div className="flex items-center gap-[1rem]">
                <span className="text-[30px]">🤝</span>
                <h2 className="text-[24px] font-[600] leading-[26px]">Genera confianza y credibilidad</h2>
              </div>
              <div className="flex items-center gap-[1rem]">
                <span className="text-[30px]">🎯</span>
                <h2 className="text-[24px] font-[600] leading-[26px]">Involucra a tu mercado objetivo</h2>
              </div>
            </div>
            <div className="flex gap-[1rem]">
              <Image src="/images/image1.png" width={300} height={623} alt=""></Image>
              <Image src="/images/image2.png" width={300} height={623} alt=""></Image>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== end =================== */}

      {/* =============== start =============== */}
      <div className="py-[3rem] md:py-[5rem] bg-[#F7F7F7]">
        <div className="container flex-col gap-[1rem]">
          <h1 className="text-[32px] font-[600] leading-[35px]">¡Empieza a colaborar hoy!</h1>
          <p className="text-[16px] font-[500] leading-[22px] text-[#717D96]">Agendemos una reunión y comienza a colaborar a través de Montu.</p>
          <div className="flex flex-col sm:flex-row justify-between gap-[2rem] mt-[1rem]">
            <input type="text" className="p-[12px] border-2 outline-none rounded-[5px] border-[#CBD2E0] w-full sm:w-[80%]" />
            <button className="text-[16px] font-[600] leading-[20px] text-white list-none bg-[--primaryColor] outline-none rounded-[6px] py-[16px] px-[24px] w-fit">¡Empecemos! 🚀</button>
          </div>
        </div>
      </div>
      {/* =============== end =============== */}
    </div>
  )
}
