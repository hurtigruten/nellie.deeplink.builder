import clsx from "clsx";
import formatPrice from "../../util/formatPrice";

const CabinCategoryButton = ({
  cabinCategory,
  onClick,
  isSelected,
  currency,
}: {
  cabinCategory: Contentful.Ship.TCabinCategory;
  onClick: (cabinCategory: Contentful.Ship.TCabinCategory) => void;
  isSelected: boolean;
  currency?: string;
}) => {
  const hasAvailableCabins = cabinCategory.cabinGrades.length > 0;

  // const priceDetails = cabinCategory.cabinGrades.map(c => c.) //getMinimumPriceDetails(cabinCategory);
  // const hasDiscount = priceDetails.price !== priceDetails.strikeThroughPrice;

  return (
    <button
      key={cabinCategory.category.code}
      onClick={() => onClick(cabinCategory)}
      className={clsx(
        `flex  items-center  justify-between p-5 rounded-5xl disabled:opacity-60 disabled:pointer-events-none drop-shadow-card-shadow hover:drop-shadow-card-hover mb-4 tablet:mb-0`,
        {
          "bg-black text-white": isSelected,

          "bg-warm-gray-1": !isSelected,
        }
      )}
      data-testid="cabin-category-button"
      disabled={!hasAvailableCabins}
    >
      <div className="text-left">
        <h3 className="mb-2 ui-text bold">{cabinCategory.category.name}</h3>
        {/* TODO, prices from PG hasAvailableCabins ? (
          <div>
            <p className="caption">
              Price from
              {hasDiscount && (
                <span className={hasDiscount ? "line-through" : ""}>
                  {formatPrice(priceDetails.strikeThroughPrice, currency)}
                </span>
              )}
            </p>
            <h4 className="ui-text bold">
              {formatPrice(priceDetails.price, currency)}
            </h4>
          </div>
        ) : (
          <p>Unavailable</p>
        ) */}
      </div>
    </button>
  );
};

export default CabinCategoryButton;
