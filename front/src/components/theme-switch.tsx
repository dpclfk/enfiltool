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

export function ThemeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme();

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
          className="hover:shadow-md focus-visible:ring-0"
        >
          {resolvedTheme === "dark" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
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
