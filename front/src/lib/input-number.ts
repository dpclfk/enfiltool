export const onlyInteger = (value: string): number => {
  // 숫자만 남기고 제고
  const number = value.replace(/[^0-9]/g, "");

  // 빈 값이면 0으로, 아니면 숫자로 변환
  return number === "" ? 0 : Number(number);
};
