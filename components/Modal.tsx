import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { breakpoints } from "../util/breakpoints";
import getFixedElements from "../util/getFixedElements";
import FocusLock from "./FocusLock";
import IconButton from "./IconButton";
import Fluid from "./Fluid";
import { CloseLine } from "./icons/System";
import { usePrevious } from "../hooks/usePrevious";
import { useMediaQuery } from "../hooks/useMediaQuery";

enum AnimationState {
  Closed,
  BeforeOpening,
  Opening,
  Open,
  Closing,
}

const isAnimating = (state: AnimationState) =>
  state === AnimationState.BeforeOpening ||
  state === AnimationState.Opening ||
  state === AnimationState.Closing;

type TModalProps = {
  children: React.ReactNode;
  floatingActionBar?: React.ReactNode;
  isContentPadding?: boolean;
  isModalFullScreen?: boolean;
  isNewFullScreen?: boolean;
  isRelative?: boolean;
  hasTopBorder?: boolean;
  onClose: () => void;
  open: boolean;
  title?: string;
  titleComponent?: React.ReactNode;
  isCentered?: boolean;
  isContentFullScreen?: boolean;
  className?: string;
};

const Modal = ({
  children,
  floatingActionBar,
  isContentPadding = false,
  isModalFullScreen = false,
  isNewFullScreen = false,
  isRelative = false,
  onClose,
  open = false,
  hasTopBorder = true,
  title,
  titleComponent,
  isCentered = false,
  isContentFullScreen = false,
  className,
}: TModalProps) => {
  const [animationState, setAnimationState] = useState(AnimationState.Closed);
  const wasPreviouslyOpen = usePrevious(open);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [fixedElements, setFixedElements] = useState<HTMLElement[]>();
  const isLaptop = useMediaQuery(breakpoints.laptop);

  const closeModal = () => {
    if (isModalFullScreen || isNewFullScreen || isCentered) {
      setAnimationState(AnimationState.Closed);
      onClose();
      return;
    }

    const isOutOfScreen = () =>
      (wrapperRef.current?.getBoundingClientRect().top ?? 0) >=
      window.outerHeight;

    setAnimationState(AnimationState.Closing);
    const intervalId = setInterval(() => {
      if (isOutOfScreen()) {
        clearInterval(intervalId);
        setAnimationState(AnimationState.Closed);
        onClose();
      }
    }, 25);
  };

  const onKeyUp = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }

    return false;
  };

  useEffect(() => {
    if (!open) {
      if (
        wasPreviouslyOpen &&
        (animationState === AnimationState.Open ||
          animationState === AnimationState.Opening)
      ) {
        closeModal();
      }

      return;
    }
    setAnimationState(AnimationState.BeforeOpening);
  }, [open]);

  useEffect(() => {
    if (animationState === AnimationState.BeforeOpening) {
      window.requestAnimationFrame(() => {
        setAnimationState(AnimationState.Open);
      });
    } else if (animationState === AnimationState.Open) {
      document.addEventListener("keyup", onKeyUp);
    } else if (animationState === AnimationState.Closed) {
      document.removeEventListener("keyup", onKeyUp);
    }
  }, [animationState]);

  useEffect(() => {
    if (fixedElements) {
      return;
    }
    setFixedElements(getFixedElements());
  }, [children]);

  if (animationState !== AnimationState.Open && !isAnimating(animationState)) {
    return null;
  }

  const offsetLeft =
    typeof window !== "undefined"
      ? (window.innerWidth -
          (wrapperRef.current?.clientWidth ?? window.innerWidth)) /
        2
      : 0;

  return (
    <FocusLock fixedElements={fixedElements} isLocked>
      <div
        className="flex justify-center"
        role="dialog"
        aria-labelledby="modalDialogTitle"
        aria-describedby="modalDialogDescription"
        data-testid="modal"
      >
        <div
          className={clsx(
            "fixed top-0 bg-black transition-colors duration-500 left-0 z-[200] min-h-screen",
            {
              "w-screen": !isRelative,
              "w-full": isRelative,
              hidden: animationState === AnimationState.Closed,
              "bg-opacity-50":
                animationState === AnimationState.Opening ||
                animationState === AnimationState.Open,
              "bg-opacity-0":
                animationState === AnimationState.Closed ||
                animationState === AnimationState.Closing ||
                animationState === AnimationState.BeforeOpening,
            }
          )}
          aria-label="Close"
          role="button"
          onClick={onClose}
        />
        <div
          style={
            isCentered
              ? {}
              : {
                  left:
                    (isModalFullScreen || isLaptop) && !isNewFullScreen
                      ? offsetLeft
                      : 0,
                  transition: "bottom 0.5s ease 0s",
                }
          }
          ref={wrapperRef}
          className={clsx(
            "fixed flex flex-col h-5/6 laptop:max-h-[92vh] duration-500 bg-white z-[210]",
            {
              "w-screen": !isRelative,
              "w-full": isRelative,
              invisible:
                !wrapperRef.current ||
                (animationState !== AnimationState.Open && isCentered),
              "bottom-0":
                (animationState === AnimationState.Opening ||
                  animationState === AnimationState.Open) &&
                !isCentered,
              "bottom-[-80rem]":
                !isCentered &&
                !isModalFullScreen &&
                (animationState === AnimationState.Closed ||
                  animationState === AnimationState.Closing ||
                  animationState === AnimationState.BeforeOpening),
              "top-[8vh] h-[92vh] laptop:inset-x-1/4 laptop:w-3/6 laptop:h-[84vh]":
                isModalFullScreen,
              "top-0 left-0 right-0 bottom-0 h-[100vh] !max-h-full !rounded-none pb-10 overflow-scroll":
                isNewFullScreen,
              "laptop:w-auto": !isModalFullScreen && !isRelative,
              "rounded-t-2xl": !isCentered,
              "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto w-auto rounded-5xl":
                isCentered,
              [className || ""]: className,
            }
          )}
        >
          <div
            className={clsx(
              "flex w-full items-center justify-center pb-4 pt-6 border-b border-warm-gray-3",
              {
                "border-b-0": !hasTopBorder,
              }
            )}
          >
            <Fluid>
              {title && <h4 className="pr-6 overline-text">{title}</h4>}
              {titleComponent && <>{titleComponent}</>}
              <div
                className="flex justify-end flex-1"
                data-testid="modal-close-button"
              >
                <IconButton
                  aria-label="Close"
                  buttonColor="transparent"
                  icon={CloseLine}
                  onClick={closeModal}
                />
              </div>
            </Fluid>
          </div>

          {isNewFullScreen ? (
            <div
              className={clsx("w-full overflow-y-auto", {
                "h-full": isContentFullScreen,
              })}
            >
              <div
                className={clsx(" w-full pt-4", {
                  "flex flex-1 items-start flex-grow-9999 px-6 mx-auto max-w-fluid":
                    isContentPadding,
                  "h-full": isContentFullScreen,
                })}
              >
                {children}
              </div>
            </div>
          ) : (
            <div className="block w-full overflow-y-auto grow-9999">
              <div
                className={clsx("w-full max-w-fluid", {
                  "px-10": isContentPadding,
                  "h-full": isContentFullScreen,
                })}
              >
                {children}
              </div>
            </div>
          )}

          {floatingActionBar && (
            <div className="w-full py-6 border-t border-warm-gray-3">
              <Fluid>{floatingActionBar}</Fluid>
            </div>
          )}
        </div>
      </div>
    </FocusLock>
  );
};

export default Modal;
