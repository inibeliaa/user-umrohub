import React from 'react'
import CarouselHome from './components/Carousel'
import penawaranBg from "./assets/images/Group.png"
import penawaranBg2 from "./assets/images/Group (1).png"
import vector from "./assets/images/Vector.png"
// import penawaranBg2 from "./assets/images/Group (1).png"
import example4 from "./assets/images/Rectangle 122.png"
import exampleCards from "./assets/images/pexels-taha-elahi-7984586.png"
import hotelIcon from "./assets/icons/Component 1.svg"
import paketBg from "./assets/images/Rectangle 111.png"
import paketExample from "./assets/images/11848643a6d154484c0aa44d026fef3c.png"
import hotelIcon2 from "./assets/icons/Component 7.svg"
import planeIcon from "./assets/icons/Component 8.svg"
import kabahIcon from "./assets/icons/Component 23.svg"
import planeIcon2 from "./assets/icons/Component 24.svg"
import waIcons from "./assets/icons/ic_baseline-whatsapp.svg"
function Home() {
  return (
    <div className='w-full min-h-screen flex flex-col'>
      {/* navbar */}
      <div className="w-full flex fixed z-50 justify-center mt-[23px]">
        <nav className="w-[60%] h-[145px] relative z-50">
          <div className="w-full h-[92px] bg-[#001A4D] text-white flex items-center justify-center 
          rounded-tl-[4px] rounded-tr-[4px] px-4 ">
            <h1 className="text-[28px] font-normal">
              Umroh<span className="font-extrabold">Hub</span>
            </h1>
          </div>
          <div className="w-full h-[53px] flex justify-between p-2 bg-[#D1F4FA] rounded-br-[4px] rounded-bl-[4px]">
            <div className='w-full h-full items-center ms-[76px] flex space-x-[27px]'>
              <div className="flex flex-col items-center justify-center">
                <p className='font-semibold text-[13px]'>Home</p>
                <div className="w-2 h-1 bg-blue-900 rounded-full"></div>
              </div>
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
      
      {/* content area */}
      <div className="flex flex-col w-full">
        
        {/* carousel */}
        <div className="w-full z-0">
          <CarouselHome/>
        </div>
        
        {/* penawaran */}
        <div className="w-full h-[600px] z-10 bg-gradient-to-b from-[#00153E] to-[#3C97FF]">
        <div className="relative w-full h-[600px] z-10 bg-gradient-to-b from-[#001A4D]/55 via-[#5CE9FF52] to-[#001A4D]">
          <div className="w-full h-full flex justify-between z-0">
            <div className="h-full w-[50%]">
              <img src={penawaranBg} alt="background" className="w-[90%] h-full object-cover" />
            </div>
            <div className="h-full w-[50%] relative">
              <img src={penawaranBg2} alt="background" className="w-[90%] h-full absolute right-0 object-cover" />
            </div>
          </div>
          <div className="absolute inset-0 z-20 flex flex-col mt-[40px] items-center h-full">
            <h1 className="text-[#10F5EA] font-semibold">Penawaran Khusus</h1>
              <h1 className="text-white font-extrabold text-[24px]">Penawaran Khusus Umroh</h1>

              {/* cards */}
              <div className="flex w-full items-center justify-center">
                <div className="bg-white rounded-[10px] w-[23%] z-20 h-[530px] mt-[32px]">
                  <img src={exampleCards} alt="background" className="w-[100%] rounded-t-[10px] h-[30%]" />
                  <div className="w-full border-b-2 pb-2 border-[#CBCBCB] h-[285px]">
                    <div className="w-full px-[17px] py-[20px] flex flex-col">
                      <h1 className="font-bold text-[18px]">Paket Umroh</h1>
                      <div className="flex space-x-2 w-full mx-2 mt-[16px]">
                        <img src={hotelIcon} alt="background" className="w-[30px] h-[30px]" />
                        <div className="flex-col w-full">
                          <div className="flex w-full">
                            <h6 className='text-[12px] font-semibold'>Mekkah :
                              <span className='text-yellow-300 mx-[7px]'>★ ★ ★ ★ ★</span>
                              (Quad Room)
                            </h6>
                          </div>
                            <h1 className="text-[#209FB2] text-[10px] font-semibold">200 m ke Masjidil Haram</h1>
                        </div>
                      </div>
                      <div className="flex space-x-2 w-full mx-2 mt-[16px]">
                        <img src={hotelIcon} alt="background" className="w-[30px] h-[30px]" />
                        <div className="flex-col w-full">
                          <div className="flex w-full">
                            <h6 className='text-[12px] font-semibold'>Mekkah :
                              <span className='text-yellow-300 mx-[7px]'>★ ★ ★ ★ ★</span>
                              (Quad Room)
                            </h6>
                          </div>
                            <h1 className="text-[#209FB2] text-[10px] font-semibold">200 m ke Masjidil Haram</h1>
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-[30px] ms-3">
                        <h1 className="text-[#ACACAC] text-[12px] font-semibold line-through">Rp 40.000.000/pak</h1>
                        <h1 className="text-[#209FB2] text-[15px] -translate-y-1 font-semibold">Rp 24.000.000/pak</h1>
                      </div>
                      <div className="flex w-[80%] ms-1 justify-between mt-[20px]">
                        <button className='py-3 w-[100px] text-[13px] font-semibold rounded-full bg-[#D1F4FA]'>
                          Pesan
                        </button>
                        <button className='py-3 text-[13px] font-semibold'>
                            Lihat Detail
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col space-y-2 px-[17px] py-[20px] w-full mt-[8px] ">
                    <div className="w-full h-[13px] rounded-[10px] bg-[#E5E5E5]">
                      <div className="w-[80%] rounded-s-[10px] h-full bg-gradient-to-r from-[#004492] to-[#10F5EA]">
                      </div>
                    </div>
                    <h1 className=" text-[12px] font-semibold">Pesanan: 100/150</h1>
                  </div>
                </div>
              </div>
            </div>            
        </div>
        </div>
        
        {/* paket */}
        <div className="w-full h-[550px] relative">
          <img src={paketBg} alt="background" className="w-full h-full object-cover" />
          <div className="w-full absolute top-14 flex justify-center">
            <div className="w-[80%] mt-3 flex flex-col">
              <div className="flex w-full justify-between">
                <h1 className=" text-white font-bold text-[20px]">
                  Paket yang tersedia
                </h1>
                <h1 className=" text-[#10F5EA] font-bold text-[15px]">
                  Lihat lebih banyak
                </h1>
              </div>
              <div className="grid grid-cols-3 mt-3">
                <div className="w-[100%] relative h-[200px] shadow-[-1px_1px_8px] shadow-white">
                  <img src={paketExample} alt="paket" className='w-full h-full object-cover' />
                  <div className="w-full h-full bg-gradient-to-b from-black/0 to-black py-3 px-5 flex flex-col space-y-3 absolute top-0">
                    <h1 className=" text-white capitalize font-bold text-[24px]">
                      Umroh Hasanah hana
                    </h1>
                    <div className="flex space-x-2">
                      <img src={hotelIcon2} alt="background" className="w-[30px] h-[30px]" />
                      <div className="flex-col w-full">
                          <div className="flex w-full">
                            <h6 className='text-white text-[12px] font-semibold'>Mekkah :
                              <span className='text-yellow-300 mx-[7px]'>★ ★ ★ ★ ★</span>
                              (Quad Room)
                            </h6>
                          </div>
                            <h1 className="text-[#5CE9FF] text-[10px] font-semibold">200 m ke Masjidil Haram</h1>
                        </div>
                    </div>
                    <div className="w-full flex justify-between">
                      <div className="flex space-x-2">
                        <img src={planeIcon} alt="background" className="w-[30px] h-[30px]" />
                        <div className="flex-col w-full">
                            <div className="flex w-full">
                              <h6 className='text-white text-[12px] capitalize font-semibold'>Lion Air
                                <span className='text-yellow-300 mx-[7px]'>★ ★ ★ ★ ★</span>
                              </h6>
                            </div>
                              <h1 className="text-[#5CE9FF] text-[10px] font-semibold">Soekarno hatta ke JED</h1>
                          </div>
                      </div>
                      <div className="absolute bottom-11 right-5 text-[45px] font-bold bg-gradient-to-br from-[#10F5EA] to-[#3C97FF] inline-block text-transparent bg-clip-text">
                       32 Jt
                     </div>
                    </div>
                    <div className="flex justify-between px-[17px] py-[20px] w-full mt-[8px] ">
                      <div className="flex  space-x-2">                     
                        <div className="w-[100px] h-[5px] rounded-[10px] bg-[#E5E5E5]">
                          <div className="w-[80%] rounded-s-[10px] h-full bg-gradient-to-r from-[#004492] to-[#10F5EA]">
                          </div>
                          </div>
                          <div className="flex-col text-center -translate-y-4">
                            <h1 className=" text-[9px] font-semibold text-center text-white">Pesanan: 100/150</h1>
                            <h1 className=" text-[9px] font-semibold text-center text-white">Tersisa: 50</h1>
                          </div>
                      </div>
                      <h1 className=" text-[#10F5EA] font-bold text-[12px] -translate-y-1">
                        Lihat detail
                      </h1>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* kenapa harus umrohub */}
        <div className="w-full grid grid-cols-2">
          <div className="w-full h-full bg-[#D1F4FA]">
          <div className="w-full relative h-full flex justify-between z-0">
            <div className="h-full w-[50%]">
              <img src={vector} alt="background" className="w-[88%] h-full opacity-70 object-cover" />
            </div>
            <div className="h-full w-[50%] relative">
              <img src={vector} alt="background" className="w-[88%] h-full absolute opacity-70 right-0 object-cover" />
              </div>
              <div className="flex absolute top-0 w-[100%] py-10 px-[13%] justify-center">
                <div className="mt-6 flex flex-col">
                  <h1 className='text-[24px] font-extrabold text-[#001A4D]'>Kenapa Harus Di 
                    <span className='text-white bg-[#001A4D] font-normal rounded-[8px] px-4 py-1 ms-2'>UmrohHub</span>
                  </h1>
                  <p className='text-[12px] text-[#001A4D] mt-[16px] w-[95%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                    <div className="flex space-x-5 mt-[26px]">
                        <button className='py-3 w-[100px] text-[13px] font-semibold rounded-full bg-[#001A4D] text-white'>
                          Pesan
                        </button>
                        <button className='py-3 text-[#001A4D] text-[13px] font-semibold'>
                            Baca Selengkapnya
                        </button>
                  </div>
                  <div className="w-full flex justify-between">

                    <div className="flex space-x-5 w-[50%] mt-[65px]">
                        <img src={hotelIcon} alt="background" className="w-[30px] h-[30px]" />
                        <div className="flex-col w-[100%]">        
                              <h6 className='text-[#001A4D] text-[13px] font-semibold'>Lorem Ipsum
                              </h6>
                              <h1 className="text-[#001A4D] text-[10px] w-[70%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</h1>
                          </div>
                    </div>
                    <div className="flex space-x-5 w-[50%] mt-[65px]">
                        <img src={hotelIcon} alt="background" className="w-[30px] h-[30px]" />
                        <div className="flex-col w-[100%]">        
                              <h6 className='text-[#001A4D] text-[13px] font-semibold'>Lorem Ipsum
                              </h6>
                              <h1 className="text-[#001A4D] text-[10px] w-[70%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</h1>
                          </div>
                      </div>
                  </div>
                  <div className="w-full flex justify-between">
                    <div className="flex space-x-5 w-[50%] mt-[65px]">
                        <img src={planeIcon2} alt="background" className="w-[30px] h-[30px]" />
                        <div className="flex-col w-[100%]">        
                              <h6 className='text-[#001A4D] text-[13px] font-semibold'>Lorem Ipsum
                              </h6>
                              <h1 className="text-[#001A4D] text-[10px] w-[70%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</h1>
                          </div>
                    </div>
                    <div className="flex space-x-5 w-[50%] mt-[65px]">
                        <img src={kabahIcon} alt="background" className="w-[30px] h-[30px]" />
                        <div className="flex-col w-[100%]">        
                              <h6 className='text-[#001A4D] text-[13px] font-semibold'>Lorem Ipsum
                              </h6>
                              <h1 className="text-[#001A4D] text-[10px] w-[70%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</h1>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            </div>
          <div className="w-full h-[570px]">
            <img src={example4} alt="background" className='object-cover w-full h-full' />
          </div>
        </div>

        {/* forum */}
        <div className="bg-white w-full h-[600px]">
        <div className="w-full h-full flex justify-between z-0">
            <div className="h-full w-[50%]">
              <img src={penawaranBg} alt="background" className="w-[90%] h-full object-cover" />
            </div>
            <div className="h-full w-[50%] relative">
              <img src={penawaranBg2} alt="background" className="w-[90%] h-full absolute right-0 object-cover" />
            </div>
          </div>
        </div>

        {/* mitra */}
        <div className="bg-gradient-to-b from-[#186FD2] to-[#001A4D] w-full h-[600px]">
        <div className="w-full h-full flex justify-between z-0">
            <div className="h-full w-[50%]">
              <img src={penawaranBg} alt="background" className="w-[90%] h-full object-cover" />
            </div>
            <div className="h-full w-[50%] relative">
              <img src={penawaranBg2} alt="background" className="w-[90%] h-full absolute right-0 object-cover" />
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="bg-[#001A4D] w-full h-[400px] grid grid-cols-4 px-[10%] py-10">
          <div className="col-span-2">
            <h1 className='text-white text-[40px]'>Umroh<span className='font-bold'>Hub</span></h1>
            <p className='text-white text-[12px] mt-[27px] w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamcoLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            <button className='bg-[#404040A6] w-[130px] text-white text-[10px] whitespace-nowrap
             font-semibold flex space-x-4 justify-center items-center rounded-full py-2 px-3 mt-[24px]'>
              <img src={waIcons} alt="whatsapp" className='w-[23px] h-[23px] me-3' />
              Hubungi kami
            </button>
            <ul className='list-disc mt-[17px] ms-4'>
              <li className="text-sm text-white">Phone: 0819237568</li>
              <li className="text-sm text-white">Fax: 1235749182</li>
              <li className="text-sm text-white">Contact Center: 0812020</li>
            </ul>
          </div>
          <div className="mt-5 w-full flex flex-col items-center">
            <h1 className='text-white text-[15px] font-bold'>Tentang Perusahaan</h1>
            <ul className='mt-[29px] flex flex-col w-[50%] items-start space-y-[11px]'>
              <li className='text-white text-[12px] font-semibold'>Beranda</li>
              <li className='text-white text-[12px] font-semibold'>Paket Umrah</li>
              <li className='text-white text-[12px] font-semibold'>Lainnya</li>
              <li className='text-white text-[12px] font-semibold'>Tentang Kami</li>    
            </ul>
          </div>
          <div className="mt-5 w-full flex flex-col items-center">
            <h1 className='text-white text-[15px] font-bold capitalize'>Jadi mitra kami</h1>
            <ul className='mt-[29px] flex flex-col w-[40%] items-start space-y-[11px]'>
              <li className='text-white text-[12px] font-semibold'>Beranda</li>
              <li className='text-white text-[12px] font-semibold'>Paket Umrah</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home