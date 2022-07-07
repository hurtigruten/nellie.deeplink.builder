import { features } from "process";
import { notEmpty } from "../../util/notEmpty";
import IconBullet from "../IconBullet";
import { Ruler2Line } from "../icons/Design";
import { HotelBedLine } from "../icons/Map";
import { ImageLine } from "../icons/Media";
import { UserLine } from "../icons/User";

const CabinFeatureItem = ({
  icon,
  label,
  isWhite,
}: {
  icon: TIconType;
  label: string;
  isWhite?: boolean;
}) => (
  <li className="flex flex-row items-center gap-2 caption">
    <IconBullet
      icon={icon}
      iconSize="1x"
      className="w-8 h-8"
      backgroundColorClassName={
        isWhite ? "bg-white" : "bg-warm-gray-2 group-hover:bg-white"
      }
      iconColorClassName="text-black"
    />
    {label}
  </li>
);

const CabinFeatureList = ({
  cabinGrade,
  isWhiteIcons,
  maxOccupancy,
}: {
  cabinGrade: Contentful.Ship.TCabinGrade;
  isWhiteIcons?: boolean;
  maxOccupancy?: number;
}) => {
  return (
    <ul className="grid w-full grid-cols-2 gap-3 auto-cols-auto auto-rows-auto row">
      {/*notEmpty(maxOccupancy) && (
        <CabinFeatureItem
          icon={UserLine}
          label={translateCabin(
            (x) => (maxOccupancy > 1 ? x.upToXGuests : x.oneGuest),
            { amount: `${maxOccupancy}` }
          )}
          isWhite={isWhiteIcons}
        />
          ) */}
      {cabinGrade.sizeTo && cabinGrade.sizeFrom && (
        <CabinFeatureItem
          icon={Ruler2Line}
          label={`${cabinGrade.sizeFrom} - ${cabinGrade.sizeTo}`}
          isWhite={isWhiteIcons}
        />
      )}
      {cabinGrade.bed?.name && (
        <CabinFeatureItem
          icon={HotelBedLine}
          label={cabinGrade.bed.name}
          isWhite={isWhiteIcons}
        />
      )}
      {cabinGrade.window?.name && (
        <CabinFeatureItem
          icon={ImageLine}
          label={cabinGrade.window.name}
          isWhite={isWhiteIcons}
        />
      )}
    </ul>
  );
};

export default CabinFeatureList;
