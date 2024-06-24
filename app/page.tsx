import Home from "@/components/Home";
import Error from "./error";
import RoomDetails from "@/components/room/RoomDetails";
import { title } from "process";
import { Bangers } from "next/font/google";
export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'HomePage - BookIT'
}

const getRooms = async () => {
  const res = await fetch(`${process.env.API_URL}/api/rooms`);
  return res.json()
};

export default async function HomePage() {
  const data = await getRooms();
  if (data?.message){
    return <Error error={data} />;
  }
  return <Home data={data} />;

}

