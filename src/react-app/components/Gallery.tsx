import { useEffect, useState } from "react";

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch(
          "api/photos"
        );

        const data: unknown = await res.json();

        if (
          typeof data === "object" &&
          data !== null &&
          "images" in data &&
          Array.isArray((data as any).images)
        ) {
          setImages((data as any).images);
        } else {
          setImages([]);
        }
      } catch (error) {
        console.error("Failed to load images:", error);
        setImages([]);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  return (
    <div className="w-[90%] xs:w-full mx-6 mb-6 sm:mb-8 flex flex-col justify-center items-start lg:max-w-6xl">
      <div className="bg-[#FFC1CC] shadow-[6px_6px_0_black] sm:shadow-[12px_12px_0_black] w-full mb-6">
        <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.36] mb-2 tracking-[0.04em] px-6">
          ГАЛЕРИЯ
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        {loading ? (
          <p>Loading...</p>
        ) : images.length === 0 ? (
          <p>No images yet.</p>
        ) : (
          images.map((key) => (
            <div
              key={key}
              className="aspect-square overflow-hidden rounded-lg"
            >
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
