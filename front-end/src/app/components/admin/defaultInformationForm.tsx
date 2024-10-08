const DefaultInformationSec = (props: any) => {
  const { numericalIndicators, setDefaultInformation, defaultInformation } =
    props;

  return (
    <div className="flex flex-wrap gap-[24px]">
      <h1>Аймаг тухай суурь мэдээлэлүүд</h1>
      <div className="flex flex-wrap gap-[24px]">
        <div>
          <div className="text-[14px]">Байгалийн дурсгалт газар тоо </div>
          <input
            defaultValue={numericalIndicators?.natureMonument}
            type="number"
            placeholder="Та мэдээлэлээ оруулна уу!"
            name="natureMonument"
            className="px-[6px] py-[8px] rounded-[8px] shadow-sm"
            onChange={(event) => {
              setTimeout(() => {
                const number = Number(event.target.value);
                setDefaultInformation({
                  ...defaultInformation,
                  natureMonument: number,
                });
              }, 1000);
            }}
          />
        </div>
        <div>
          <div className="text-[14px]">Түүхэн дурсгалт газар</div>
          <input
            defaultValue={numericalIndicators?.memorialPlaceNumber}
            type="number"
            placeholder="Та мэдээлэлээ оруулна уу!"
            name="memorialPlaceNumber"
            className="px-[6px] py-[8px] rounded-[8px] shadow-sm"
            onChange={(event) => {
              setTimeout(() => {
                const number = Number(event.target.value);
                setDefaultInformation({
                  ...defaultInformation,
                  memorialPlaceNumber: number,
                });
              }, 1000);
            }}
          />
        </div>
        <div>
          <div className="text-[14px]">Газар нутгийн хэмжээ тоо(км) </div>
          <input
            defaultValue={numericalIndicators?.groundKM_Number}
            type="number"
            placeholder="Та мэдээлэлээ оруулна уу!"
            name="groundKM_Number"
            className="px-[6px] py-[8px] rounded-[8px] shadow-sm"
            onChange={(event) => {
              setTimeout(() => {
                const number = Number(event.target.value);
                setDefaultInformation({
                  ...defaultInformation,
                  groundKM_Number: number,
                });
              }, 1000);
            }}
          />
        </div>
        <div>
          <div className="text-[14px]">Хүн амын тоо </div>
          <input
            defaultValue={numericalIndicators?.population}
            type="number"
            placeholder="Та мэдээлэлээ оруулна уу!"
            name="population"
            className="px-[6px] py-[8px] rounded-[8px] shadow-sm"
            onChange={(event) => {
              setTimeout(() => {
                const number = Number(event.target.value);
                setDefaultInformation({
                  ...defaultInformation,
                  population: number,
                });
              }, 1000);
            }}
          />
        </div>
        <div className="">
          <div className="text-[14px]">Нийт багийн тоо </div>
          <input
            defaultValue={numericalIndicators?.teamsNumber}
            type="number"
            placeholder="Та мэдээлэлээ оруулна уу!"
            name="teamsNumber"
            className="px-[6px] py-[8px] rounded-[8px] shadow-sm "
            onChange={(event) => {
              setTimeout(() => {
                const number = Number(event.target.value);
                setDefaultInformation({
                  ...defaultInformation,
                  teamsNumber: number,
                });
              }, 1000);
            }}
          />
        </div>
        <div>
          <div className="text-[14px]">Нийт сумын тоо </div>
          <input
            defaultValue={numericalIndicators?.wardNumber}
            type="number"
            placeholder="Та мэдээлэлээ оруулна уу!"
            name="wardNumber"
            className="px-[6px] py-[8px] rounded-[8px] shadow-sm "
            onChange={(event) => {
              setTimeout(() => {
                const number = Number(event.target.value);
                setDefaultInformation({
                  ...defaultInformation,
                  wardNumber: number,
                });
              }, 1000);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default DefaultInformationSec;
