import { pgFetch, ServerError } from "../util/http";

export const getCabin = async (
  quoteId: string,
  voyageId: string
): Promise<TResponseWithErrorState<PG.Response.Cabin.TRootObject>> => {
  if (quoteId && voyageId) {
    try {
      const res = await pgFetch<PG.Response.Cabin.TRootObject>(
        `/Search/Cabin/${quoteId}/${voyageId}`
      );

      return {
        data: res,
        expired: false,
        error: false,
      };
    } catch (e) {
      // PG returns 500 error with a specific text for expired quotes
      console.error(e);
      if (e instanceof ServerError) {
        if (e.message.includes("Unable to locate an item of type")) {
          return {
            expired: true,
            error: true,
          };
        }
      }
    }
  }

  return {
    expired: false,
    error: true,
  };
};
