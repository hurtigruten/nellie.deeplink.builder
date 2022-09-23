import Image from "next/image";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import { Hint } from "react-autocomplete-hint";
import { IHintOption } from "react-autocomplete-hint/dist/src/IHintOption";
import { mapLocaleToContenfulFormat } from "../../util/mappers";
import { Status } from "../../constants/status";

const VoyageSelector = ({
  locale,
  onVoyageSelected,
}: {
  locale: TLocale;
  onVoyageSelected: (voyage: Contentful.Voyage.Overview) => void;
}) => {
  const [status, setStatus] = useState(Status.NOT_STARTED);
  const [voyages, setVoyages] = useState<Contentful.Voyage.Overview[]>([]);
  const [query, setQuery] = useState("");
  const [guessedVoyage, setGuessedVoyage] =
    useState<Contentful.Voyage.Overview | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef<number>();

  useEffect(() => {
    if (!query) {
      setImageLoaded(false);
    }
  }, [query]);

  useEffect(() => {
    const loadVoyages = async () => {
      setStatus(Status.LOADING);

      try {
        const res = await fetch(
          "/api/getAllVoyages?locale=" +
            mapLocaleToContenfulFormat(locale ?? "en-au")
        );
        const voyages_: Contentful.Voyage.Overview[] = await res.json();

        setVoyages(voyages_);
        setStatus(Status.LOADING_SUCCESS);
      } catch (e) {
        setStatus(Status.LOADING_FAILED);
        alert("Unable to load voyages from Contentful.");
        console.error(e);
      }
    };

    if (!locale) {
      setVoyages([]);
    } else {
      void loadVoyages();
    }
  }, [locale]);

  const setGuessedVoyage_ = (hint: IHintOption) => {
    if (!hint && query && guessedVoyage) {
      clearTimeout(imageRef.current);
      return;
    }

    if (!hint?.id) {
      clearTimeout(imageRef.current);
      setImageLoaded(false);
      setGuessedVoyage(null);
      return;
    }

    const voyage = voyages.find((v) => v.id === hint.id);
    if (!voyage) {
      clearTimeout(imageRef.current);
      setImageLoaded(false);
      setGuessedVoyage(null);
      return;
    }

    if (voyage.id === guessedVoyage?.id) {
      return;
    }

    setImageLoaded(false);
    clearTimeout(imageRef.current);
    imageRef.current = window.setTimeout(() => {
      setGuessedVoyage(voyage);
    }, 500);
  };

  const onHintFill = (h: IHintOption) => {
    const voyage = voyages.find((v) => v.id === h.id.toString()) ?? null;
    if (voyage) {
      onVoyageSelected(voyage);
    }
  };

  const hintOptions = [
    ...voyages.map((v) => ({
      id: v.id,
      label: v.name + ` - (id: ${v.id})`,
    })),
    ...voyages.map((v) => ({
      id: v.id,
      label: ":" + v.id,
    })),
    ...voyages.map((v) => ({
      id: v.id,
      label: "~" + v.packageCodes.join(","),
    })),
  ];

  return (
    <div
      className={clsx("transition-opacity duration-500", {
        "pointer-events-none bg-warm-gray-2 opacity-50":
          status !== Status.LOADING_SUCCESS,
        "opacity-100 bg-transparent": status === Status.LOADING_SUCCESS,
      })}
    >
      <h2 className="mb-4">Select a voyage</h2>

      <div className="relative h-[420px] w-[800px]">
        {guessedVoyage && (
          <div className="absolute top-0 flex flex-col w-full">
            <hr
              className={clsx(
                "border-0 self-center bg-black h-0.5 transition-all",
                {
                  "w-full": imageLoaded,
                  "w-0": !imageLoaded,
                }
              )}
            />
            <div
              className={clsx(
                "relative flex flex-col items-center transition-opacity duration-500 w-full h-[400px]",
                {
                  "opacity-0": !imageLoaded,
                  "opacity-100": imageLoaded,
                }
              )}
            >
              <Image
                layout="fill"
                onLoadingComplete={() => {
                  console.log("imageloaded");
                  setImageLoaded(true);
                }}
                src={guessedVoyage.imageUrl}
                alt={guessedVoyage.imageAlt}
              />
            </div>
            <hr
              className={clsx(
                "border-0 self-center bg-black h-0.5 transition-all",
                {
                  "w-full": imageLoaded,
                  "w-0": !imageLoaded,
                }
              )}
            />
          </div>
        )}
        <Hint
          onHint={setGuessedVoyage_}
          onFill={(h) => {
            if (typeof h === "undefined" || typeof h === "string") {
              throw new Error("Unexpected hint type received");
            }

            onHintFill(h);
            setGuessedVoyage_(h);
          }}
          allowEnterFill
          allowTabFill
          options={hintOptions}
        >
          <input
            placeholder="Type voyage name here..."
            className="w-full p-4 bg-white bg-opacity-90"
            onChange={(e) => setQuery(e.target.value)}
          />
        </Hint>
      </div>

      {imageLoaded &&
        guessedVoyage &&
        guessedVoyage.departures.length === 0 && (
          <h4 className="mb-2">
            Unfortunately, this voyage has no availability. Please try another.
          </h4>
        )}
    </div>
  );
};

export default VoyageSelector;
