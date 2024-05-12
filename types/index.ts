export type Post = {
  title: string;
  date: string;
  slug: string;
  content: string;
  timeToRead: number;
  summary?: string;
  draft?: boolean;
  tags?: string[];
};
