"use client";
import Image from "next/image";

export const VideoCard = ({ videoArr, data1 = [], startIndex }: any) => {
  const visibleCount = 3; 
  const maxIndex = Math.max(0, data1.length - visibleCount);

  return (
    <div className="w-full flex sm:mt-0 mt-[-100px]">
      <div className="flex lg:w-[1155px] overflow-x-scroll sm:overflow-hidden transition-transform duration-300 justify-start">
        <div
          className="flex transition-transform duration-300 justify-start gap-[20px]"
          style={{
            transform: `translateX(-${Math.min(startIndex, maxIndex) * 575}px)`,
          }}
        >
          {data1?.map((el: any, i: number) => {
            // Extract the video ID from the YouTube URL
            const videoId = el.url.match(
              /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
            )?.[1];

            return (
              <div
                key={i}
                className="lg:w-[555px] sm:w-[400px] w-[90%] h-auto" // Responsive width based on screen size
              >
                {videoId ? (
                  <iframe
                    className="w-full h-[200px] sm:h-[300px] lg:h-[420px] object-cover" // Responsive height
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
