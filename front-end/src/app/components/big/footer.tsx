import Image from "next/image";
export const Footer = () => {
  return (
    <div className="w-[1448px] h-[527px] flex flex-col">
      <div>
        <div>
          <Image
            className="object-cover w-full h-full"
            src="/footer.png"
            width={970}
            height={500}
            alt="Carousel image"
          />
        </div>
      </div>
    </div>
  );
};
