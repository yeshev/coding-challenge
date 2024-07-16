"use client";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { getBidDetails } from "@/modules/bid/api/get-bid-details";

import {
  BidDetailsRequestData,
  BidQueryKeys,
} from "@/modules/bid/types/bid.types";

export const useGetBidDetails = (
  data: BidDetailsRequestData,
  options?: UseQueryOptions<unknown, unknown>,
) => {
  return useQuery<unknown, unknown>({
    queryKey: [BidQueryKeys.GET_BID_DETAILS, data],
    queryFn: () => getBidDetails(data),
    ...options,
  });
};
