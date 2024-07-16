"use client";

import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Button, Card, Input } from "@/modules/core/components";
import { useQueryParamState } from "@/modules/core/hooks/use-query-param-state";
import { BID_QUERY_PARAMS } from "@/modules/bid/constants";

export const BidForm: FC = () => {
  const bidIdQuery = useQueryParamState(BID_QUERY_PARAMS.bidId, "");

  const [value, setValue] = useState<string>(bidIdQuery.queryData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    bidIdQuery.redirectWithQuery(value);
  };

  return (
    <Card className="w-full">
      <h2 className="mb-2 font-bold">Bid Dashboard</h2>
      <form
        onSubmit={handleSubmit}
        className="mb-2 flex w-full items-center gap-3"
      >
        <Input
          placeholder="Enter the bid id"
          value={value}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
      <span className="self-center text-sm text-gray-400">
        Enter a bid ID to view the details
      </span>
    </Card>
  );
};
