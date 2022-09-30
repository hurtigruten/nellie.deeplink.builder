const { BOOKING_DOMAIN_URL } = process.env;

export const deleteQuote = async (quoteId: string) => {
  const delete_ = (url: string) =>
    fetch(url, {
      method: "DELETE",
    })
      .then((resp) => {
        if (resp.status.toString()[0] !== "2") {
          throw new Error(`${resp.status} ${resp.statusText}`);
        }
        return resp;
      })
      .then((resp) => resp.text());

  const res = await delete_(`${BOOKING_DOMAIN_URL || ""}/Api/Quote/${quoteId}`);

  return res;
};
