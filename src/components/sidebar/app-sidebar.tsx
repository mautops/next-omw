"use client";

import * as React from "react";
import {
  ArrowUpDown,
  Bell,
  Bot,
  ChartColumnIncreasing,
  Coffee,
  Command,
  Cpu,
  Frame,
  MessageCircleOff,
  Siren,
} from "lucide-react";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavProjects } from "@/components/sidebar/nav-projects";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ThemeToggle } from "../utils/theme";
import { NavHeader } from "./nav-header";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  header: {
    name: "Oh My Call",
    plan: "Manage Your Alerts",
    logo: Siren,
  },
  projects: [
    {
      name: "我的告警",
      url: "/alerts/my",
      icon: Frame,
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: Command,
      isActive: true,
      items: [
        {
          title: "全局概览",
          url: "/dashboard/overview",
          icon: Coffee,
        },
        {
          title: "排行榜",
          url: "/dashboard/ranking",
          icon: ChartColumnIncreasing,
        },
        {
          title: "核心指标",
          url: "/dashboard/metrics",
          icon: Cpu,
        },
      ],
    },
    {
      title: "RuleEngine",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "沉默规则",
          url: "/rules/mute",
          icon: MessageCircleOff,
        },
        {
          title: "订阅规则",
          url: "/rules/subscription",
          icon: Bell,
        },
        {
          title: "收敛规则",
          url: "/rules/convergence",
          icon: ArrowUpDown,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavHeader header={data.header} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <ThemeToggle />
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
