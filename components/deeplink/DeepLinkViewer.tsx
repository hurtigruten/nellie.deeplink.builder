import { useEffect, useState } from "react";
import { Deeplink } from "../../util/deeplink";
import IconButton from "../IconButton";
import { ClipboardLine } from "../icons/Document";
import { ButtonModes } from "../inputs/Button";
import TextInput from "../inputs/TextInput";

const DeepLinkViewer = ({ deeplink }: { deeplink: Deeplink | null }) => {
  const [encodedLink, setEncodedLink] = useState("");

  useEffect(() => {
    const getEncodedLink = async () => {
      const encoded = await fetch("/api/encodeDeepLink", {
        method: "POST",
        body: JSON.stringify(deeplink),
      });

      return await encoded.json();
    };

    getEncodedLink().then((link) => setEncodedLink(link));
  }, [deeplink]);

  if (!deeplink) {
    return <h2>No deeplink supplied.</h2>;
  }

  const baseUrl = `http://www.hurtigruten.com/${deeplink.locale}/expeditions/dl/`;

  return (
    <div className="flex items-center gap-2">
      <h2 className="max-w-[400px] whitespace-nowrap mb-4">Your deeplink</h2>
      <TextInput
        className="min-w-[550px]"
        value={`${baseUrl}${encodedLink}`}
        disabled
      />
      <IconButton
        buttonColor="transparent"
        size="large"
        title="copy"
        mode={ButtonModes.flat}
        icon={ClipboardLine}
        onClick={() =>
          navigator.clipboard.writeText(`${baseUrl}${encodedLink}`)
        }
      />
    </div>
  );
};

export default DeepLinkViewer;
