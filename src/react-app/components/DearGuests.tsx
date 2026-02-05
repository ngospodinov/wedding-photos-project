// src/components/DearGuests.tsx
export default function DearGuests() {
  return (
      <div className="bg-[#FFC1CC] lg:max-w-6xl flex flex-col items-center shadow-[6px_6px_0_black] 
                      justify-center sm:shadow-[12px_12px_0_black] py-4 px-6 mx-6 mb-12">
     
            {/* Title */}
        <h1
          className="font-serif font-bold text-text
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                     leading-[1.36]
                     mb-5 tracking-[0.04em]"
        >
          СКЪПИ ГОСТИ
        </h1>

        {/* Body text */}
        <p
          className="font-sans text-text
                     text-lg sm:text-xl md:text-2xl lg:text-3xl
                     leading-[1.2]"
        >
          Добре дошли в нашия албум от спомени. Тук можете да споделите своите
          снимки и видеа от нашия сватбен ден — мигове, които може би сме
          пропуснали, но които ще запазим завинаги благодарение на вас.
          <br /><br />
          Качете своите снимки и ни помогнете да съберем всички красиви моменти,
          които направиха този ден толкова специален за нас.
        </p>
        
      </div>
  );
}
