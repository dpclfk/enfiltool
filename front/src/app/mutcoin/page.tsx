import { getRegionalProducts } from "@/lib/regional-products";
import DynamicList from "./dynamicList";

export default async function Mutcoin() {
  const data = await getRegionalProducts();

  return (
    <div>
      {data.data.map((item) => (
        <div key={`region-${item.region_name}`} className="w-[90%] mx-auto">
          <p className="text-4xl pt-4 pb-2">{item.region_name}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4 auto-rows-max items-start">
            {item.regional_product_list.map((list) => (
              <div
                key={`list-${list.id}`}
                className="bg-zinc-200 dark:bg-gray-700 px-2 py-2 space-y-2 min-h-[12rem]"
              >
                <div className="">
                  <p className="truncate">{list.regional_product_name}</p>
                </div>
                <div className="grid grid-cols-6">
                  <div></div>
                  <p className="col-span-2 text-center">가격</p>
                  <p className="col-span-2 text-center">수량</p>
                  <p className="text-center">삭제</p>
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
