import CameraIcon from "@/react-app/assets/camera.svg";
import { useState } from "react";

type UploadCardProps = {
  onUpload?: (key: string) => void;
};

export default function UploadCard({ onUpload }: UploadCardProps) {
  const [status, setStatus] = useState("");
  const [fileName, setFileName] = useState("");

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setStatus("Uploading...");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Нещо се обърка при качването.");

      const data = await res.json();
      console.log("Uploaded:", data);

      setStatus("Успешно качване!");

      // ✅ Notify parent to add the new image to gallery immediately
      if (onUpload && data.key) {
        onUpload(data.key);
      }
    } catch (err) {
      console.error(err);
      setStatus("Неуспешно качване :(");
    }
  };

  return (
    <div className="w-full bg-[#F38D9F] flex flex-col items-center justify-center mb-6 sm:mb-8">
      {/* Inner light blue rectangle */}
      <div className="w-[90%] xs:w-full bg-[#EAF2F8] sm:shadow-[12px_12px_0_black] lg:max-w-6xl
                      py-4 px-6 mx-6 my-6 sm:my-8 flex flex-col items-center">
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

        {/* Upload Label & Input */}
        <label
          htmlFor="file-upload"
          className="bg-[#FFF4D6] px-8 sm:px-10 py-3 sm:py-4 font-bold shadow-[6px_6px_0_black] 
                     active:translate-y-1 active:shadow-none transition-transform duration-150 
                     w-[60%] max-w-[300px] mb-6 sm:mb-8 rounded-lg cursor-pointer flex justify-center items-center"
        >
          КАЧВАНЕ
          <input
            id="file-upload"
            type="file"
            accept="image/*,video/*"
            onChange={handleUpload}
            className="hidden"
          />
        </label>

        {/* Selected file name */}
        {fileName && (
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-semibold">Selected:</span> {fileName}
          </p>
        )}

        {/* Status message */}
        {status && (
          <p
            className={`text-sm ${
              status.includes("успешно") ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
