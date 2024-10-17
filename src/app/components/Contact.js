import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import image6 from "@/assets/image4.png";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="relative flex lg:flex-row flex-col justify-center items-center gap-10  lg:h-[80vh] lg:px-40 ">
      {/* Background Image with Black Overlay */}
      <Image 
        src={image6}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black opacity-85 z-10"></div>

      <div className="relative z-20 lg:p-6 pl-4 lg:w-3/5 mt-8 text-left">
        <div className="relative">
          {/* Background Text */}
          <div className="absolute top-0 bottom-16 flex lg:justify-start lg:items-start z-0">
            <p className="lg:text-[12rem] text-7xl text-gray-400 opacity-10 transform ">Booking</p>
          </div>
          
          {/* Foreground Content */}
          <div className="relative z-10">
            <p className="text-base text-secondary mb-2">Booking Now</p>
            <h1 className="lg:text-6xl text-4xl font-extralight text-neutral mb-8">Book your appointment online And call our salon</h1>
          </div>
        </div>
        <button className="bg-secondary px-4 lg:px-6 py-3 lg:py-5 flex justify-center items-center gap-2 text-neutral">
          BOOKING APPOINTMENT <MdKeyboardDoubleArrowRight />
        </button>
      </div>

      <div className="relative z-20 flex justify-center items-center h-full lg:justify-end lg:w-2/5 p-6 lg:mt-8">
        <div className="bg-neutral w-64 h-64 p-4 flex flex-col items-center justify-center  cursor-pointer mx-8">
          <FiPhoneCall className="mr-2 text-secondary bg-secondary bg-opacity-25 w-16 h-16 p-4 rounded-full mb-6" />
          <h2 className="text-base text-center">Call Now</h2>
          <p className="text-lg text-center">+123 (568) 584</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
