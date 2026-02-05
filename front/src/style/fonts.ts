import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import { Nanum_Brush_Script } from "next/font/google";

export const notoSansKr = Noto_Sans_KR({
  weight: ["400", "700"],
  display: "block",
  preload: true,
});

export const nanum_brush = Nanum_Brush_Script({
  weight: "400",
  display: "block",
  preload: true,
});

export const notoserifsKr = Noto_Serif_KR({
  weight: ["700"],
  display: "block",
  preload: true,
});
