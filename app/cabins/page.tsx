import Cabins from "@/components/cabins/Cabins";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Page() {
  return (
    <div>
      {/* <Suspense fallback={<Loading />}> */}
      <Cabins />
      {/* </Suspense> */}
    </div>
  );
}
