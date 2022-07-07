import { useEffect, useState } from "react";
import PrimaryButton from "../inputs/PrimaryButton";

const ConfirmGuests = ({
  searchForAvailability,
  searchDisabled,
  noAvailability,
}: {
  searchForAvailability: () => void;
  searchDisabled: boolean;
  noAvailability: boolean;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (noAvailability) {
      setIsLoading(false);
    }
  }, [noAvailability]);

  const handleClick = () => {
    setIsLoading(true);
    searchForAvailability();
  };

  return (
    <>
      <p className="body-text-2 w-[45%]">Please select number of guests</p>
      <PrimaryButton
        onClick={handleClick}
        data-testid="departureSearchBtn"
        isDisabled={searchDisabled || noAvailability}
        isLoading={isLoading}
      >
        Search
      </PrimaryButton>
    </>
  );
};

export default ConfirmGuests;
