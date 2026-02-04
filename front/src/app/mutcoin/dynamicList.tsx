"use client";

import { useEffect, useState } from "react";

type StorageData = Record<number, number[]>;

export default function DynamicList({ listId }: { listId: number }) {
  const STORAGE_KEY = "dynamic-list";

  const [items, setItems] = useState<number[]>([]);

  // 불러오기
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      setItems([1]);
      return;
    }

    const parsed: StorageData = JSON.parse(raw);
    setItems(parsed[listId] ?? [1]);
  }, [listId]);

  // 저장
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed: StorageData = raw ? JSON.parse(raw) : {};

    parsed[listId] = items;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
  }, [items, listId]);

  const addItem = () => {
    setItems((prev) => [...prev, prev.length + 1]);
  };

  return (
    <div className="flex flex-col gap-2">
      {items.map((_, i) => (
        <div key={`${listId}-${i}`} className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <p className="whitespace-nowrap">구매 가격:</p>
            <input className="flex-1 border px-2 py-1 w-full bg-zinc-100 dark:bg-gray-800" />
          </div>
        </div>
      ))}
      <button
        onClick={() => addItem()}
        className="bg-blue-500 text-white px-2 rounded"
      >
        +
      </button>
    </div>
  );
}
