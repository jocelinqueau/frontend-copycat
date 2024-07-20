'use client'

import ThemeSwitcher from "./themeSwitcher";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="absolute top-2 right-2 z-50 text-muted-foreground">
      <div className="cursor-pointer hover:text-foreground" onClick={() => router.push('/')}>home</div>
      <ThemeSwitcher />
    </nav>
  )
};

export default Nav;