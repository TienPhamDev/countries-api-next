import { Button } from "../ui/button";
import { SunIcon } from "lucide-react";
import { MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { use } from "react";
const Header = () => {
  const { setTheme } = useTheme();
  return (
    <header className="flex justify-between items-center h-20 bg-[#2B3844] px-10 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.06)]">
      <h1 className="font-extrabold text-2xl">Where in the world ?</h1>
      <Button className={"text-grey-900"} variant={"outline"}>
        <SunIcon />
        Light Mode
      </Button>
    </header>
  );
};

export default Header;
