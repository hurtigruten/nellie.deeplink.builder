import { useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { breakpoints } from "../../util/breakpoints";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import CabinGradeCard from "./CabinGradeCard";

const CabinGradeList = ({
  cabinCategory,
  currency,
  onCabinGradeSelected,
}: {
  cabinCategory: Contentful.Ship.TCabinCategory;
  currency?: TCurrency;
  onCabinGradeSelected: (cabinGrade: Contentful.Ship.TCabinGrade) => void;
}) => {
  const isLaptop = useMediaQuery(breakpoints.laptop);

  const [selectedCabinGrade, setSelectedCabinGrade] = useState<
    string | undefined
  >(undefined);

  const handleCabinSelection = async (
    cabinGrade: Contentful.Ship.TCabinGrade
  ) => {
    setSelectedCabinGrade(cabinGrade.code);
    onCabinGradeSelected(cabinGrade);
  };

  const isNotUnspecified = (cabinGrade: Contentful.Ship.TCabinGrade) =>
    !cabinGrade.name.toLowerCase().includes("unspecified");

  return (
    <>
      <div
        data-testid="cabin-grade-selector"
        className="flex flex-col pt-8 pb-6"
      >
        <p className="mb-1 text-xs">Cabin grade</p>
        <h4 className="mb-6">{cabinCategory?.category.name}</h4>
        {cabinCategory?.category.description &&
          Object.keys(cabinCategory.category.description).length !== 0 && (
            <div className="max-w-md mb-6 tablet:max-w-2xl">
              {documentToReactComponents(cabinCategory.category.description)}
            </div>
          )}

        <div className="flex flex-col w-full gap-6">
          {cabinCategory.cabinGrades
            .filter(isNotUnspecified)
            .map((cabinGrade) => (
              <CabinGradeCard
                key={cabinGrade.code}
                cabinGrade={cabinGrade}
                cabinCategory={cabinCategory?.category.name}
                currency={currency}
                onSelect={() => handleCabinSelection(cabinGrade)}
                onEdit={() => null}
                onReadMore={() => null}
                isLoading={selectedCabinGrade === cabinGrade.code}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default CabinGradeList;
