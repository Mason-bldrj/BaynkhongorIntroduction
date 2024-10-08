import { deleteFunc, fetchFunc } from "@/app/backdata";
import urls from "@/lib/urls";
import { useEffect, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useRouter } from "next/navigation";

const DashboardSec = ({ menus }: any) => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [aboutUs, setAboutUsData] = useState([]);
  const [rowSelection, setRowSelection] = useState({});

  const fetchData = async () => {
    try {
      let fetchedData = [];
      if (menus === "Бидний тухай") {
        const res = await fetchFunc(urls.ABOUTUS);
        const data = await res.json();
        const set: any = [data[0]];

        setAboutUsData(set);
      } else if (menus === "Байгуулга") {
        const res = await fetchFunc(urls.institution);
        fetchedData = await res.json();
        setData(fetchedData);
      } else if (menus === "Аялал") {
        const res = await fetchFunc(urls.TRAVEL);
        fetchedData = await res.json();
        setData(fetchedData);
      } else if (menus === "Event") {
        const res = await fetchFunc(urls.EVENT);
        fetchedData = await res.json();
        setData(fetchedData);
      } else if (menus === "Бэлэг дурсгал") {
        const res = await fetchFunc(urls.KEEPSAKE);
        fetchedData = await res.json();
        setData(fetchedData);
      } else if (menus === "Хууль , Эрх зүй") {
        const res = await fetchFunc(urls.LEGALITY);
        fetchedData = await res.json();
        setData(fetchedData);
      } else if (menus === "Ажилчид") {
        const res = await fetchFunc(urls.EMPLOYEE);
        fetchedData = await res.json();
        setData(fetchedData);
      } else if (menus === "report") {
        const res = await fetchFunc(`${urls.NEWS}/report`);
        fetchedData = await res.json();
        setData(fetchedData);
      } else if (menus === "video") {
        const res = await fetchFunc(`${urls.NEWS}/video`);
        fetchedData = await res.json();
        setData(fetchedData);
      } else if (menus === "resources") {
        const res = await fetchFunc(`${urls.NEWS}/resources`);
        fetchedData = await res.json();
        setData(fetchedData);
      } else if (menus === "Үзэсгэлэнт Газрууд") {
        const res = await fetchFunc(`${urls.SCENICSPORT}`);
        fetchedData = await res.json();
        setData(fetchedData);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const deleteData = async ({ id, menus }: any) => {
    try {
      if (menus === "Бидний тухай") {
        const res = await deleteFunc(urls.ABOUTUS, { id });
      } else if (menus === "Байгуулга") {
        const res = await deleteFunc(urls.institution, { id });
      } else if (menus === "Аялал") {
        const res = await deleteFunc(urls.TRAVEL, { id });
      } else if (menus === "Event") {
        const res = await deleteFunc(urls.EVENT, { id });
      } else if (menus === "Бэлэг дурсгал") {
        const res = await deleteFunc(urls.KEEPSAKE, { id });
      } else if (menus === "Хууль , Эрх зүй") {
        const res = await deleteFunc(urls.LEGALITY, { id });
      } else if (menus === "Ажилчид") {
        const res = await deleteFunc(urls.EMPLOYEE, { id });
      } else if (menus === "report") {
        const res = await deleteFunc(`${urls.NEWS}/report`, { id });
      } else if (menus === "video") {
        const res = await deleteFunc(`${urls.NEWS}/video`, { id });
      } else if (menus === "resources") {
        const res = await deleteFunc(`${urls.NEWS}/resources`, { id });
      } else if (menus === "Үзэсгэлэнт Газрууд") {
        const res = await deleteFunc(`${urls.SCENICSPORT}/resources`, { id });
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const columns = [
    {
      accessorKey: "name", //access nested data with dot notation
      header: "  Name",
      size: 10,
    },
    {
      accessorKey: "description",
      header: "Тайлбар",
      size: 550,
      Cell: ({ renderedCellValue, row }: any) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <p>{renderedCellValue}</p>
        </div>
      ),
    },

    {
      accessorKey: "phoneNumbers.phoneNumber1",
      header: "Утасны дугаар1",
      size: 150,
    },
    {
      accessorKey: "phoneNumbers.phoneNumber2",
      header: "Утасны дугаар2",
      size: 150,
    },
    {
      header: "Үйлдэлүүд  ",
      size: 150,
      Cell: (d: any) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              maxWidth: "200px",
              overflow: "hidden",
              gap: "4px",
            }}
          >
            <button
              onClick={() => {
                const id = d?.row?.original?._id + "*" + menus;
                router.push(`/admin/${id}}`);
              }}
              className="border-blue-600 w-[80px] border-[2px] rounded-[8px] px-[4px] py-[2px] hover:bg-blue-600 hover:text-white border-solid "
            >
              Edit
            </button>
            <button
              onClick={() => {
                deleteData({ id: d?.row?.original?._id, menus });
              }}
              className="border-red-400 border-[2px] w-[80px] rounded-[8px] px-[4px] py-[2px] hover:bg-red-400 hover:text-white border-solid "
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  const aboutUscolumns = [
    {
      accessorKey: "name", //access nested data with dot notation
      header: "  Name",
      size: 10,
    },
    {
      accessorKey: "email", //access nested data with dot notation
      header: "Имэйл",
      size: 11,
    },
    {
      accessorKey: "about",
      header: "Тайлбар",
      size: 400,
      Cell: ({ renderedCellValue }: any) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            maxWidth: "400px",
            overflow: "hidden",
          }}
        >
          <p>{renderedCellValue}</p>
        </div>
      ),
    },

    {
      accessorKey: "phoneNumbers.phoneNumber1",
      header: "Утасны дугаар1",
      size: 150,
    },
    {
      accessorKey: "phoneNumbers.phoneNumber2",
      header: "Утасны дугаар2",
      size: 150,
    },
    {
      header: "Үйлдэл",
      size: 150,
      Cell: (d: any) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              maxWidth: "200px",
              overflow: "hidden",
              gap: "4px",
            }}
          >
            <button
              onClick={() => {
                const id = d?.row?.original?._id + "*" + menus;
                router.push(`/admin/${id}}`);
              }}
              className="border-blue-600 w-[80px] border-[2px] rounded-[8px] px-[4px] py-[2px] hover:bg-blue-600 hover:text-white border-solid "
            >
              Edit
            </button>
            <button
              onClick={() => {
                deleteData({ id: d?.row?.original?._id, menus });
              }}
              className="border-red-400 border-[2px] w-[80px] rounded-[8px] px-[4px] py-[2px] hover:bg-red-400 hover:text-white border-solid "
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];
  const table = useMaterialReactTable({
    columns: menus === "Бидний тухай" ? aboutUscolumns : columns,
    data: menus === "Бидний тухай" ? aboutUs : data || [], // data must be memoized or stable (useState, useMemo, etc.)
  });

  useEffect(() => {
    fetchData();
  }, [menus]);

  return <MaterialReactTable table={table} />;
};

export default DashboardSec;
