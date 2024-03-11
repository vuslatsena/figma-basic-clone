"use client";

import { useOthers } from "@/liveblocks.config";

export function CollaborativeApp() {
  const others = useOthers();
  const userCount = others.length;
  return <div> There are {userCount} others user(s) online </div>;
}
