"use client"

import Image from "next/image"

// Organize all images in a structured array
const galleryImages = [
  {
    id: 1,
    src: "/images/shareYourSetup/share-your-setup-1.png",
    alt: "Gallery bedroom setup",
    width: 400,
    height: 500,
    className: "h-[382px] w-[274px] object-cover object-right xl:w-[78px]",
  },
  {
    id: 2,
    src: "/images/shareYourSetup/share-your-setup-2.png",
    alt: "Gallery bedroom setup",
    width: 500,
    height: 400,
    className: "h-[312px] w-[451px] object-cover object-center",
  },
  {
    id: 3,
    src: "/images/shareYourSetup/share-your-setup-3.png",
    alt: "Gallery bedroom setup",
    width: 400,
    height: 500,
    className: "h-[323px] w-[381px] object-cover object-right xl:w-[186px]",
  },
  {
    id: 4,
    src: "/images/shareYourSetup/share-your-setup-4.png",
    alt: "Gallery bedroom setup",
    width: 450,
    height: 300,
    className: "h-[242px] w-[344px] object-cover object-center",
  },
  {
    id: 5,
    src: "/images/shareYourSetup/share-your-setup-5.png",
    alt: "Gallery bedroom setup",
    width: 400,
    height: 500,
    className: "h-[392px] w-full object-cover object-center sm:w-[295px]",
  },
  {
    id: 6,
    src: "/images/shareYourSetup/share-your-setup-6.png",
    alt: "Gallery bedroom setup",
    width: 400,
    height: 500,
    className: "h-[348px] w-[290px] object-cover object-center",
  },
  {
    id: 7,
    src: "/images/shareYourSetup/share-your-setup-7.png",
    alt: "Gallery bedroom setup",
    width: 200,
    height: 300,
    className: "h-[242px] w-[178px] object-cover object-center",
  },
  {
    id: 8,
    src: "/images/shareYourSetup/share-your-setup-8.png",
    alt: "Gallery drawing room setup",
    width: 450,
    height: 500,
    className: "h-[433px] w-[425px] object-cover object-center",
  },
  {
    id: 9,
    src: "/images/shareYourSetup/share-your-setup-9.png",
    alt: "Gallery drawing room setup",
    width: 400,
    height: 300,
    className: "h-[196px] w-[258px] object-cover object-center",
  },
]

// Create a reusable component for gallery images
const GalleryImage = ({ image }) => {
  return (
    <Image
      src={image.src || "/placeholder.svg"}
      width={image.width}
      height={image.height}
      alt={image.alt}
      className={image.className}
    />
  )
}

const FurnitureGallery = () => {
  return (
    <section className="mx-auto max-w-[1440px] overflow-hidden pt-[67px] pb-[50px]">
      {/* Header Section */}
      <div className="text-center mb-[43px]">
        <h4 className="mb-[8px] text-[20px] leading-[150%] font-semibold text-muted-light">Share your setup with</h4>
        <h1 className="text-[30px] leading-[120%] font-bold text-info md:text-[40px]">#FurniroFurniture</h1>
      </div>

      {/* Gallery Layout */}
      <div className="flex flex-col items-center gap-[16px] lg:flex-row xl:-mt-[28px]">
        {/* Left Column */}
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-baseline gap-[16px]">
            <GalleryImage image={galleryImages[0]} />
            <div>
              <GalleryImage image={galleryImages[1]} />
            </div>
          </div>
          <div className="flex gap-[16px]">
            <GalleryImage image={galleryImages[2]} />
            <div>
              <GalleryImage image={galleryImages[3]} />
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="w-full sm:max-w-[295px] xl:-mt-[14px]">
          <GalleryImage image={galleryImages[4]} />
        </div>

        {/* Right Column */}
        <div className="flex w-full flex-col items-center gap-[16px] xl:max-w-[570px] xl:items-end">
          <div className="flex items-baseline gap-[16px]">
            <GalleryImage image={galleryImages[5]} />
            <GalleryImage image={galleryImages[7]} />
          </div>
          <div className="flex gap-[16px]">
            <GalleryImage image={galleryImages[6]} />
            <GalleryImage image={galleryImages[8]} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FurnitureGallery
