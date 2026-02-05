"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 마운트 후에만 UI를 그리기
  useEffect(() => {
    setMounted(true);
  }, []);

  const Item = ({
    t,
    Icon,
    label,
  }: {
    t: string;
    Icon: any;
    label: string;
  }) => (
    <DropdownMenuItem
      onClick={() => setTheme(t)}
      className="flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <Icon width={14} /> {label}
      </div>
      {theme === t && <Check />}
    </DropdownMenuItem>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:shadow-md focus-visible:ring-0 h-[3rem] w-[3rem]"
        >
          {mounted ? (
            resolvedTheme === "dark" ? (
              <Moon />
            ) : (
              <Sun />
            )
          ) : (
            <div className="w-4 h-4" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Item t="light" label="Light" Icon={Sun} />
        <Item t="dark" label="Dark" Icon={Moon} />
        <Item t="system" label="System" Icon={Monitor} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
