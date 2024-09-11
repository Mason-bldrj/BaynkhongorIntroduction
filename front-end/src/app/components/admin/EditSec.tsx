const EditSec = (props: any) => {
  return (
    <div>
      <table className="w-full border-collapse  ">
        <thead className="borde-b border-black-100 ">
          <th className="border-solid border-[1px] p-[4px] border-[#dddddd]">
            Нэр
          </th>
          <th className="border-solid border-[1px] p-[4px] border-[#dddddd]">
            Гарчиг
          </th>
          <th className="border-solid border-[1px] p-[4px] border-[#dddddd]">
            Гэрээт харилцачаас авах хүргэлтийн төлбөр
          </th>
          <th className="border-solid border-[1px] p-[4px] border-[#dddddd]">
            Худалдан авагчаас хүлээн авсан
          </th>
          <th className="border-solid border-[1px] p-[4px] border-[#dddddd]">
            Гэрээт харилцагчид шилжүүлэх дүн{" "}
          </th>
          <th className="border-solid border-[1px] p-[4px] border-[#dddddd]">
            Гэрээт харилцагчаас авах буюу нэхэмжлэх дүн
          </th>
          <th className="border-solid border-[1px] p-[4px] border-[#dddddd]">
            Төлөв
          </th>
          <th className="border-solid border-[1px] p-[4px] border-[#dddddd]">
            Төлсөн
          </th>
        </thead>
        <tbody>
          {list?.map((item: any, index: number) => (
            <tr key={index} className=" ">
              <td className="py-1 border-solid border-[1px] p-[4px] border-[#dddddd]">
                <button
                  onClick={() =>
                    router.push(`/admin/merchant/show/${item?.merchant_id}`)
                  }
                >
                  {item?.merchant_name}
                </button>
              </td>
              <td className=" text-right py-1 whitespace-pre-line border-solid border-[1px] p-[4px] border-[#dddddd]">
                {new Intl.NumberFormat().format(item?.subtotal_price ?? 0)}₮
              </td>
              <td className=" text-right py-1 border-solid border-[1px] p-[4px] border-[#dddddd]">
                {new Intl.NumberFormat().format(item?.delivery_price ?? 0)}₮
              </td>
              <td className=" text-right py-1 border-solid border-[1px] p-[4px] border-[#dddddd]">
                {new Intl.NumberFormat().format(item?.total_price ?? 0)}₮
              </td>
              <td className=" text-right py-1 border-solid border-[1px] p-[4px] border-[#dddddd]">
                {new Intl.NumberFormat().format(item?.take_merchant_price ?? 0)}
                ₮
              </td>
              <td className=" text-right py-1 border-solid border-[1px] p-[4px] border-[#dddddd]">
                {new Intl.NumberFormat().format(item?.paid_customer_price ?? 0)}
                ₮
              </td>
              <td className=" text-right py-1 border-solid border-[1px] p-[4px] border-[#dddddd]">
                {new Intl.NumberFormat().format(item?.send_merchant_price ?? 0)}
                ₮
              </td>
              <td className=" text-right py-1 border-solid border-[1px] p-[4px] border-[#dddddd]">
                {new Intl.NumberFormat().format(item?.amount ?? 0)}₮
              </td>
              <td className=" text-right py-1 border-solid border-[1px] p-[4px] border-[#dddddd]">
                <button>Мэдээлэл өөрчлөх</button>
              </td>
              <td className=" text-right py-1 border-solid border-[1px] p-[4px] border-[#dddddd]">
                <button>Устгах</button>
              </td>
            </tr>
          ))}
          <tr>
            <th className=" text-right"></th>
            <th className=" text-right">
              {new Intl.NumberFormat().format(total.totalSubtotal_price ?? "")}₮
            </th>
            <th className=" text-right">
              {new Intl.NumberFormat().format(total.totalDelivery_price ?? "")}₮
            </th>
            <th className=" text-right">
              {new Intl.NumberFormat().format(total.totalTotal_price ?? "")}₮
            </th>
            <th className=" text-right">
              {new Intl.NumberFormat().format(
                total.totalTake_merchant_price ?? ""
              )}
              ₮
            </th>
            <th className=" text-right">
              {new Intl.NumberFormat().format(
                total.totalPaid_customer_price ?? ""
              )}
              ₮
            </th>
            <th className=" text-right">
              {new Intl.NumberFormat().format(
                total.totalSend_merchant_price ?? ""
              )}
              ₮
            </th>
            <th className=" text-right">
              {new Intl.NumberFormat().format(total.totalAmount ?? "")}₮
            </th>
            <th className=" text-right"></th>
            <th className=" text-right">
              {new Intl.NumberFormat().format(total.totalPaid ?? "")}₮
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default EditSec;
