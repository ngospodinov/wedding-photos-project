// src/components/UploadSection.tsx
import CameraIcon from "@/react-app/assets/camera.svg";

export default function UploadSection() {
  return (
    <section className="w-full">
      <div className="w-full max-w-4xl px-6 flex flex-col items-center justify-center">
        {/* Inner light blue rectangle */}
        <div className="w-full bg-[#EAF2F8] shadow-[6px_6px_0_black]">
          {/* Camera Icon */}
          <div className="flex justify-center transform transition-transform duration-300 hover:scale-110 mb-4">
            <img
              src={CameraIcon}
              className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] h-auto"
            />
          </div>

          {/* Title */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-text font-serif text-center py-2">
            СПОДЕЛЕТЕ СНИМКИТЕ СИ
          </h2>
        </div>

        {/* Yellow button */}
        <button className="bg-[#FFF4D6] px-8 sm:px-10 py-3 sm:py-4 font-bold shadow-[6px_6px_0_black] active:translate-y-1 active:shadow-none transition-transform duration-150 w-[60%] max-w-[300px]">
          КАЧВАНЕ
        </button>
      </div>
    </section>
  );
}
