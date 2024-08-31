import { IoLocationOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { LuSend } from "react-icons/lu";
export const Footer = () => {
  return (
    <div className="w-full h-[550px]  items-center justify-end flex flex-col bg-[url('/footer.png')]  bg-cover">
      <div className="w-[1147px] h-[420px] flex flex-col justify-around">
        <div className=" text-white w-[549px] h-[44px] ">
          БАЯНХОНГОР АЙМГИЙН АЯЛАЛ ЖУУЛЧЛАЛЫН ПОРТАЛ САЙТ GO NOMADIC, EXPERIENCE
          MONGOLIA
        </div>
        <div className="w-full h-[250px] flex flex-col justify-between">
          <div className="w-full h-[290px] flex justify-between ">
            <div className=" w-[380px] flex flex-col items-start justify-around">
              <div className="flex items-center gap-[10px]">
                {" "}
                <div className="text-[30px] font-bold text-white">
                  {" "}
                  <IoLocationOutline />
                </div>
                <div className="text-white">
                  Баянхонгор аймаг ,Баянхонгор сум Номгон нэгдүгээр баг
                </div>
              </div>
              <div className="flex items-center gap-[10px]">
                {" "}
                <div className="text-[30px] font-bold text-white">
                  {" "}
                  <GoMail />
                </div>
                <div className="text-white">Bayankhongor.tourism@gmail.com</div>
              </div>
              <div className="flex items-center gap-[10px]">
                {" "}
                <div className="text-[30px] font-bold text-white">
                  {" "}
                  <FiPhone />
                </div>
                <div className="text-white">70444436, 86224024</div>
              </div>
            </div>
            <div className=" w-[380px] flex flex-col items-start gap-[20px] mt-[20px]">
              <div className="text-white">Баянхонгорт яаж очих вэ? </div>
              <div className="w-full flex flex-col items-end gap-2">
                {" "}
                <input
                  className=" pb-[93px] w-full px-2 py-2 rounded-md"
                  placeholder="Мэйл бичих..."
                  type="text"
                />
                <button className="flex hover:text-[#ff7117] items-center gap-2 text-white">
                  <LuSend />
                  <div>Илгээх</div>
                </button>
              </div>
            </div>

            <div className=" w-[380px] flex flex-col items-end justify-around ">
              <div className="text-white w-[300px]">
                ХЭРЭГЦЭЭТЭЙ ЦАХИМ ХАЯГУУД{" "}
              </div>
              <a
                href="https://met.gov.mn/"
                target="blank"
                className="text-white text-sm text-opacity-50 text-start w-[300px]"
              >
                Байгаль Орчин, Аялал жуулчлалын яам
              </a>{" "}
              <a
                href="http://travelmongolia.org/index.php/mn/"
                target="black"
                className="text-white text-sm  text-opacity-50 w-[300px]"
              >
                Монголын Аялал Жуулчлалын Холбоо
              </a>
              <a
                href="http://www.touristinfocenter.mn/home.aspx"
                target="blank"
                className="text-white text-sm  text-opacity-50 w-[300px]"
              >
                Жуулчны мэдээлэлийн төв
              </a>
              <a
                href="https://bayanhongor.gov.mn/"
                target="blank"
                className="text-white text-sm  text-opacity-50 w-[300px]"
              >
                Хонгор нутаг
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="text-white text-opacity-50 text-[10px]">© 2024 Зохиогчийн бүх эрх хуулиар хамгаалагдсан болно.</div>
          <div className="text-white text-opacity-50 text-[10px]">Вебсайтыг: Вирасофт солюшин ХХК</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
