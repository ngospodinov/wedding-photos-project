// src/App.tsx
import "./App.css";
import DearGuests from "./components/DearGuests";
import UploadCard from "./components/UploaderCard";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import { useState, useEffect } from "react";

function App() {
const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    async function loadImages() {
      try {
        const res = await fetch("/api/photos");
        const data = await res.json();
        if (Array.isArray(data.images)) setImages(data.images);
      } catch (err) {
        console.error(err);
      }
    }
    loadImages();
  }, []);
  return (
    <div className="bg-[#fff4d6] flex flex-col items-center justify-center min-h-screen mx-0">
      <Hero/>
  
      <DearGuests/>

      <UploadCard onUpload={(key) => setImages((prev) => [key, ...prev])} />

      <Gallery images={images}/>
    </div>
  );
}

export default App;
