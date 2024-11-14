import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function Dashboard() {
  return (
    <iframe
      src="https://grafana.cvte.com/d/cdxc854dyoa9sf/e68e92-e8a18c-e6a69c?orgId=1&kiosk=tv"
      className="h-full w-full"
    />
  );
}
