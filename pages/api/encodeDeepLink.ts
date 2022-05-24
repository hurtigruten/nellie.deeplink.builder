import type { NextApiRequest, NextApiResponse } from "next";
import { encodeDeeplink } from "../../util/deeplink";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(400).send("Unsupported method");
  }

  const deeplink = JSON.parse(req.body);
  const encodedLink = encodeDeeplink(deeplink);
  res.json(encodedLink);
}
