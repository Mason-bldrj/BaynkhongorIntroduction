"use client";
const AdminSideBar = (props: any) => {
  const sideBarItems = [
    { text: "Бидний тухай", icon: <div></div> },
    { text: "Мэдээ", icon: <div></div> },
    { text: "Байгуулга", icon: <div></div> },
    { text: "Аялал", icon: <div></div> },
    { text: "Event ", icon: <div></div> },
    { text: "Бэлэг дурсгал", icon: <div></div> },
    { text: "Төслүүд", icon: <div></div> },
    { text: "Гадаад харилцаа", icon: <div></div> },
  ];
  return (
    <>
      <div className="flex flex-col items-start ">
        {sideBarItems.map((item) => {
          return (
            <button>
              <div>{item.text}</div>
              <div></div>
            </button>
          );
        })}
      </div>
    </>
  );
};
export default AdminSideBar;
