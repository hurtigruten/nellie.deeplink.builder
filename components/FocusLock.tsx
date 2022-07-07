import React, { ReactNode, useEffect, useState, useRef } from "react";
import getFixedElements from "../util/getFixedElements";

const FocusLock = ({
  isLocked = true,
  children,
  defaultFocusIndex = 0,
  extraFocusableContainerRef,
  fixedElements,
}: {
  isLocked?: boolean;
  children: ReactNode;
  defaultFocusIndex?: number;
  extraFocusableContainerRef?: React.RefObject<HTMLDivElement>;
  fixedElements?: HTMLElement[];
}) => {
  const rootNode = useRef<HTMLDivElement>(null);
  const focusableItems = useRef<HTMLElement[]>();
  const extraFocusablesStartIndex = useRef<number>(Infinity);
  const [isReadyToRender, setIsReadyToRender] = useState(false);

  const onWheel = (event: UIEvent) => {
    event.stopPropagation();
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (!focusableItems.current) return;

    const { key, shiftKey } = event;
    const {
      length,
      0: firstItem,
      [extraFocusablesStartIndex.current - 1]: lastItem,
    } = focusableItems.current;

    const firstExtraItem: HTMLElement | undefined =
      focusableItems.current[extraFocusablesStartIndex.current];
    const lastExtraItem: HTMLElement | undefined =
      length !== extraFocusablesStartIndex.current
        ? focusableItems.current[length - 1]
        : undefined;

    if (isLocked && key === "Tab") {
      if (length === 1) {
        firstItem.focus();
        event.preventDefault();
        return;
      }

      const activeElementHasEscaped =
        document.activeElement &&
        !focusableItems.current.includes(
          document.activeElement as HTMLElement
        ) &&
        !extraFocusableContainerRef?.current?.contains(document.activeElement);

      if (!shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        if (firstExtraItem) {
          firstExtraItem.focus();
        } else firstItem.focus();
      } else if (!shiftKey && document.activeElement === lastExtraItem) {
        event.preventDefault();
        firstItem.focus();
      } else if (shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        if (lastExtraItem) {
          lastExtraItem.focus();
        } else lastItem.focus();
      } else if (shiftKey && document.activeElement === firstExtraItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (activeElementHasEscaped) {
        event.preventDefault();
        (shiftKey ? lastItem : firstItem).focus();
      }
    }
  };

  const onPointerDown = (event: MouseEvent | UIEvent) => {
    if (
      event.target instanceof Node &&
      !rootNode.current?.contains(event.target) &&
      (extraFocusableContainerRef
        ? !extraFocusableContainerRef?.current?.contains(event.target)
        : true)
    ) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  useEffect(() => {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const body = document.getElementsByTagName("body")[0];
    const previousBodyStyles = (({ overflow, touchAction, paddingRight }) => ({
      overflow,
      touchAction,
      paddingRight,
    }))(body.style);

    const newFixedElements = fixedElements || getFixedElements();

    newFixedElements.forEach((element) => {
      // eslint-disable-next-line no-param-reassign
      element.style.paddingRight = `${scrollBarWidth}px`;
    });

    Object.assign(body.style, {
      overflow: "hidden",
      "touch-action": "none",
      "padding-right": `${scrollBarWidth}px`,
    });
    setIsReadyToRender(true);

    return () => {
      newFixedElements.forEach((element) => {
        // eslint-disable-next-line no-param-reassign
        element.style.paddingRight = "";
      });
      Object.assign(body.style, previousBodyStyles);
    };
  }, []);

  useEffect(() => {
    if (isReadyToRender && rootNode.current) {
      const updateFocusableItems = () => {
        const focusables = [
          "button:not(:disabled)",
          "[href]",
          "input",
          "select",
          "textarea",
          '[tabindex]:not([tabindex="-1"])',
          "video",
        ];
        const focusableSelector = focusables.join(",");

        const lockedFocusables =
          rootNode.current?.querySelectorAll<HTMLElement>(focusableSelector) ??
          [];
        const extraFocusables =
          extraFocusableContainerRef?.current?.querySelectorAll<HTMLElement>(
            focusableSelector
          ) ?? [];

        focusableItems.current = [...lockedFocusables, ...extraFocusables];
        extraFocusablesStartIndex.current = lockedFocusables.length;
      };

      const observer = new MutationObserver(() => {
        updateFocusableItems();
      });
      updateFocusableItems();
      observer.observe(rootNode.current, { childList: true, subtree: true });

      const focusIndex =
        defaultFocusIndex < 0
          ? (focusableItems.current?.length ?? defaultFocusIndex) -
            defaultFocusIndex
          : defaultFocusIndex;
      setTimeout(() => focusableItems.current?.[focusIndex]?.focus(), 0);

      return () => {
        observer.disconnect();
      };
    }
    return undefined;
  }, [rootNode, isReadyToRender]);

  useEffect(() => {
    const nextjsContainer = document.getElementById("__next");
    if (nextjsContainer) {
      nextjsContainer.addEventListener("wheel", onWheel, { passive: false });
      nextjsContainer.addEventListener("pointerdown", onPointerDown);
    }
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      if (nextjsContainer) {
        nextjsContainer.removeEventListener("pointerdown", onPointerDown);
        nextjsContainer.removeEventListener("wheel", onWheel);
      }
    };
  }, [isLocked, focusableItems]);

  if (!isReadyToRender) return null;

  return (
    <div className="fixed z-[100000]" ref={rootNode}>
      {children}
    </div>
  );
};

export default FocusLock;
