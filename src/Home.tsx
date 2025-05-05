import React from 'react'
import CarouselHome from './components/Carousel'

function Home() {
  return (
    <div className='w-full min-h-screen'>
      {/* navbar */}
      <div className="w-full flex z-10 justify-center mt-[23px]">
        <nav className="w-[60%] h-[145px] relative z-10 ">
          <div className="w-full h-[92px] bg-[#001A4D] text-white flex items-center justify-center 
          rounded-tl-[4px] rounded-tr-[4px] px-4 ">
            <h1 className="text-[28px] font-normal">
              Umroh<span className="font-extrabold">Hub</span>
            </h1>
          </div>
          <div className="w-full h-[53px] flex justify-between p-2 bg-[#D1F4FA] rounded-br-[4px] rounded-bl-[4px]">
            <div className='w-full h-full items-center ms-[76px] flex space-x-[27px]'>
              <p className='font-semibold text-[13px]'>Home</p>
              <p className='font-semibold text-[13px]'>Paket Umrah</p>
              <p className='font-semibold text-[13px]'>Mitra Kami</p>
              <p className='font-semibold text-[13px]'>Tentang Kami</p>
            </div>
            <div className="flex space-x-[7px] h-full items-center me-[53px]">
              <button className='bg-[#001A4D] h-[80%] text-white rounded-[2px] items-center px-2'>
                Daftar
              </button>
              <button className='bg-[#D1F4FA] h-[80%] border-[1px] border-[#001A4D] items-center rounded-[2px] px-2'>
                  Masuk
              </button>
            </div>
          </div>
        </nav>
      </div>
      {/* carousel */}
      <div className=" w-[80%] h-full z-0 inset-0">
        <div className="absolute w-full h-full top-0 z-0">

        <CarouselHome/>
        </div>
      </div>
    </div>
  )
}

export default Home