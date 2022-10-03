import { NextApiRequest, NextApiResponse } from "next";

import { deleteQuote } from "../../../api/quote";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json("Unsupported method");
    return;
  }
  const { quoteId: quoteIdRaw } = req.query;
  const quoteId = Array.isArray(quoteIdRaw) ? quoteIdRaw[0] : quoteIdRaw;
  try {
    await deleteQuote(quoteId);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
}
