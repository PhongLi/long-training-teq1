import Header from "@/components/organisms/Header";
import type { Story, StoryDefault } from "@ladle/react";

export default {
  title: "Organisms",
} satisfies StoryDefault;

export const HeaderStory: Story = () => <Header />;

HeaderStory.meta = {
  iframed: true,
};
HeaderStory.storyName = "Header";
