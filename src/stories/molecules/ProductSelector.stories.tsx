import { useState } from "react";

import ProductSelector from "@/components/molecules/ProductSelector";
import type { Story, StoryDefault } from "@ladle/react";

export default {
  title: "Molecules",
} satisfies StoryDefault;

export const ProductSelectorDefault: Story = () => {
  const [selectedProduct, setSelectedProduct] = useState("eazymock");

  return (
    <ProductSelector
      selectedProduct={selectedProduct}
      onSelect={setSelectedProduct}
    />
  );
};

ProductSelectorDefault.storyName = "ProductSelector";
