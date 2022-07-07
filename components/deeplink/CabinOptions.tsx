import { useEffect, useState } from "react";
import { Status } from "../../constants/status";
import { mapLocaleToContenfulFormat } from "../../util/mappers";
import AddButton from "../inputs/AddButton";
import Modal from "../Modal";
import { TSelectedDeparture } from "./DepartureOptions";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@reach/accordion";
import IconBullet from "../IconBullet";
import { ArrowDownSLine, ArrowUpSLine } from "../icons/System";
import Icon from "../Icon";
import { Ship2Line } from "../icons/Map";
import CabinCategoryButton from "../cabin/CabinCategoryButton";
import CabinGradeList from "../cabin/CabinGradeList";
import SummaryWithEditDelete from "../SummaryWithEditDelete";

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
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const [selectedCabinCategory, setSelectedCabinCategory] =
    useState<Contentful.Ship.TCabinCategory | null>(null);

  const handleAccordionItemClick = (value: number | undefined) => {
    if (value !== undefined && value !== openIndex) {
      setSelectedCabinCategory(null);
      setOpenIndex(value);
    } else {
      setOpenIndex(-1);
    }
  };

  return (
    <div>
      <Accordion
        index={openIndex}
        onChange={handleAccordionItemClick}
        className="flex flex-col px-4 py-6 bg-white gap-y-4 rounded-5xl tablet:px-8"
      >
        {cabinsByShip.map((ship, index) => (
          <AccordionItem key={ship.name}>
            <AccordionButton>
              <div className="flex items-center justify-between">
                <div className="flex flex-row items-center flex-1 gap-4 tablet:gap-6">
                  <IconBullet
                    className="shrink-0"
                    icon={Ship2Line}
                    iconColorClassName="text-white"
                    backgroundColorClassName="bg-black"
                  />
                  <p className="mr-4 font-medium text-left body-text-1 tablet:mr-0">
                    {ship.name}
                  </p>
                </div>
                <Icon
                  size="2x"
                  icon={openIndex === index ? ArrowUpSLine : ArrowDownSLine}
                />
              </div>
            </AccordionButton>
            <AccordionPanel>
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
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
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

        console.log("loaded cabins!", cabins);

        setCabinsByShip(cabins);
        setStatus(Status.LOADING_SUCCESS);
      } catch (e) {
        setStatus(Status.LOADING_FAILED);
        console.log("Hmm.. bad things have happened.");
      }
    };

    if (!locale) {
      setCabinsByShip([]);
      console.log(
        "locale or dep was null, skipping cabin fetch",
        locale,
        departure
      );
    } else {
      console.log("getting cabins!");
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
