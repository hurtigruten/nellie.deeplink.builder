import type { NextApiRequest, NextApiResponse } from "next";
import { getAllVoyages, OverviewVoyage } from "../../api/getAllVoyages";
import pickFirst from "../../util/pickFirst";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OverviewVoyage[]>
) {
  const locale = pickFirst(req.query.locale);
  const voyages = await getAllVoyages(locale);
  res.json(voyages);
}
