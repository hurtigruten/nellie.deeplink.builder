import { useEffect, useState } from "react";

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

    console.log(deeplink);
    getEncodedLink().then((link) => setEncodedLink(link));
  }, [deeplink]);

  console.log(deeplink);
  if (!deeplink) {
    return <h2>No deeplink supplied.</h2>;
  }

  const baseUrl = "http://localhost:3000/expeditions/dl/";

  return (
    <div className="w-[400px]">
      <h2 className="max-w-[400px] mb-4">Your deeplink</h2>
      <p className="break-words">
        Click <a href={`${baseUrl}${encodedLink}`}>here</a> to access your
        deeplink.
      </p>
    </div>
  );
};

export default DeepLinkViewer;
