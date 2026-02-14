export default function Gallery() {
     const images = [
    "https://picsum.photos/600/600?1",
    "https://picsum.photos/600/600?2",
    "https://picsum.photos/600/600?3",
    "https://picsum.photos/600/600?4",
  ];
  return (
        <div className="w-[90%] xs:w-full mx-6 mb-6 sm:mb-8 flex flex-col justify-center items-start
                        lg:max-w-6xl"
        >

            <div className="bg-[#FFC1CC] shadow-[6px_6px_0_black] sm:shadow-[12px_12px_0_black]
                            w-full mb-6"
            >
                {/* Title */}
                <h1
                    className="font-serif font-bold 
                                text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                                leading-[1.36]
                                mb-2 tracking-[0.04em] px-6"
                >
                    ГАЛЕРИЯ
                </h1>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 w-full">
                {images.map((src, index) => (
                    <div
                    key={index}
                    className="aspect-square overflow-hidden  rounded-lg"
                    >
                    <img
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-full rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                    />
                    </div>
                ))}
            </div>
        </div>
  );
}