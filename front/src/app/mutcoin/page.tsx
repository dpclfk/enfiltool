import { getRegionalProducts } from "@/lib/regionalProducts";
import DynamicList from "./dynamicList";

export default async function Mutcoin() {
  const data = await getRegionalProducts();
  return (
    <div>
      {data.data.map((item) => (
        <div key={`region-${item.region_name}`} className="w-[90%] mx-auto">
          <p className="text-4xl pt-4 pb-2">{item.region_name}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-max items-start">
            {item.regional_product_list.map((list) => (
              <div
                key={`list-${list.id}`}
                className="bg-zinc-200 dark:bg-gray-700 px-2 py-2 space-y-2"
              >
                <div>
                  <p className="truncate">{list.regional_product_name}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="whitespace-nowrap">판매 가격:</p>
                  <input className="flex-1 border px-2 py-1 w-full bg-zinc-100 dark:bg-gray-800" />
                </div>
                <DynamicList listId={list.id} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
