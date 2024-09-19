import { IoLocationOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export const Footer = () => {
  const router = useRouter()
  const [message, setMessage] = useState("");
  const handleSend = () => {
      const recipient = "Bayankhongor.tourism@gmail.com";
      const subject = "Inquiry";
      const body = message;
      const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink; 
  };
  return (
    <div className="w-full">
      <div className="sm:hidden flex h-full bg-[#ff7119] flex-col items-center gap-2">
        <div className="text-[10px] w-[90%] mt-2 text-white">
          БАЯНХОНГОР АЙМГИЙН АЯЛАЛ ЖУУЛЧЛАЛЫН ПОРТАЛ САЙТ GO NOMADIC, EXPERIENCE
          MONGOLIA
        </div>
        <div className=" w-[90%] flex flex-col items-start justify-around gap-1 mb-2">
          <div className="flex items-center gap-[5px]">
            {" "}
            <div className="text-[10px] font-bold text-white">
              {" "}
              <IoLocationOutline />
            </div>
            <div className="text-white text-[10px]">
              Баянхонгор аймаг , Баянхонгор сум Номгон нэгдүгээр баг
            </div>
          </div>
          <div className="flex items-center gap-[5px] w-[90%]">
            {" "}
            <div className="text-[10px] font-bold text-white">
              {" "}
              <GoMail />
            </div>
            <div className="text-white text-[10px]">
              Bayankhongor.tourism@gmail.com
            </div>
          </div>
          <div className="flex items-center gap-[5px] w-[90%]">
            {" "}
            <div className="text-[10px] font-bold text-white">
              {" "}
              <FiPhone />
            </div>
            <div className="text-white text-[10px]">70444436, 86224024</div>
          </div>
        </div>
        <div className="w-[90%] flex justify-between">
          <div className="text-white text-opacity-50 text-[7px]">
            © 2024 Зохиогчийн бүх эрх хуулиар хамгаалагдсан болно.
          </div>
          <div className="text-white text-opacity-50 text-[7px]">
            Вебсайтыг: Вирасофт солюшин ХХК
          </div>
        </div>
      </div>

      <div className="w-full lg:h-[462px] h-[300px] items-center justify-end sm:flex flex-col bg-[url('/footer.png')]  bg-cover hidden relative">
        <div className=" absolute bg-black opacity-[60%] w-full h-full top-0 left-0 z-10"></div>
        <div className="z-20 ">
          <div className="sm:w-[630px] md:w-[760px] lg:w-[1000px] xl:w-[1147px] h-[200px] lg:h-[420px] flex flex-col justify-around">
            <div className=" text-white w-[300px] lg:w-[549px] h-[44px] text-[12px] lg:text-[15px] ">
              БАЯНХОНГОР АЙМГИЙН АЯЛАЛ ЖУУЛЧЛАЛЫН ПОРТАЛ САЙТ GO NOMADIC,
              EXPERIENCE MONGOLIA
            </div>
            <div className="w-full h-[250px] flex flex-col justify-between">
              <div className="w-full h-[130px] lg:h-[290px] flex justify-between ">
                <div className="w-[30%] flex flex-col items-start justify-around ">
                  <div className="flex items-center gap-3 lg:gap-[10px]">
                    {" "}
                    <div className="lg:text-[30px] text-[20px] font-bold text-white">
                      {" "}
                      <IoLocationOutline />
                    </div>
                    <div className="text-white lg:text-[15px] text-[10px]">
                      Баянхонгор аймаг ,Баянхонгор сум Номгон нэгдүгээр баг
                    </div>
                  </div>
                  <div className="flex items-center gap-3 lg:gap-[10px]">
                    {" "}
                    <div className="lg:text-[30px] text-[15px] font-bold text-white">
                      {" "}
                      <GoMail />
                    </div>
                    <div className="text-white lg:text-[15px] text-[10px]">
                      Bayankhongor.tourism@gmail.com
                    </div>
                  </div>
                  <div className="flex items-center gap-3 lg:gap-[10px]">
                    {" "}
                    <div className="lg:text-[30px] text-[15px] font-bold text-white">
                      {" "}
                      <FiPhone />
                    </div>
                    <div className="text-white lg:text-[15px] text-[10px]">
                      70444436, 86224024
                    </div>
                  </div>
                </div>

                <div className="w-[30%] flex justify-center mt-[20px]">
                  <div className="w-[70%] flex flex-col gap-[20px]">
                    <div onClick={() => router.push('/user/navigation')}  className="text-white lg:text-[16px] text-[12px] cursor-pointer hover:text-[#ff7119]">
                      Баянхонгорт яаж очих вэ?
                    </div>
                    <div onClick={() => router.push('/user/aboutus')} className="text-white lg:text-[16px] text-[12px] cursor-pointer hover:text-[#ff7119]">
                      Баянхонгорын тухай
                    </div>
                    <div onClick={handleSend} className="text-white lg:text-[16px] text-[12px] cursor-pointer hover:text-[#ff7119]">
                      Холбоо барих
                    </div>
                  </div>
                </div>

                <div className=" w-[30%] flex flex-col items-end justify-around ">
                  <div className="text-white lg:w-[300px] w-full text-[13px] lg:text-[17px]">
                    ХЭРЭГЦЭЭТЭЙ ЦАХИМ ХАЯГУУД{" "}
                  </div>
                  <a
                    href="https://met.gov.mn/"
                    target="blank"
                    className="text-white  text-[10px] hover:text-[#ff7119] hover:text-opacity-100 lg:text-sm text-opacity-50 text-start w-full lg:w-[300px]"
                  >
                    Байгаль Орчин, Аялал жуулчлалын яам
                  </a>{" "}
                  <a
                    href="http://travelmongolia.org/index.php/mn/"
                    target="black"
                    className="text-white text-[10px] hover:text-[#ff7119] lg:text-sm hover:text-opacity-100  text-opacity-50 w-full lg:w-[300px]"
                  >
                    Монголын Аялал Жуулчлалын Холбоо
                  </a>
                  <a
                    href="http://www.touristinfocenter.mn/home.aspx"
                    target="blank"
                    className="text-white text-[10px] hover:text-[#ff7119] lg:text-sm hover:text-opacity-100  text-opacity-50 w-full lg:w-[300px]"
                  >
                    Жуулчны мэдээллийн төв
                  </a>
                  <a
                    href="https://bayanhongor.gov.mn/"
                    target="blank"
                    className="text-white text-[10px] hover:text-[#ff7119] lg:text-sm hover:text-opacity-100  text-opacity-50 w-full lg:w-[300px]"
                  >
                    Хонгор нутаг
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between border-t border-t-white pt-10">
              <div className="text-white text-opacity-50 text-[10px]">
                © 2024 Зохиогчийн бүх эрх хуулиар хамгаалагдсан болно.
              </div>
              <div className="text-white text-opacity-50 text-[10px]">
                Вебсайтыг: Вирасофт солюшин ХХК
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
