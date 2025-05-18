import Button from "@/components/atom/Button";
import type { Story, StoryDefault } from "@ladle/react";

type ButtonProps = {
  text: string;
  href: string;
  type: "button" | "link";
  newTab: boolean;
};

export default {
  title: "Atoms",
  args: {
    text: "Button",
    href: "https://teqnological.asia/",
  },
  argTypes: {
    type: {
      options: ["button", "link"],
      control: { type: "inline-radio" },
      defaultValue: "button",
    },
    newTab: {
      options: [true, false],
      control: { type: "inline-radio" },
      defaultValue: true,
    },
  },
} satisfies StoryDefault<ButtonProps>;

export const ButtonStory: Story<ButtonProps> = ({
  href,
  text,
  type,
  newTab,
}) => {
  if (type === "link")
    return (
      <Button
        href={href}
        as="a"
        target={newTab ? "_blank" : "_self"}
        className="max-w-fit"
      >
        {text}
      </Button>
    );
  return <Button onClick={() => alert("Clicked!")}>{text}</Button>;
};

ButtonStory.storyName = "Button";
