import formatPrice from "../../util/formatPrice";
import PrimaryButton from "../inputs/PrimaryButton";

const RenderSelectedDeparture = ({
  selectedDeparture,
  currency,
  pricingUnavailableLabel,
}: {
  selectedDeparture: TDeparture;
  currency: string;
  pricingUnavailableLabel: string;
}) => {
  const hasDeparturePrice = selectedDeparture.price > 0;
  if (hasDeparturePrice) {
    return (
      <div className="w-[50%]">
        <p className="caption">Price from</p>
        <div className="flex items-end">
          <h5>{formatPrice(selectedDeparture.price, currency)}</h5>
          <p className="caption opacity-50 pl-2 pb-1.5 lowercase">per person</p>
        </div>
      </div>
    );
  }
  return (
    <div className="w-[50%]">
      <div className="flex items-center">
        <p className="body-text-2">{pricingUnavailableLabel}</p>
      </div>
    </div>
  );
};

const ConfirmDeparture = ({
  confirmDeparture,
  selectedDeparture,
  currency,
}: {
  selectedDeparture: TDeparture | null | undefined;
  currency: string;
  confirmDeparture: () => void;
}) => {
  return (
    <>
      {!selectedDeparture && (
        <p className="body-text-2 w-[45%]">Please select a departure date</p>
      )}
      {selectedDeparture && (
        <RenderSelectedDeparture
          selectedDeparture={selectedDeparture}
          currency={currency}
          pricingUnavailableLabel="Pricing available on next step"
        />
      )}
      <PrimaryButton
        onClick={confirmDeparture}
        data-testid="confirmDepartureBtn"
        isDisabled={!selectedDeparture}
      >
        Continue
      </PrimaryButton>
    </>
  );
};

export default ConfirmDeparture;
