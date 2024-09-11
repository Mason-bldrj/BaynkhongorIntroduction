"use client";
import Image from "next/image";

export const VideoCard = ({ videoArr,data1, startIndex }: any) => {
  return (
    <div className="w-full flex sm:mt-0 mt-[-100px]">
      <div className="flex lg:w-[1155px] overflow-scroll sm:overflow-hidden transition-transform duration-300 justify-start">
        <div
          className="flex transition-transform duration-300 justify-start gap-[20px]"
          style={{
            transform: `translateX(-${startIndex * 575}px)`,
          }}
        >
          {data1?.map((el: any, i: number) => {
            // Extract the video ID from the YouTube URL
            const videoId = el.url.match(
              /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
            )?.[1];

            return (
              <div key={i} className="lg:w-[555px]  sm:h-[420px] h-[200px] w-full ">
                {videoId ? (
                  <iframe
                  className="sm:w-[400px] sm:h-[300px] lg:w-[555px] lg:h-[420px] w-[150px] h-[100px]"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    width="555"
                    height="420"
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
