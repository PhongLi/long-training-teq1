import ValueItem from "@/components/atom/ValueItem";
import type { Story, StoryDefault } from "@ladle/react";

type ValueItemProps = {
  value: string;
  variant: "creativity" | "intellect" | "dedication";
};

export default {
  title: "Atoms",
  args: {
    value: "Dedication",
    variant: "dedication",
  },
  argTypes: {
    variant: {
      options: ["creativity", "intellect", "dedication"],
      control: { type: "inline-radio" },
    },
  },
} satisfies StoryDefault<ValueItemProps>;

export const ValueItemStory: Story<ValueItemProps> = ({ value, variant }) => (
  <ValueItem value={value} variant={variant} className="w-fit" />
);

ValueItemStory.storyName = "ValueItem";
