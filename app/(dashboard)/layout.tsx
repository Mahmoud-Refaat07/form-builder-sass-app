import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { SignIn, UserButton } from "@clerk/nextjs";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex flex-col min-h-screen min-w-full max-h-screen 
          bg-[#01030a]
            dark:bg-background"
    >
      <nav className="flex justify-between items-center border-b border-border h-15 px-4 py-2">
        <div className="min-w-47.5">
          <Logo />
        </div>
        <div className="flex w-full gap-4 justify-end items-center ">
          <ThemeSwitcher />
          <UserButton afterSwitchSessionUrl="./sign-in" />
        </div>
      </nav>
      <main className="flex w-full grow"> {children}</main>
    </div>
  );
}
