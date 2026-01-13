import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  return <h1>Welcome to your Dashboard</h1>;
}
