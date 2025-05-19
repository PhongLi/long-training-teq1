import iconBackend from "@/assets/iconBackend.svg";
import JobItem from "@/components/atom/JobItem";
import type { Story, StoryDefault } from "@ladle/react";

type JobItemProps = {
  title: string;
  type: "Full-time" | "Part-time" | "Contract";
  icon: string;
  href: string;
};

export default {
  title: "Atoms/JobItem",
  args: {
    title: "Backend Developer",
    type: "Full-time",
    icon: iconBackend,
    href: "/career/back-end-developer-golang/",
  },
  argTypes: {
    type: {
      options: ["Full-time", "Part-time", "Contract"],
      control: { type: "inline-radio" },
    },
  },
} satisfies StoryDefault<JobItemProps>;

export const Single: Story<JobItemProps> = (args) => <JobItem {...args} />;
