import SectionTitle from "@/components/atom/SectionTitle";
import type { Story, StoryDefault } from "@ladle/react";

type SectionTitleProps = {
  title: string;
  description: string;
};

export default {
  title: "Atoms",
  args: {
    title: "Section Title",
    description:
      "We have more than 5 years of expertise offering financial service solutions, and assisting customers in approaching circumstances flexibly and proactively.",
  },
} satisfies StoryDefault<SectionTitleProps>;

export const SectionTitleStory: Story<SectionTitleProps> = ({
  title,
  description,
}) => <SectionTitle title={title} description={description} />;

SectionTitleStory.storyName = "SectionTitle";
