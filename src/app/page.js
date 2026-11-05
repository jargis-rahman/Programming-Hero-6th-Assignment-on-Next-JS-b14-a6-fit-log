

import AllWorks from "@/components/Workouts";
import Banner from "@/components/Banner";
import { getAllWorks } from "@/lib/api";
import Image from "next/image";

export default async function Home() {
  const data = await getAllWorks();
  const works = data;
  return (
    <div>
      <Banner></Banner>
      <AllWorks works={works}></AllWorks>
    </div>
  );
}
