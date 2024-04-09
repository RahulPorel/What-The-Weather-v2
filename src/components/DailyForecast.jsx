import { iconUrlFromCode } from "../services/WeatherServices";

const DailyForecast = ({ tittle, items, id, units }) => {
  console.log(id);
  return (
    <div>
      <div className="flex items-center justify-start mt-6 ">
        <p className="text-white font-medium uppercase">{tittle}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center text-white justify-between">
        {items.map((item) => (
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">
              {`${item.temp.toFixed()} °`} {units === "metric" ? "C" : "F"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
