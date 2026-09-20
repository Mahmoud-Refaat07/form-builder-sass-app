import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return <div className="flex w-full grow mx-auto">{children}</div>;
}
