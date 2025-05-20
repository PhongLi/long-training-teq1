import Footer from "@/components/organisms/Footer";
import type { Story, StoryDefault } from "@ladle/react";

export default {
  title: "Organisms",
} satisfies StoryDefault;

export const FooterStory: Story = () => <Footer />;

FooterStory.meta = {
  iframed: true,
};
FooterStory.storyName = "Footer";
