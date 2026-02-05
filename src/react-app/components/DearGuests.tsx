// src/components/DearGuests.tsx
export default function DearGuests() {
  return (
    <section className="w-full">
      <div className="w-full bg-[#FFC1CC] max-w-4xl px-6 flex flex-col items-center justify-center">
        <div className="w-full bg-[#EAF2F8]">
            {/* Title */}
        <h1
          className="font-serif font-bold text-text
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                     leading-[1.36]
                     mb-10 tracking-[0.04em]"
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
      </div>
    </section>
  );
}
