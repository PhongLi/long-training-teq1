import type { FC } from "react";

import iconAccountsHub from "@/assets/iconAccountsHub.svg";
import imageEazyMock from "@/assets/images/eazyMock.webp";
import { cn } from "@/utils/common";

interface Product {
  id: string;
  name: string;
  icon: string;
  description: string;
  image?: string;
  link?: string;
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
    description:
      "Mock APIs for seamless app development and comprehensive interactions",
    image: imageEazyMock,
    link: "https://eazymock.net/",
  },
  {
    id: "offwork",
    name: "Offwork",
    icon: iconAccountsHub,
    description: "Manage your team and projects",
  },
  {
    id: "accountshub",
    name: "AccountsHub",
    icon: iconAccountsHub,
    description: "Manage your accounts and projects",
  },
  {
    id: "recruithub",
    name: "RecruitHub",
    icon: iconAccountsHub,
    description: "Manage your team and projects",
  },
  {
    id: "review360",
    name: "Review360",
    icon: iconAccountsHub,
    description: "Manage your team and projects",
  },
  {
    id: "eazyprocess",
    name: "EazyProcess",
    icon: iconAccountsHub,
    description: "Manage your team and projects",
  },
];

const ProductSelector: FC<ProductSelectorProps> = ({
  className = "",
  selectedProduct = "eazymock",
  onSelect,
}) => {
  const selectedIndex = products.findIndex((p) => p.id === selectedProduct);
  const translateX = selectedIndex >= 0 ? `${selectedIndex * 100}%` : "0";

  const selectedProductData = products[selectedIndex];
  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "no-scrollbar relative h-24 border border-solid border-gray-180 bg-gray-130"
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
      <div className={cn("relative")}>
        <div className="mt-9">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            {selectedProductData.link ? (
              <a
                href={selectedProductData.link}
                className="flex gap-2.5"
                target="_blank"
                rel="external"
              >
                <img
                  className="h-7 object-cover"
                  alt={selectedProductData.name}
                  loading="lazy"
                  decoding="async"
                  src={selectedProductData.icon}
                />
                <h4 className="text-xl font-bold text-gray-800">
                  {selectedProductData.name}
                </h4>
              </a>
            ) : (
              <div className="flex gap-2.5">
                <img
                  className="h-7 object-cover"
                  alt={selectedProductData.name}
                  loading="lazy"
                  decoding="async"
                  src={selectedProductData.icon}
                />
                <h4 className="text-xl font-bold text-gray-800">
                  {selectedProductData.name}
                </h4>
              </div>
            )}
            <span className="mx-6 hidden h-[1.8125rem] w-px bg-gray-500 md:block" />
            <p className="text-center text-base text-gray-520 md:text-lg">
              {selectedProductData.description}
            </p>
          </div>
        </div>
        <div className="mx-auto mt-6 w-full">
          {selectedProductData.image && (
            <img
              className="aspect-[1.82] w-full object-cover"
              src={selectedProductData.image}
              alt={selectedProductData.name}
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSelector;
