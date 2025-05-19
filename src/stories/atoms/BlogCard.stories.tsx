import BlogCard from "@/components/atom/BlogCard";
import type { Story, StoryDefault } from "@ladle/react";

type BlogCardProps = {
  title: string;
  date: string;
  image: string;
  href: string;
};

const sampleImage =
  "https://teqnological.asia/uploads/medium_2025_4_4dd55018a3.jpg";

export default {
  title: "Atoms/BlogCard",
  args: {
    title: "Happy international women's day!",
    date: "15/03/2023",
    image: sampleImage,
    href: "/news/womens-day-2023/",
  },
} satisfies StoryDefault<BlogCardProps>;

export const Single: Story<BlogCardProps> = (args) => <BlogCard {...args} />;
