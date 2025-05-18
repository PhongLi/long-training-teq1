import teamFE from "@/assets/images/teamFE.webp";
import teamMB from "@/assets/images/teamMB.webp";
import SolutionItem from "@/components/atom/SolutionItem";
import type { Story, StoryDefault } from "@ladle/react";

type SolutionItemProps = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    className?: string;
  };
  active: boolean;
};

export default {
  title: "Atoms",
  args: {
    title: "Frontend",
    description:
      "Apply new state-in-the-art Technologies including ReactJS, VueJS, etc. for the best UI/UX",
    image: {
      src: teamFE,
      alt: "frontend",
      className: "max-w-[80%]",
    },
  },
  argTypes: {
    active: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies StoryDefault<SolutionItemProps>;

export const SolutionItemStory: Story<SolutionItemProps> = ({
  title,
  description,
  image,
  active,
}) => (
  <div className="flex flex-row gap-6">
    <SolutionItem
      title={title}
      description={description}
      image={image}
      active={active}
    />
    <SolutionItem
      title="Back end"
      description={
        "Apply new state-in-the-art Technologies including ReactJS, VueJS, etc. for the best UI/UX"
      }
      image={{
        src: teamMB,
        alt: "backend",
        className: "max-w-full",
      }}
      active={active}
    />
  </div>
);
SolutionItemStory.storyName = "SolutionItem";
