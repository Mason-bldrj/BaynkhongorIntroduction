"use client";
const AdminSideBar = (props: any) => {
  const { setMenu, changedRequest, setChangedRequest } = props;
  const sideBarItems = [
    { text: "Бидний тухай", icon: <div></div> },
    { text: "Мэдээ", icon: <div></div> },
    { text: "Байгуулга", icon: <div></div> },
    { text: "Аялал", icon: <div></div> },
    { text: "Event", icon: <div></div> },
    { text: "Бэлэг дурсгал", icon: <div></div> },
    { text: "Төслүүд", icon: <div></div> },
    { text: "Хууль , Эрх зүй", icon: <div></div> },
    { text: "Ажилчид", icon: <div></div> },
  ];
  return (
    <>
      <div className="flex flex-col items-start bg-[#f5f5f5] w-[20%]  pt-[50px] px-[20px] gap-[20px] h-[100vh] ">
        <div className="flex gap-[4px] ">
          <button
            onClick={() => {
              setChangedRequest("CREATE");
            }}
            className="flex bg-white p-[8px] text-[12px] rounded-[8px]"
          >
            Мэдээлэл нэмэх
          </button>
          <button
            onClick={() => {
              setChangedRequest("ITEMSSEE");
            }}
            className="flex bg-white p-[8px] text-[12px] rounded-[8px]"
          >
            Мэдээлэлүүдийг харах{" "}
          </button>
        </div>
        {sideBarItems.map((item) => {
          return (
            <button
              className="text-[16px]"
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
