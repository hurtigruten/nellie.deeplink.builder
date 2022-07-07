import React, { forwardRef, ReactNode, Ref, useState } from "react";
import clsx from "clsx";

import CabinFeatureList from "./CabinFeatureList";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { breakpoints } from "../../util/breakpoints";
import { notEmpty } from "../../util/notEmpty";
import PrimaryButton from "../inputs/PrimaryButton";
import SecondaryButton from "../inputs/SecondaryButton";
import { getDeckFromCabinNumber } from "../../util/getDeckFromCabinNumber";
import { AddLine } from "../icons/System";
import SpinnerWithCheckmark from "../SpinnerWithCheckmark";

enum AddState {
  NOT_ADDED,
  ADDING,
  ADDED,
}

const CabinGradeCard = (
  {
    cabinGrade,
    cabinCategory,
    currency,
    onSelect,
    onEdit,
    onReadMore,
    disabled = false,
    isLoading = false,
    isSoldOut = false,
    children,
  }: {
    cabinGrade: Contentful.Ship.TCabinGrade;
    cabinCategory?: string;
    currency?: TCurrency;
    onSelect: () => void;
    onEdit: () => void;
    onReadMore: () => void;
    disabled?: boolean;
    horizontal?: boolean;
    isLoading?: boolean;
    isSoldOut?: boolean;
    children?: ReactNode;
  },
  ref: Ref<HTMLDivElement>
) => {
  const [addState, setAddState] = useState(AddState.NOT_ADDED);

  return (
    <div
      className={clsx(
        "flex flex-col items-stretch group w-full drop-shadow-card-shadow max-w-sm min-w-[300px] bg-white overflow-hidden flex-1 rounded-5xl laptop:min-h-[225px] laptop:max-w-none",
        {
          "bg-white hover:bg-warm-gray-2": addState !== AddState.ADDED,
          "bg-warm-gray-2": addState === AddState.ADDED,
        }
      )}
      ref={ref}
    >
      <div
        onClick={onReadMore}
        className="flex flex-col-reverse text-left cursor-pointer laptop:flex-row"
      >
        <div className="flex flex-col items-stretch justify-between flex-1 gap-6 p-6 text-black">
          <div className="flex justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                {cabinCategory && (
                  <p className="overline-text">{cabinCategory}</p>
                )}
                <div className="flex flex-row gap-4">
                  <h5 data-testid="cabin-grade-title">{cabinGrade.name}</h5>
                  {/*<div className="flex flex-col items-end">
                    <p className="h5-text">
                      {formatPrice(cabinGrade.price, currency)}
                    </p>
                    <p className="caption">{translate((x) => x.perPerson)}</p>
                </div>*/}
                </div>
              </div>
              <div className="flex flex-row justify-between gap-4">
                <p className="caption text-light-black">
                  Cabin code: {cabinGrade.code}
                </p>
              </div>
            </div>
          </div>

          <span className="mx-8 border-b-2 border-warm-gray-3"></span>

          <CabinFeatureList cabinGrade={cabinGrade} isWhiteIcons />

          <div className="flex justify-between w-full gap-2">
            <SecondaryButton
              size="small"
              onClick={(e: MouseEvent) => {
                e.stopPropagation();
                setAddState(AddState.ADDING);
                onSelect();
                setTimeout(() => setAddState(AddState.ADDED), 1000);
                setTimeout(() => setAddState(AddState.NOT_ADDED), 2000);
              }}
              data-testid="cabin-grade-button"
              isDisabled={
                disabled || isSoldOut || addState !== AddState.NOT_ADDED
              }
            >
              <>
                <span className="relative inline-flex items-center min-w-[100px]">
                  <span
                    className={clsx(
                      "absolute whitespace-nowrap  transition-all duration-500",
                      {
                        "opacity-0": addState !== AddState.ADDING,
                        "opacity-100": addState === AddState.ADDING,
                      }
                    )}
                  >
                    Adding...
                  </span>
                  <span
                    className={clsx(
                      "absolute whitespace-nowrap  transition-all duration-500",
                      {
                        "opacity-0": addState !== AddState.ADDED,
                        "opacity-100": addState === AddState.ADDED,
                      }
                    )}
                  >
                    Added!&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    className={clsx(
                      "absolute whitespace-nowrap  transition-all duration-500",
                      {
                        "opacity-0": addState !== AddState.NOT_ADDED,
                        "opacity-100": addState === AddState.NOT_ADDED,
                      }
                    )}
                  >
                    Add cabin
                  </span>
                </span>
                <SpinnerWithCheckmark
                  width={20}
                  height={20}
                  className={clsx("transition-all duration-500", {
                    "opacity-0": addState === AddState.NOT_ADDED,
                    "opacity-100": addState !== AddState.NOT_ADDED,
                  })}
                  isInProgress={addState === AddState.ADDING}
                  isFinished={addState === AddState.ADDED}
                />
              </>
            </SecondaryButton>
          </div>
        </div>
        <div
          className="relative bg-black bg-center bg-no-repeat bg-cover h-52 laptop:min-h-full laptop:min-w-[50%] laptop:h-auto"
          style={{
            backgroundImage: `url(${cabinGrade?.media?.[0]?.file?.url})`,
          }}
          data-testid="cabin-grade-bg-image"
        ></div>
      </div>
      <div
        className={clsx(
          "transition-[max-height] ease-in-out duration-200 bg-white",
          {
            "max-h-0": !notEmpty(children),
            "max-h-[1000px]": notEmpty(children),
          }
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default forwardRef(CabinGradeCard);
