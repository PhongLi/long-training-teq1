import TimelineProcess from "@/components/atom/TimelineProcess";
import type { Story, StoryDefault } from "@ladle/react";

type TimelineProcessProps = {
  className?: string;
};

export default {
  title: "Atoms",
} satisfies StoryDefault<TimelineProcessProps>;

export const Default: Story<TimelineProcessProps> = () => (
  <div className="p-8">
    <TimelineProcess />
  </div>
);

Default.storyName = "TimelineProcess";
