import React, { useEffect, useState } from "react";
import clsx from "clsx";

import Icon from "./Icon";
import { ArrowDropUpLine, ArrowDropDownLine } from "./icons/System";

const Accordion = ({
  children,
  header,
  id,
  index,
  isDark,
  onChange,
  openOnInit,
}: {
  children: any;
  header: React.ReactElement;
  id?: string;
  index?: number;
  isDark?: boolean;
  onChange?: (i?: number) => void;
  openOnInit?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(openOnInit);

  // useEffect(() => {
  //   if (openOnInit !== isOpen) {
  //     setIsOpen(openOnInit);
  //   }
  // }, [openOnInit, isOpen]);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    if (onChange) {
      // Returns index for cases where you want to store a list of
      // open accordions in the parent
      onChange(index);
    }
  };

  return (
    <div
      data-testid="accordion-container"
      className={clsx("w-full bg-white rounded-5xl p-1", {
        "bg-warm-gray-3": isDark,
      })}
    >
      <button
        data-testid="accordion-button"
        id={id}
        className={clsx("flex flex-row px-3 py-5 justify-between w-full", {
          "font-bold": isOpen,
        })}
        onClick={(e) => handleToggle(e)}
      >
        {header}
        {isOpen ? (
          <Icon icon={ArrowDropUpLine} size="2.5x" />
        ) : (
          <Icon icon={ArrowDropDownLine} size="2.5x" />
        )}
      </button>
      {isOpen && (
        <div
          data-testid="accordion-content"
          className="px-4 pt-2 pb-6 border-t"
          aria-hidden="true"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
