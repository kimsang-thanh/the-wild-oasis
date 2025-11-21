import Cabins from "@/components/cabins/Cabins";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cabins",
};

export default async function Page() {
  return (
    <div>
      {/* <Suspense fallback={<Loading />}> */}
      <Cabins />
      {/* </Suspense> */}
    </div>
  );
}
