"use client";
const AdminSideBar = (props: any) => {
  const { setMenu } = props;
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
      <div className="flex flex-col items-start bg-[#f5f5f5] w-[20%] py-[20px] px-[20px] gap-[12px] h-[100vh] ">
        {sideBarItems.map((item) => {
          return (
            <button
              onClick={() => {
                setMenu(item.text);
              }}
            >
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
