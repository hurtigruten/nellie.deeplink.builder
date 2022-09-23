import { useEffect, useState } from "react";
import { Status } from "../../constants/status";
import AddButton from "../inputs/AddButton";
import Modal from "../Modal";
import { TSelectedDeparture } from "./DepartureOptions";
import IconBullet from "../IconBullet";
import { Ship2Line } from "../icons/Map";
import CabinCategoryButton from "../cabin/CabinCategoryButton";
import CabinGradeList from "../cabin/CabinGradeList";
import SummaryWithEditDelete from "../SummaryWithEditDelete";
import Accordion from "../Accordion";

const CabinSelector = ({
  cabinsByShip,
  onCabinSelected,
}: {
  onCabinSelected: (gradeAndCategory: {
    grade: Contentful.Ship.TCabinGrade;
    category: Contentful.Ship.TCategory;
  }) => void;
  cabinsByShip: Pick<Contentful.Ship.TRootObject, "name" | "cabinCategories">[];
}) => {
  const [selectedCabinCategory, setSelectedCabinCategory] =
    useState<Contentful.Ship.TCabinCategory | null>(null);

  return (
    <div>
      {cabinsByShip.map((ship) => (
        <Accordion
          key={ship.name}
          header={
            <div className="flex items-center gap-x-2">
              <IconBullet
                className="shrink-0"
                icon={Ship2Line}
                iconColorClassName="text-white"
                backgroundColorClassName="bg-black"
              />
              <p className="mb-1 mr-4 font-medium text-left body-text-1 tablet:mr-0">
                {ship.name}
              </p>
            </div>
          }
        >
          <div className="flex w-full my-4 ml-16 gap-x-4">
            {ship.cabinCategories.map((cc) => (
              <CabinCategoryButton
                isSelected={
                  selectedCabinCategory?.category.code === cc.category.code
                }
                onClick={setSelectedCabinCategory}
                key={cc.category.code}
                cabinCategory={cc}
              />
            ))}
          </div>
          {selectedCabinCategory && (
            <div>
              <CabinGradeList
                onCabinGradeSelected={(cg) =>
                  onCabinSelected({
                    grade: cg,
                    category: selectedCabinCategory.category,
                  })
                }
                cabinCategory={selectedCabinCategory}
              />
            </div>
          )}
        </Accordion>
      ))}
    </div>
  );
};

const CabinSummary = ({
  cabins,
}: {
  cabins: {
    grade: Contentful.Ship.TCabinGrade;
    category: Contentful.Ship.TCategory;
  }[];
}) => {
  return (
    <div>
      <p>{cabins.length} cabins</p>
      <p>Cabin grades: {cabins.map((c) => c.grade.code).join(", ")}</p>
    </div>
  );
};

const CabinOptions = ({
  departure,
  locale,
  onCabinsSelected,
}: {
  locale: TLocale;
  departure: TSelectedDeparture | null;
  onCabinsSelected: (cabinGrades: string[]) => void;
}) => {
  const [status, setStatus] = useState(Status.NOT_STARTED);
  const [cabinsByShip, setCabinsByShip] = useState<
    Pick<Contentful.Ship.TRootObject, "name" | "cabinCategories">[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCabins, setSelectedCabins_] = useState<
    {
      grade: Contentful.Ship.TCabinGrade;
      category: Contentful.Ship.TCategory;
    }[]
  >([]);

  const setSelectedCabins = (
    cabins: {
      grade: Contentful.Ship.TCabinGrade;
      category: Contentful.Ship.TCategory;
    }[]
  ) => {
    setSelectedCabins_(cabins);
    onCabinsSelected(cabins.map((c) => c.grade.code));
  };

  useEffect(() => {
    const loadCabins = async () => {
      setStatus(Status.LOADING);

      try {
        const p = new URLSearchParams({
          locale,
          ...(departure
            ? {
                quoteId: departure.departure.quoteId,
                voyageId: departure.departure.voyageId,
              }
            : {}),
        });
        const res = await fetch(`/api/getCabins?${p.toString()}`);
        const cabins = await res.json();

        setCabinsByShip(cabins);
        setStatus(Status.LOADING_SUCCESS);
      } catch (e) {
        setStatus(Status.LOADING_FAILED);
        console.error(e);
        alert("Unable to retrieve cabins.");
      }
    };

    if (!locale) {
      setCabinsByShip([]);
    } else {
      void loadCabins();
    }
  }, [locale, departure]);

  return (
    <>
      {!!selectedCabins.length && (
        <SummaryWithEditDelete
          onEdit={() => {
            setSelectedCabins([]);
            setIsModalOpen(true);
          }}
          onDelete={() => setSelectedCabins([])}
        >
          <CabinSummary cabins={selectedCabins} />
        </SummaryWithEditDelete>
      )}
      {!selectedCabins.length && (
        <AddButton
          isDisabled={status === Status.LOADING}
          isLoading={status === Status.LOADING}
          size="small"
          onClick={() => setIsModalOpen(true)}
        >
          Add cabin options
        </AddButton>
      )}
      <Modal
        isNewFullScreen
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <>
          <h2 className="mb-4 ml-8">Add cabins</h2>
          <CabinSelector
            onCabinSelected={(cg) => {
              setSelectedCabins([...selectedCabins, cg]);
            }}
            cabinsByShip={cabinsByShip}
          />
        </>
      </Modal>
    </>
  );
};

export default CabinOptions;
