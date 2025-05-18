import type { FC } from "react";

import iconAccountsHub from "@/assets/iconAccountsHub.svg";
import { cn } from "@/utils/common";

interface Product {
  id: string;
  name: string;
  icon: string;
}

interface ProductSelectorProps {
  className?: string;
  selectedProduct?: string;
  onSelect?: (productId: string) => void;
}

const products: Product[] = [
  {
    id: "eazymock",
    name: "EazyMock",
    icon: iconAccountsHub,
  },
  {
    id: "offwork",
    name: "Offwork",
    icon: iconAccountsHub,
  },
  {
    id: "accountshub",
    name: "AccountsHub",
    icon: iconAccountsHub,
  },
  {
    id: "recruithub",
    name: "RecruitHub",
    icon: iconAccountsHub,
  },
  {
    id: "review360",
    name: "Review360",
    icon: iconAccountsHub,
  },
  {
    id: "eazyprocess",
    name: "EazyProcess",
    icon: iconAccountsHub,
  },
];

const ProductSelector: FC<ProductSelectorProps> = ({
  className = "",
  selectedProduct = "eazymock",
  onSelect,
}) => {
  const selectedIndex = products.findIndex((p) => p.id === selectedProduct);
  const translateX = selectedIndex >= 0 ? `${selectedIndex * 100}%` : "0";

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "no-scrollbar relative h-24 overflow-x-auto border border-solid border-gray-180 bg-gray-130"
        )}
      >
        <div
          className={cn(
            "relative mx-auto flex h-full w-fit items-center justify-center"
          )}
        >
          {/* White background indicator */}
          <div
            className={cn(
              "absolute left-0 z-10 h-full w-[11.1875rem] cursor-pointer bg-white ",
              "transition-all duration-200 ease-in-out"
            )}
            style={{ transform: `translateX(${translateX})` }}
          />

          {/* Product items */}
          {products.map((product) => (
            <div
              key={product.id}
              className={cn(
                "z-20 flex h-full min-w-[11.1875rem] cursor-pointer items-center justify-center"
              )}
              onClick={() => onSelect?.(product.id)}
            >
              <div className={cn("flex flex-col gap-[1.16rem]")}>
                <div>
                  <img
                    draggable="false"
                    className={cn("mx-auto h-full object-cover", {
                      grayscale: selectedProduct !== product.id,
                    })}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    src={product.icon}
                  />
                </div>
                <p
                  className={cn("text-lg text-gray-395", {
                    "font-bold text-gray-800": selectedProduct === product.id,
                  })}
                >
                  {product.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSelector;
