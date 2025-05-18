import HeroHome from "@/components/molecules/Hero/HeroHome";
import type { Story, StoryDefault } from "@ladle/react";

export default {
  title: "Molecules",
} satisfies StoryDefault;

export const HeroHomeStory: Story = () => <HeroHome />;

HeroHomeStory.storyName = "HeroHome";
