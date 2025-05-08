import Link from "next/link";

export default function Footer() {
  return (
    <footer className="layout_container border-t border-[rgba(0,0,0,0.17)] mt-[50px]">
      <div className="max-w-[1240.015px] mx-auto pt-[32px] md:pt-[48px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 gap-[24px]">
          {/* Logo */}
          <div className="flex flex-col">
            <h2 className="text-[20px] md:text-[24px] font-bold mb-[30px] md:mb-[55px]">
              Funiro.
            </h2>
            <p className="text-[#9F9F9F] font-normal text-[14px] sm:text-[16px] w-full max-w-[285px]">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div className="lg:pl-[138px]">
            <h3 className="text-[#9F9F9F] font-medium text-[14px] sm:text-[16px] mb-[30px] md:mb-[55px]">
              Links
            </h3>

            <ul className="flex flex-col gap-[20px] md:gap-[46px]">
              <li>
                <Link
                  href="/"
                  className="font-medium text-[14px] sm:text-[16px] hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="font-medium text-[14px] sm:text-[16px] hover:underline"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-medium text-[14px] sm:text-[16px] hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-medium text-[14px] sm:text-[16px] hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-[#9F9F9F] font-medium text-[14px] sm:text-[16px] mb-[30px] md:mb-[55px]">
              Help
            </h3>

            <ul className="flex flex-col gap-[20px] md:gap-[46px]">
              <li>
                <Link
                  href="/payment"
                  className="font-medium text-[14px] sm:text-[16px] hover:underline"
                >
                  Payment Options
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="font-medium text-[14px] sm:text-[16px] hover:underline"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policies"
                  className="font-medium text-[14px] sm:text-[16px] hover:underline"
                >
                  Privacy Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-[#9F9F9F] font-medium text-[14px] sm:text-[16px] mb-[30px] md:mb-[55px]">
              Newsletter
            </h3>
            <div className="flex items-center gap-[11px]">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="outline-none border-b border-black bg-transparent flex-grow py-1"
              />
              <button className="border-b border-black py-1 uppercase cursor-pointer ">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D9D9D9] mt-[28px] md:mt-[48px] pt-[20px] md:pt-[35px] pb-[24px] md:pb-[38px]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[16px]">
              © {new Date().getFullYear()} furino. All rights reverved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
