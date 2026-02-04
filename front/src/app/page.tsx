import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Noto_Serif_KR } from "next/font/google";

const nototest = Noto_Serif_KR({
  weight: ["700"],
});
const buttonbase = `${nototest.className} h-10 px-4 hover:shadow-md focus-visible:ring-0 text-base`;

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-[url(/Endfield_intro.webp)] dark:bg-[url(/Dijiang_intro.webp)] bg-cover bg-center bg-no-repeat bg-zinc-100 dark:bg-gray-800">
      <main className="grid grid-cols-2 w-[35%] min-w-[31rem] gap-8 pb-[4rem] content-start">
        <Button
          asChild
          variant="ghost"
          className={`${buttonbase} bg-lime-200 hover:bg-lime-400 dark:bg-lime-800 dark:hover:bg-lime-600`}
        >
          <Link href="/mutcoin">지역 변동물자 계산기</Link>
        </Button>

        <Button
          asChild
          variant="ghost"
          className={`${buttonbase} bg-indigo-200 hover:bg-indigo-400 dark:bg-indigo-800 dark:hover:bg-indigo-600`}
        >
          <Link href="/factory">공장 최적화 계산기</Link>
        </Button>

        <Button
          asChild
          variant="ghost"
          className={`${buttonbase} bg-indigo-200 hover:bg-indigo-400 dark:bg-indigo-800 dark:hover:bg-indigo-600`}
        >
          <Link href="/weapon">무기 기질 확인</Link>
        </Button>
      </main>
    </div>
  );
}
