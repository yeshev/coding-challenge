import { BidDetails, BidForm } from "@/modules/bid/containers";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="max mx-auto flex min-h-screen w-full flex-col items-center gap-6 px-4 py-6 md:max-w-4xl md:p-16">
      <Suspense>
        <BidForm />
        <BidDetails />
      </Suspense>
    </main>
  );
}
