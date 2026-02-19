type GalleryProps = {
  images: string[];
};

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="w-[90%] xs:w-full mx-6 mb-6 sm:mb-8 flex flex-col justify-center items-start lg:max-w-6xl">
      <div className="bg-[#FFC1CC] shadow-[6px_6px_0_black] sm:shadow-[12px_12px_0_black] w-full mb-6">
        <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.36] mb-2 tracking-[0.04em] px-6">
          ГАЛЕРИЯ
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        {images.length === 0 ? (
          <p className="col-span-2 text-gray-600">No images yet.</p>
        ) : (
          images.map((key) => (
            <div key={key} className="aspect-square overflow-hidden rounded-lg">
              <img
                src={`/api/photos/${key}`}
                alt="Wedding photo"
                className="w-full h-full rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}