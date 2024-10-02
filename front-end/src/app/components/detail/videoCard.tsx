"use client";
import Image from "next/image";
export const VideoCard = ({  data1, startIndex }: any) => {
  const visibleCount = 1; 
  const maxIndex = Math.max(0, data1?.length - visibleCount);

  return (
    <div className="w-full flex sm:mt-0 mt-[-100px]">
      <div className="flex lg:w-[1155px] overflow-x-scroll sm:overflow-hidden transition-transform duration-300 justify-start">
        <div
          className="flex transition-transform duration-300 justify-start gap-[20px]"
          style={{
            transform: `translateX(-${Math.min(startIndex, maxIndex) * 387}px)`,
          }}
        >
          {data1?.map((el: any, i: number) => {
            const videoId = el.url.match(
              /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
            )?.[1];
            return (
              <div
                key={i}
                className="w-[367px] h-auto" 
              >
                {videoId ? (
                  <iframe
                    className="w-full h-[200px] sm:h-[300px]  object-cover" 
                    src={`https://www.youtube.com/embed/${videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <p>Invalid video URL</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
