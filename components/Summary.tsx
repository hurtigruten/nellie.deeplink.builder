import dateToString from "@src/util/dateToString";
import Image from "next/image";
import ContentfulImage from "./ContentfulImage";

type SummaryProps = {
  departureDate: null | Date;
  duration: null | number;
  shipName: null | string;
  voyage: null | {
    name: string;
    imageSrc: string;
    numberOfTravellers: number | null;
  };
  cabins:
    | null
    | {
        numberOfTravellers: number | null;
        name: string;
        imageSrc: string;
        category: string;
        code: string;
      }[];
};

const Summary = ({
  departureDate,
  duration,
  shipName,
  voyage,
  cabins,
}: SummaryProps) => {
  const formattedDepartureDate = departureDate
    ? `${dateToString(departureDate)}, ${duration} days`
    : null;

  const Departure = () => (
    <div className="flex flex-col">
      <div>
        <label className="text-light-black text-2xs">Departure</label>
        <p className="ui-text">{formattedDepartureDate}</p>
      </div>

      <div>
        <label className="text-light-black text-2xs">Ship</label>
        <p className="ui-text">{shipName}</p>
      </div>
    </div>
  );

  const Voyage = () => (
    <div>
      <p className="mb-2 text-light-black">{voyage?.name}</p>
      <div className="flex flex-col justify-between gap-2">
        {voyage?.numberOfTravellers && (
          <p className="text-light-black">
            {voyage.numberOfTravellers} travellers
          </p>
        )}
        <div className="flex gap-4">
          <div className="relative overflow-hidden rounded-5xl imageContainer">
            <ContentfulImage
              width={140}
              height={140}
              src={voyage?.imageSrc}
              alt={voyage?.name}
            />
          </div>
          {departureDate && shipName && <Departure />}
        </div>
      </div>
    </div>
  );

  const Cabins = () => (
    <div className="flex flex-col">
      <h3 className="mb-2">Cabins</h3>
      <ul className="flex flex-col gap-4">
        {cabins?.map((cabin, cabinIndex) => (
          <li key={cabin.name} className="flex gap-4">
            <div className="relative overflow-hidden imageContainer rounded-5xl">
              <ContentfulImage
                src={cabin.imageSrc}
                alt={cabin.name}
                width={140}
                height={140}
              />
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <label className="caption">
                Cabin {cabinIndex + 1}{" "}
                {cabin.numberOfTravellers
                  ? `- ${cabin.numberOfTravellers} travellers`
                  : ""}
              </label>
              <p className="font-bold text-2xs">{cabin.category}</p>
              <p className="text-2xs">
                {cabin.name} ({cabin.code})
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  if (!voyage && !cabins) {
    return null;
  }

  return (
    <div className="flex flex-col mb-20 flex-1 gap-4 py-8 border max-w-[360px] overflow-y-auto min-w-[360px] border-warm-gray-4 rounded-5xl px-6 bg-warm-gray-1">
      <h2 className="h4-text">Summary</h2>
      <div className="flex flex-col gap-2">
        <Voyage />
        {cabins && cabins.length > 0 && <Cabins />}
      </div>
    </div>
  );
};

export default Summary;
