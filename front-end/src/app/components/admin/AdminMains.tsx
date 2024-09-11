import AboutUs from "./AboutUs";
import EmployeeFrom from "./EmployeeFrom";
import EventForm from "./EventForm";
import InstitutionForm from "./InstitutionForm";
import KeepSakeForm from "./Keepsake.Form";
import LegalityForm from "./Legality.Form";
import NewsFrom from "./NewsFrom";
import TravelForm from "./TravelForm";

const AdminMain = (props: any) => {
  const { menus } = props;
  return (
    <div>
      <div
        className={`${
          menus === "Бидний тухай" ? "flex" : "hidden"
        } flex-col gap-[40px] `}
      >
        <h1 className="text-[28px]"> Танилцуулга мэдээлэл оруулах</h1>
        <AboutUs />
      </div>
      <div
        className={`${
          menus === "Ажилчид" ? "flex" : "hidden"
        } flex-col gap-[40px]`}
      >
        <h1 className="text-[28px]"> Ажилчдийн мэдээлэл оруулах</h1>
        <EmployeeFrom />
      </div>
      <div
        className={`${
          menus === "Event" ? "flex" : "hidden"
        } flex-col gap-[40px]`}
      >
        <h1 className="text-[28px]"> Арга хэмжээний талаар мэдээлэл оруулах</h1>
        <EventForm />
      </div>
      <div
        className={`${
          menus === "Бэлэг дурсгал" ? "flex" : "hidden"
        } flex-col gap-[40px]`}
      >
        <h1 className="text-[28px]">
          {" "}
          Бэлэг дурсгалийн талаар мэдээлэл оруулах
        </h1>
        <KeepSakeForm />
      </div>
      <div
        className={`${
          menus === "Хууль , Эрх зүй" ? "flex" : "hidden"
        } flex-col gap-[40px]`}
      >
        <h1 className="text-[24px]">
          {" "}
          Хууль , Эрх зүйн талаар мэдээлэл оруулах
        </h1>
        <LegalityForm />
      </div>
      <div
        className={`${
          menus === "Мэдээ" ? "flex" : "hidden"
        } flex-col gap-[40px]`}
      >
        <h1 className="text-[28px]">Мэдээ мэдээлэл оруулах</h1>
        <NewsFrom />
      </div>
      <div
        className={`${
          menus === "Аялал" ? "flex" : "hidden"
        } flex-col gap-[40px]`}
      >
        <h1 className="text-[28px]"> Аялалын талаар мэдээлэл оруулах</h1>
        <TravelForm />
      </div>
      <div
        className={`${
          menus === "Байгуулга" ? "flex" : "hidden"
        } flex-col gap-[40px]`}
      >
        <h1 className="text-[28px]">Байгуулгийн талаар мэдээлэл оруулах</h1>
        <InstitutionForm />
      </div>
    </div>
  );
};
export default AdminMain;
