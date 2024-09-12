"use client";
import Image from "next/image";

export const NewsVideoCard = ({ videoArr, data1, startIndex }: any) => {
  // Эхлээд data1 нь массив эсэхийг шалгана
  if (!Array.isArray(data1) || data1.length === 0) {
    return <div>No videos available</div>; // Хэрэв массив биш бол эсвэл хоосон бол текст харуулна
  }

  // YouTube видео ID-г олж авах
  const videoId = data1[0]?.url.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  )?.[1];

  return (
    <div className="flex w-[90%] xl:w-[1147px] lg:justify-between flex-wrap justify-center">
      <div className="xl:w-[573px] lg:w-[49%] sm:w-[573px] w-full">
        {videoId ? (
          <iframe
            className="w-full h-[300px] md:h-[448px] object-cover"
            src={`https://www.youtube.com/embed/${videoId}`}
            width="555"
            height="420"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <p>Invalid video URL</p>
        )}
        <div className="flex justify-around mt-2 text-sm">
          <div className="sm:text-[15px] text-[10px]">{data1[0]?.date}</div>
          <div className="font-bold sm:text-[15px] text-[10px]">{data1[0]?.name}</div>
        </div>
      </div>
      <div className="xl:w-[573px] w-[573px] lg:w-[49%] h-[696px] overflow-y-scroll flex flex-col items-center gap-5 lg:mt-0 mt-10 border py-2">
        {data1?.map((el: any, i: number) => {
          // Extract the video ID from the YouTube URL
          const videoID = el.url.match(
            /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
          )?.[1];

          return (
            <div key={i} className="w-[90%] flex gap-5 items-center">
              {videoID ? (
                <iframe
                  className="w-[182px] h-[121px]"
                  src={`https://www.youtube.com/embed/${videoID}`}
                  width="555"
                  height="420"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <p>Invalid video URL</p>
              )}
              <div>
                <div className="sm:text-[15px] text-[10px]">{el.date}</div>
                <div className="sm:text-[15px] text-[10px]">{el.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
