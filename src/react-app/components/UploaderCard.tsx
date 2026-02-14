// src/components/UploadSection.tsx
import CameraIcon from "@/react-app/assets/camera.svg";

export default function UploadSection() {
  return (
    <div className="w-full bg-[#F38D9F] flex flex-col items-center justify-center mb-6 sm:mb-8">

      {/* Inner light blue rectangle */}
      <div className="w-[90%] xs:w-full bg-[#EAF2F8] sm:shadow-[12px_12px_0_black] lg:max-w-6xl
                      py-4 px-6 mx-6 my-6 sm:my-8">

          {/* Camera Icon */}
          <div className="flex justify-center transform transition-transform duration-300 hover:scale-110 mb-4">
            <img
              src={CameraIcon}
              className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] h-auto"
            />
          </div>

          {/* Title */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold 
                         tracking-wide font-serif text-center leading-[1.5] my-4">
            СПОДЕЛЕТЕ СНИМКИТЕ СИ
          </h2>
      </div>
        {/* Yellow button */}
        <button className="bg-[#FFF4D6] px-8 sm:px-10 py-3 sm:py-4 font-bold shadow-[6px_6px_0_black] 
                           active:translate-y-1 active:shadow-none transition-transform duration-150 
                           w-[60%] max-w-[300px] mb-6 sm:mb-8 rounded-lg">
          КАЧВАНЕ
        </button>

    </div>
  );
}
