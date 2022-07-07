import type { NextApiRequest, NextApiResponse } from "next";
import { getVoyagesFromContentful } from "../../api/getVoyagesFromContentful";
import pickFirst from "../../util/pickFirst";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Contentful.Voyage.Overview[]>
) {
  const locale = pickFirst(req.query.locale);
  const voyages = await getVoyagesFromContentful(locale);
  res.json(voyages);
}
