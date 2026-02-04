import { Nanum_Brush_Script } from "next/font/google";
import { ThemeSwitch } from "./theme-switch";

const nanum_brush = Nanum_Brush_Script({
  weight: "400",
});

export default function GNB() {
  return (
    <div className="sticky top-0 bg-zinc-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-800">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <div className={`${nanum_brush.className} h-[4rem] flex items-center`}>
          <p className="text-4xl">엔드필드 tool</p>
        </div>
        <ThemeSwitch></ThemeSwitch>
      </div>
    </div>
  );
}
