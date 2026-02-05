import weddingImg from "@/react-app/assets/wedding.jpg";

export default function Hero() {
  return (
   <section className="w-screen bg-[#FFC1CC] flex justify-center">
      <img
        src={weddingImg}
        alt="Wedding"
        className="w-full max-h-screen object-contain"
      />
    </section>
  );
}
