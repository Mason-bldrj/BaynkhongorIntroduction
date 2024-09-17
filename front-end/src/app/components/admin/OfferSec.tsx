import { postFunc } from "@/app/backdata";
import { imageDb } from "@/firebase";
import urls from "@/lib/urls";
import { ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import { useState } from "react";
import { v4 } from "uuid";

const OfferSec = () => {
  const [image, setImage] = useState();
  const [offer, setOffer] = useState({ name: "", img: "", count: 0 });
  const [offerArray, setOfferArray] = useState({
    name: "",
    img: "",
  });

  const pushoffer = async (offer: any) => {
    try {
      const res1 = await postFunc(`${urls.ABOUTUS}/offers`, {
        name: offer.name,
        img: offer.img,
      });
      console.log(res1);
    } catch (err: any) {
      return err;
    }
  };

  const handleclick = async (image: any) => {
    const a = v4();
    const imgRef = ref(imageDb, `${a}`);
    const res = await uploadBytes(imgRef, image);

    setOfferArray({
      ...offerArray,
      img: `https://firebasestorage.googleapis.com/v0/b/app-demo-554df.appspot.com/o/${a}?alt=media&token=4554e441-c30b-4a16-b81f-5b50727d691e`,
    });
  };
  return (
    <>
      <div>
        <div>Аялалын санал авах гарарууд оруулах</div>
        <div className="flex flex-row">
          <div>
            <div>
              <div className="text-[16px]">Газрын нэр </div>
              <input
                type="text"
                placeholder="Нэр"
                name="name"
                className="px-[6px] py-[8px] rounded-[8px]"
                onChange={(event) => {
                  setTimeout(() => {
                    setOfferArray({
                      ...offerArray,
                      name: event.target.value,
                    });
                  }, 500);
                }}
              />
            </div>
            <div>Зураг</div>
            <div className="flex items-center gap-[40px] ">
              <input
                type="file"
                placeholder=""
                className="px-[6px] py-[8px] rounded-[8px]"
                name="mainImg"
                onChange={(event) => {
                  setTimeout(() => {
                    const file: any = event.target.files;

                    setImage(file[0]);
                  }, 500);
                }}
              />
              <button
                onClick={() => {
                  handleclick(image);
                }}
                className="flex justify-center items-center rounded-[8px]  bg-white py-[4px] px-[8px]"
              >
                upload
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          className="flex justify-center items-center rounded-[8px]  bg-white py-[4px] px-[8px]"
          onClick={() => {
            pushoffer(offerArray);
          }}
        >
          Санал авах газар нэмэх
        </button>
      </div>
    </>
  );
};
export default OfferSec;
