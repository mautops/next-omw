import { type Metadata } from "next";
import DataTable from "./data-table";
import { columns } from "./columns";
import { data } from "./data";

export const metadata: Metadata = {
  title: "Alerts",
  description: "Alerts",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function Dashboard() {
  return <DataTable columns={columns} data={data} />;
}
