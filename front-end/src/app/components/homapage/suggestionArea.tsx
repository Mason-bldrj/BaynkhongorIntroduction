import Image from "next/image";
import { useState, useEffect } from "react";
import { OrangeBourd } from "../detail/orengeBourd";
import urls from "@/lib/urls";
import { fetchFunc, putFunc } from "@/app/backdata";

export const SuggestionArea = () => {
  const [dataHolder, setDataHolder] = useState<any[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(true); // Add a loading state

  const fetchedData = async () => {
    try {
      const res = await fetchFunc(urls.OFFERS);
      const data = await res.json();
      const totalClicks = data.reduce((total: number, item: any) => total + (item.count || 0), 0); // Total clicks
      setDataHolder(
        data.map((item: any) => ({
          ...item,
          count: item.count || 0, 
          percent: totalClicks > 0 ? Math.floor(((item.count || 0) * 100) / totalClicks) : 0, // Calculate percent
        }))
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Stop loading after data is fetched
    }
  };


  const progressCalculator = async (id: string) => {
    const updatedData = [...dataHolder];
    const itemIndex = updatedData.findIndex((item) => item._id === id);
    if (itemIndex >= 0) {
      updatedData[itemIndex].count++; // Increment the count locally
      const totalClicks = updatedData.reduce((total, item) => total + item.count, 0);
      updatedData.forEach((item) => {
        item.percent = totalClicks > 0 ? Math.floor((item.count * 100) / totalClicks) : 0;
      });
      setDataHolder(updatedData); // Update the state with new data

      try {
        // Send the PUT request to update the database
        const updatedItem = updatedData[itemIndex];
        await putFunc(urls.OFFERS, {
          id: updatedItem._id,
          name: updatedItem.name,
          img: updatedItem.img,
          count: updatedItem.count, // Include updated count
        });
      } catch (error) {
        console.error("Error updating item count:", error);
      }
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <div className="w-[95%] max-w-[1147px] h-[fit] mx-auto flex flex-col items-center sm:block mt-3 sm:mt-10">
      <div className="sm:flex w-full justify-between">
        <div className="w-[173px]">
          <OrangeBourd data={"Санал"} />
        </div>
        <div>Та Хонгор нутагт хаашаа аялахыг хүсэж байгаагаа сонгоно уу?</div>
      </div>

      {/* Loading state */}
      {loading ? (
          <div className="w-full flex justify-center items-center h-[200px]">
          <div className="loader"></div>
        </div>// Simple loading text, you can replace with a spinner
      ) : (
        <>
          {/* Mobile view */}
          <div className="sm:hidden flex flex-col w-full mt-5">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="border-[#ff7119] border-2 bg-gray-100 hover:bg-[#FF6C10] hover:text-white w-full h-[50px] flex items-center justify-center text-sm rounded-lg"
            >
              {isExpanded ? "Хаах" : "Та Хонгор нутагт хаашаа аялахыг хүсэж байгаагаа сонгох бол энд дарна уу."}
            </button>
            {isExpanded && (
              <div className="flex flex-wrap justify-around w-full mt-2">
                {dataHolder.map((el) => (
                  <div key={el._id} className="flex flex-col items-center w-full lg:w-[22%] xl:w-[20%] mb-5">
                    <Image
                      className="object-cover w-full max-h-[150px] cursor-pointer"
                      src={el.img}
                      width={500}
                      height={500}
                      alt="Carousel image"
                    />
                    <button
                      onClick={() => progressCalculator(el._id)}
                      className="bg-[#D9D9D9] hover:bg-[#ff7119] hover:text-white w-full h-10 flex justify-center items-center text-center text-sm rounded-lg mt-2"
                    >
                      {el.name}
                    </button>
                    <div className="w-full bg-gray-200 rounded-md h-2 mt-1 flex items-center">
                      <div className="bg-[#ff7119] h-full rounded-md" style={{ width: `${el.percent}%` }}></div>
                      <div className="text-xs ml-2">{el.percent + "%"}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Desktop view */}
          <div className="sm:flex hidden w-full h-[250px]  justify-between mt-5 sm:gap-2 md:gap-5 gap-[20px] overflow-hidden overflow-x-scroll scrollbar scrollbar-hidden ">
            {dataHolder.map((el) => (
              <div key={el._id} className="min-w-[173px] h-[200px] relative ">
                <Image
                  className="object-cover sm:w-full sm:h-full cursor-pointer rounded-t-[5px]"
                  src={el.img}
                  width={173}
                  height={200}
                  alt="Carousel image"
                />
                <button
                  onClick={() => progressCalculator(el._id)}
                  className="absolute hover:bg-black opacity-0 hover:opacity-60 hover:text-white w-full h-full top-0 left-0"
                >
                  {el.name}
                </button>
                <div className="w-full bg-gray-200 rounded-md h-[8px] dark:bg-gray-700 mt-1 flex justify-between items-center">
                  <div className="bg-[#213A57] h-[8px] rounded-md w-full" style={{ width: `${el.percent}%` }}></div>
                  <div className="w-[5px] flex items-center mr-7 text-[10px]">{el.percent + "%"}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
