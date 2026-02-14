// src/App.tsx
import "./App.css";
import DearGuests from "./components/DearGuests";
import UploadCard from "./components/UploaderCard";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="bg-[#fff4d6] flex flex-col items-center justify-center min-h-screen mx-0">
      <Hero/>
  
      <DearGuests/>

      <UploadCard />

      <Gallery/>
    </div>
  );
}

export default App;
