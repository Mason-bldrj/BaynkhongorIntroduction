import { IoLocationOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { LuSend } from "react-icons/lu";
import { useState } from "react";
export const Footer = () => {
  const [message, setMessage] = useState("");
  const handleSend = () => {
    if (message) {
      const recipient = "Bayankhongor.tourism@gmail.com";
      const subject = "Inquiry";
      const body = message;
      const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink; // This will open the default email client
    }
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
              Баянхонгор аймаг ,Баянхонгор сум Номгон нэгдүгээр баг
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

      <div className="w-full lg:h-[550px] h-[300px] items-center justify-end sm:flex flex-col bg-[url('/footer.png')]  bg-cover hidden">
        <div className="sm:w-[630px] md:w-[760px] lg:w-[1000px] xl:w-[1147px] h-[200px] lg:h-[420px] flex flex-col justify-around">
          <div className=" text-white w-[300px] lg:w-[549px] h-[44px] text-[12px] lg:text-[15px] ">
            БАЯНХОНГОР АЙМГИЙН АЯЛАЛ ЖУУЛЧЛАЛЫН ПОРТАЛ САЙТ GO NOMADIC,
            EXPERIENCE MONGOLIA
          </div>
          <div className="w-full h-[250px] flex flex-col justify-between">
            <div className="w-full h-[130px] lg:h-[290px] flex justify-between ">
              <div className="sm:w-[200px] lg:w-[380px] flex flex-col items-start justify-around ">
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
              <div className="lg:w-[380px] w-[130px] flex flex-col items-center text-center lg:items-start gap-[20px] mt-[20px]">
                <div className="text-white lg:text-[15px] text-[12px]">
                Санал хүсэлт
                </div>
                <div className="w-full flex flex-col items-end gap-2">
                  <textarea
                    className=" w-full lg:px-2 px-4 md:py-1 lg:py-2 rounded-md"
                    placeholder="Мэйл бичих..."
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button
                    onClick={handleSend}
                    className="flex hover:text-[#ff7117] items-center lg:text-[16px] text-[12px] gap-2 text-white"
                  >
                    <LuSend />
                    <div className="lg:text-[16px] text-[12px]">Илгээх</div>
                  </button>
                </div>
              </div>

              <div className=" lg:w-[380px] md:w-130px flex flex-col items-end justify-around ">
                <div className="text-white lg:w-[300px] w-full text-[13px] lg:text-[17px]">
                  ХЭРЭГЦЭЭТЭЙ ЦАХИМ ХАЯГУУД{" "}
                </div>
                <a
                  href="https://met.gov.mn/"
                  target="blank"
                  className="text-white text-[10px] lg:text-sm text-opacity-50 text-start w-full lg:w-[300px]"
                >
                  Байгаль Орчин, Аялал жуулчлалын яам
                </a>{" "}
                <a
                  href="http://travelmongolia.org/index.php/mn/"
                  target="black"
                  className="text-white text-[10px] lg:text-sm  text-opacity-50 w-full lg:w-[300px]"
                >
                  Монголын Аялал Жуулчлалын Холбоо
                </a>
                <a
                  href="http://www.touristinfocenter.mn/home.aspx"
                  target="blank"
                  className="text-white text-[10px] lg:text-sm  text-opacity-50 w-full lg:w-[300px]"
                >
                  Жуулчны мэдээлэлийн төв
                </a>
                <a
                  href="https://bayanhongor.gov.mn/"
                  target="blank"
                  className="text-white text-[10px] lg:text-sm  text-opacity-50 w-full lg:w-[300px]"
                >
                  Хонгор нутаг
                </a>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between">
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
  );
};
