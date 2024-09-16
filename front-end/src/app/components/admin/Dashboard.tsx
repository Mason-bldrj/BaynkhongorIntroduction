import { fetchFunc } from "@/app/backdata";
import urls from "@/lib/urls";
import { useEffect, useState, useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Box, dividerClasses, Typography } from "@mui/material";

const DashboardSec = (props: any) => {
  const { menus } = props;
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);
  const [aboutUs, setAboutUsData] = useState([]);
  const [rowSelection, setRowSelection] = useState({});
  const columns = useMemo(
    () => [
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
        Cell: ({ renderedCellValue, row }: any) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              maxWidth: "200px",
              overflow: "hidden",
              gap: "4px",
            }}
          >
            <button className="border-blue-600 w-[80px] border-[2px] rounded-[8px] px-[4px] py-[2px] hover:bg-blue-600 hover:text-white border-solid ">
              Edit
            </button>
            <button className="border-red-400 border-[2px] w-[80px] rounded-[8px] px-[4px] py-[2px] hover:bg-red-400 hover:text-white border-solid ">
              Delete
            </button>
          </div>
        ),
      },
    ],
    []
  );
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
        Cell: ({ renderedCellValue, row }: any) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              maxWidth: "200px",
              overflow: "hidden",
              gap: "4px",
            }}
          >
            <button className="border-blue-600 w-[80px] border-[2px] rounded-[8px] px-[4px] py-[2px] hover:bg-blue-600 hover:text-white border-solid ">
              Edit
            </button>
            <button className="border-red-400 border-[2px] w-[80px] rounded-[8px] px-[4px] py-[2px] hover:bg-red-400 hover:text-white border-solid ">
              Delete
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    getRowId: (row) => row._id,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
    columns: menus === "Бидний тухай" ? aboutUscolumns : columns,
    data: menus === "Бидний тухай" ? aboutUs : data || [], // data must be memoized or stable (useState, useMemo, etc.)
  });

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

  useEffect(() => {
    fetchData();
  }, [menus]);

  return <MaterialReactTable table={table} />;
};

export default DashboardSec;
