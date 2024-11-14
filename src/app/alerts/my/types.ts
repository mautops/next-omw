export interface Payment {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
}

export interface JobType {
  label: string;
  value: string;
}

export const JobTypes: JobType[] = [
  { label: "主机告警", value: "node" },
  { label: "HTTP告警", value: "http" },
  { label: "硬件告警", value: "dem" },
  { label: "ICMP 告警", value: "icmp" },
];
