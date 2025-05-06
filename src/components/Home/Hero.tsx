import React from 'react';
import Image from 'next/image';
import Button from '@/ui/Button';

const Hero = () => {
  return (
    <section className="relative w-full h-auto">
      {/* Background Image */}
      <div className="relative w-full h-[500px] md:h-[716.828px]">
        <Image
          src="/images/banner.png"
          alt="Hero Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        
        {/* Content Overlay */}
          <div className="absolute md:top-[157.3px] top-[116.53px] md:right-[58px] bottom-[116.53px] w-full md:w-[643px] px-[16px] md:px-0">
            <div className="bg-[#FFF3E3] rounded-lg p-[24px] md:p-[37px_56px_37px_41px] w-full h-auto md:h-[443px] flex flex-col justify-center">
              <span className="text-main text-[14px] md:text-[16px] font-semibold tracking-[3px] uppercase">
                New Arrival
              </span>
              
              {/* Main Heading */}
              <h1 className="text-primary text-[30px] md:text-[52px] font-bold leading-tight md:leading-[65px] mt-[4px] mb-[17px]">
                Discover Our<br />New Collection
              </h1>
              
              {/* Description */}
              <p className="text-main font-medium text-[16px] md:text-[18px] leading-[24px] mb-[26px] md:mb-[46px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
              
              {/* Button */}
              <Button className="max-w-[222px] py-[12px] md:py-[25px] uppercase font-bold">
                BUY Now
              </Button>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;