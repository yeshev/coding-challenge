import { BidDetailsRequestData } from "@/modules/bid/types/bid.types";

export const getBidDetails = async (
  data: BidDetailsRequestData,
): Promise<unknown> => {
  const response = await fetch(
    "https://emma.maryland.gov/page.aspx/en/rfp/request_browse_public",
    { mode: "no-cors" },
  );

  const result = await response.json();

  console.log({ result, data });

  return result as unknown;
};
