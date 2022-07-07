import { useState } from "react";
import { Deeplink } from "../../util/deeplink";
import CheckAvailability from "../availability/CheckAvailability";
import AddButton from "../inputs/AddButton";
import Modal from "../Modal";
import SummaryWithEditDelete from "../SummaryWithEditDelete";

export type TSelectedDeparture = {
  departure: TDeparture;
  passengers: TCabinPassengerCount[];
};

const DepartureSummary = ({ departure }: { departure: TSelectedDeparture }) => {
  const passengerCount = departure.passengers.reduce(
    (acc, cv) => acc + cv.adults + cv.children + cv.infants,
    0
  );
  return (
    <>
      <p className="whitespace-nowrap">{passengerCount} travellers</p>
      <p>{departure.departure.date.toLocaleDateString("en")}</p>
    </>
  );
};

const DepartureOptions = ({
  locale,
  voyage,
  onDepartureSelected,
}: {
  locale: TLocale;
  voyage: Pick<Contentful.Voyage.Overview, "packageCodes" | "id">;
  onDepartureSelected: (departure: TSelectedDeparture | null) => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [departure, setDeparture] = useState<TSelectedDeparture | null>(null);

  return (
    <>
      {!departure && (
        <AddButton onClick={() => setIsModalOpen(true)} size="small">
          Add departure options
        </AddButton>
      )}
      {departure && (
        <SummaryWithEditDelete
          onDelete={() => {
            setDeparture(null);
            onDepartureSelected(null);
          }}
          onEdit={() => {
            setIsModalOpen(true);
          }}
        >
          <DepartureSummary departure={departure} />
        </SummaryWithEditDelete>
      )}
      <Modal
        isNewFullScreen
        onClose={() => setIsModalOpen(false)}
        open={isModalOpen}
      >
        <CheckAvailability
          onSubmit={(departure, passengers) => {
            setDeparture({ departure, passengers });
            onDepartureSelected({ departure, passengers });
            setIsModalOpen(false);
          }}
          locale={locale}
          voyageId={voyage.id}
          packageCodes={voyage.packageCodes}
        />
      </Modal>
    </>
  );
};

export default DepartureOptions;
