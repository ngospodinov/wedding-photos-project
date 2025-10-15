import { useState } from "react";

export default function UploadCard() {
  const [status, setStatus] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

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
    } catch (err) {
      console.error(err);
      setStatus("Неуспешно качване :(");
    }
  };

  return (
    <div className="card w-full max-w-sm mx-auto mt-10 p-6 rounded-2xl shadow-lg bg-white flex flex-col items-center gap-4 border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800">
        Upload your memories
      </h2>

      <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 mb-3 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 010 10H7z"
            />
          </svg>
          <p className="text-sm">
            <span className="font-medium">Tap to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-400">PNG, JPG, or MP4 up to 20MB</p>
        </div>
        <input
          id="file-upload"
          type="file"
          accept="image/*,video/*"
          onChange={handleUpload}
          className="hidden"
        />
      </label>

      {fileName && (
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Selected:</span> {fileName}
        </p>
      )}
      {status && (
        <p
          className={`text-sm ${
            status.includes("✅")
              ? "text-green-600"
              : status.includes("❌")
              ? "text-red-600"
              : "text-gray-600"
          }`}
        >
          {status}
        </p>
      )}
    </div>
  );
}
