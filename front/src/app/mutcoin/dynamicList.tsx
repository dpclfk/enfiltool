"use client";

import { onlyInteger } from "@/lib/input-number";
import { RegionalTradeData, tradeAtom } from "@/lib/trade-atom";
import { useAtom } from "jotai";
import { Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";

const initialData: RegionalTradeData = {
  buy: { price: 0, quantity: 0 },
  sell: [{ price: 0, quantity: 0 }],
};

export default function DynamicList({ listId }: { listId: number }) {
  const [allData, setAllData] = useAtom(tradeAtom);
  const [isMounted, setIsMounted] = useState(false);
  const inputClassName =
    "px-2 py-1 w-full bg-zinc-100 dark:bg-gray-800 text-end rounded-sm";
  const inputParentClassName = "border col-span-2 px-1";

  // 브라우저에 마운트된 직후에만 true가 됨
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const items = allData[listId] ?? initialData;

  const updateBuy = (value: number, field: "price" | "quantity") => {
    setAllData((prev) => ({
      ...prev,
      [listId]: {
        ...prev[listId],
        buy: {
          ...prev[listId].buy,
          [field]: value,
        },
      },
    }));
  };

  const updateSell = (
    index: number,
    value: number,
    field: "price" | "quantity",
  ) => {
    setAllData((prev) => ({
      ...prev,
      [listId]: {
        ...prev[listId],
        sell: prev[listId].sell.map((item, idx) =>
          idx === index ? { ...item, [field]: value } : item,
        ),
      },
    }));
  };

  const addSellRow = () => {
    setAllData((prev) => ({
      ...prev,
      [listId]: {
        ...prev[listId],
        sell: [...prev[listId].sell, { price: 0, quantity: 0 }],
      },
    }));
  };

  const deleteSellRow = (deleteIndex: number) => {
    setAllData((prev) => ({
      ...prev,
      [listId]: {
        ...prev[listId],
        sell: prev[listId].sell.filter((_, index) => index !== deleteIndex),
      },
    }));
  };

  if (!isMounted) {
    return <div className="flex items-center justify-center">로딩중</div>;
  }

  return (
    <>
      <div className="grid grid-cols-6 border-b border-red-300 mb-1 pb-1">
        <p className="flex items-center">판매 :</p>
        <div className={`${inputParentClassName}`}>
          <input
            className={`${inputClassName}`}
            type="number"
            value={
              items.buy.price || items.buy.price !== 0 ? items.buy.price : ""
            }
            onChange={(e) => {
              updateBuy(onlyInteger(e.target.value), "price");
            }}
          />
        </div>
        <div className={`${inputParentClassName}`}>
          <input
            className={`${inputClassName}`}
            type="number"
            value={
              items.buy.quantity || items.buy.quantity !== 0
                ? items.buy.quantity
                : ""
            }
            onChange={(e) => {
              updateBuy(onlyInteger(e.target.value), "quantity");
            }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {items.sell.map((value, index) => (
          <div key={`${listId}-${index}`} className="flex items-center gap-2">
            <div className="flex items-center gap-2 w-full">
              <div className="grid grid-cols-6">
                <p className="flex items-center">구매 :</p>
                <div className={`${inputParentClassName}`}>
                  <input
                    className={`${inputClassName}`}
                    type="number"
                    value={value.price || value.price !== 0 ? value.price : ""}
                    onChange={(e) => {
                      updateSell(index, onlyInteger(e.target.value), "price");
                    }}
                  />
                </div>
                <div className={`${inputParentClassName}`}>
                  {/* <input type="number" className={`${inputClassName}`} /> */}
                  <input
                    className={`${inputClassName}`}
                    type="number"
                    value={
                      value.quantity || value.quantity !== 0
                        ? value.quantity
                        : ""
                    }
                    onChange={(e) => {
                      updateSell(
                        index,
                        onlyInteger(e.target.value),
                        "quantity",
                      );
                    }}
                  />
                </div>
                <div className="bg-red-500 w-8 h-8 py-1 flex items-center justify-center mx-auto rounded-sm hover:bg-red-700 hover:dark:bg-red-300">
                  <Trash2Icon onClick={() => deleteSellRow(index)} />
                </div>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={() => addSellRow()}
          className="bg-blue-500 text-white px-2 rounded hover:bg-blue-700 hover:dark:bg-blue-300"
        >
          +
        </button>
      </div>
    </>
  );
}
