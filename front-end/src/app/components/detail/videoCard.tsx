"use client";
import Image from "next/image";

export const VideoCard = ({ videoArr, startIndex }: any) => {
  return (
    <div className="w-full flex">
      <div className="flex w-[1155px] overflow-hidden transition-transform duration-300 justify-start">
        <div
          className="flex transition-transform duration-300 justify-start gap-[20px]"
          style={{
            transform: `translateX(-${startIndex * 575}px)`,
          }}
        >
          {videoArr.map((el: any, i: number) => {
            // Extract the video ID from the YouTube URL
            const videoId = el.match(
              /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
            )?.[1];

            return (
              <div key={i} className="w-[555px] h-[420px]">
                {videoId ? (
                  <iframe
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
