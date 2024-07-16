"use client";

import { FC } from "react";
import { useQueryParamState } from "@/modules/core/hooks/use-query-param-state";
import { BID_QUERY_PARAMS } from "@/modules/bid/constants";
import { useGetBidDetails } from "@/modules/bid/hooks/use-get-bid-details";
import { Card } from "@/modules/core/components";

export const BidDetails: FC = () => {
  const bidIdQuery = useQueryParamState(BID_QUERY_PARAMS.bidId, "");

  const getBidDetails = useGetBidDetails(
    { bidId: bidIdQuery.queryData },
    { enabled: !!bidIdQuery.queryData },
  );

  if (getBidDetails.isLoading && bidIdQuery.queryData) {
    return <div>Loading...</div>;
  }

  if (!getBidDetails.data) return null;

  return (
    <Card className="grid-templa grid w-full grid-cols-3 gap-x-3 gap-y-5">
      <div className="flex flex-col">
        <h4 className="font-bold">Title</h4>
        <span className="text-sm">value</span>
      </div>
      <div className="flex flex-col">
        <h4 className="font-bold">ID</h4>
        <span className="text-sm">value</span>
      </div>
      <div className="flex flex-col">
        <h4 className="font-bold">Due / Close Date (EST)</h4>
        <span className="text-sm">value</span>
      </div>
      <div className="flex flex-col">
        <h4 className="font-bold">Solicitation Summary</h4>
        <span className="text-sm">value</span>
      </div>
      <div className="flex flex-col">
        <h4 className="font-bold">Main Category</h4>
        <span className="text-sm">value</span>
      </div>
      <div className="flex flex-col">
        <h4 className="font-bold">Solicitation Type</h4>
        <span className="text-sm">value</span>
      </div>
      <div className="col-span-3 flex flex-col">
        <h4 className="font-bold">Attachements</h4>
        <span className="text-sm">value</span>
      </div>
    </Card>
  );
};
