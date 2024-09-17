import { deleteFunc, fetchFunc } from "@/app/backdata";
import urls from "@/lib/urls";
import { useEffect, useState, useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Box, dividerClasses, Typography } from "@mui/material";

const DashboardSec = ({ menus }: any) => {
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);
  const [aboutUs, setAboutUsData] = useState([]);
  const [rowSelection, setRowSelection] = useState({});

  const fetchData = async () => {
    try {
      let fetchedData = [];
      if (menus === "Бидний тухай") {
        const res = await fetchFunc(urls.ABOUTUS);
        const data = await res.json();
        setAboutUsData(data);
        console.log(aboutUs);
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
      }
      console.log(fetchedData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  console.log({ aaa: menus });

  const deleteData = async ({ id, menus }: any) => {
    console.log({ id, menus });

    try {
      if (menus === "Бидний тухай") {
        console.log(menus, id);
        const res = await deleteFunc(urls.ABOUTUS, { id });
        console.log("Бидний тухай", "ajillaa");
      } else if (menus === "Байгуулга") {
        console.log(menus, id);
        const res = await deleteFunc(urls.institution, { id });
        console.log("Байгуулга", "ajillaa");
      } else if (menus === "Аялал") {
        console.log(menus, id);
        const res = await deleteFunc(urls.TRAVEL, { id });
        console.log("Аялал", "ajillaa");
      } else if (menus === "Event") {
        console.log(menus, id);
        const res = await deleteFunc(urls.EVENT, { id });
        console.log("Event", "ajillaa");
      } else if (menus === "Бэлэг дурсгал") {
        console.log(menus, id);
        const res = await deleteFunc(urls.KEEPSAKE, { id });
        console.log("Бэлэг дурсгал", "ajillaa");
      } else if (menus === "Хууль , Эрх зүй") {
        console.log(menus, id);
        const res = await deleteFunc(urls.LEGALITY, { id });
        console.log("Хууль , Эрх зүй", "ajillaa");
      } else if (menus === "Ажилчид") {
        console.log(menus, id);
        const res = await deleteFunc(urls.EMPLOYEE, { id });
        console.log("Ажилчид", "ajillaa");
      } else if (menus === "report") {
        console.log(menus, id);
        const res = await deleteFunc(`${urls.NEWS}/report`, { id });
        console.log("report", "ajillaa");
      } else if (menus === "video") {
        console.log(menus, id);
        const res = await deleteFunc(`${urls.NEWS}/video`, { id });
        console.log(menus, "ajillaa");
      } else if (menus === "resources") {
        console.log(menus, id);
        const res = await deleteFunc(`${urls.NEWS}/resources`, { id });
        console.log("Байгуулга", "ajillaa");
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
      size: 150,
      Cell: ({ renderedCellValue, row }: any) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            maxWidth: "400px",
            overflow: "hidden",
          }}
        >
          <p>{renderedCellValue}</p>
          <p>{menus}</p>
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
                console.log(d?.row?.original?._id);
              }}
              className="border-blue-600 w-[80px] border-[2px] rounded-[8px] px-[4px] py-[2px] hover:bg-blue-600 hover:text-white border-solid "
            >
              Edit
            </button>
            <button
              onClick={() => {
                console.log("ajilla", d?.row?.original?._id);
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
  const aboutUscolumns = useMemo(
    () => [
      {
        accessorKey: "name", //access nested data with dot notation
        header: "  Name",
        size: 10,
      },
      {
        accessorKey: "email", //access nested data with dot notation
        header: "Имэйл",
        size: 10,
      },
      {
        accessorKey: "description",
        header: "Тайлбар",
        size: 150,
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
        header: "Үйлдэлүүд",
        size: 150,
        Cell: (d: any) => {
          console.log(d?.row);

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
                  console.log(rowSelection, "rowId");
                }}
                className="border-blue-600 w-[80px] border-[2px] rounded-[8px] px-[4px] py-[2px] hover:bg-blue-600 hover:text-white border-solid "
              >
                Edit
              </button>
              <button className="border-red-400 border-[2px] w-[80px] rounded-[8px] px-[4px] py-[2px] hover:bg-red-400 hover:text-white border-solid ">
                Delete
              </button>
            </div>
          );
        },
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns: menus === "Бидний тухай" ? aboutUscolumns : columns,
    data: menus === "Бидний тухай" ? aboutUs : data || [], // data must be memoized or stable (useState, useMemo, etc.)
  });
  console.log(rowSelection);

  useEffect(() => {
    fetchData();
    console.log(menus);
  }, [menus]);

  return <MaterialReactTable table={table} />;
};

export default DashboardSec;
