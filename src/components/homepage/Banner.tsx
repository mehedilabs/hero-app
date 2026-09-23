import React from 'react';
import BannerImg from '@/assets/hero.png'
import Image from 'next/image';
const Banner = () => {
  return (
    <div className='space-y-5 flex flex-col items-center justify-center gap-4 text-center pt-8'>
      <h2 className='font-bold text-4xl'  >We Build<br></br> <span className=" text-[#4d70eea3] ">Productive</span> Apps</h2>
      <p className='max-w-[700px]' >At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className='flex items-center gap-2'>
        <button className="btn btn-success">Google Play Store</button>
        <button className="btn btn-primary">App Store</button>
      </div >
      <Image src={BannerImg} alt='bannerimg' className='w-[650px] h-auto'/>
    </div>
  );
};

export default Banner;