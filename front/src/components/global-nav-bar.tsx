import { ThemeSwitch } from "./theme-switch";

export default function GNB() {
  return (
    <div className="sticky top-0 bg-zinc-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-800">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <div
          className={`nanum-brush-script-regular h-[3rem] flex items-center`}
        >
          <p className="text-4xl">엔드필드 tool</p>
        </div>
        <ThemeSwitch></ThemeSwitch>
      </div>
    </div>
  );
}
