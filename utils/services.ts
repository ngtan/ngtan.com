import { Post } from '@/types';
import { readFile, readdir } from 'fs/promises';
import matter from 'gray-matter';

import getTimeToRead from './getTimeToRead';

export async function getDirs(): Promise<string[]> {
  const entries = await readdir('./public/blog/', { withFileTypes: true });
  const dirs = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);

  return dirs;
}

export async function getFileContent(slug: string): Promise<string> {
  const fileContent = await readFile('./public/blog/' + slug + '/index.md', 'utf8');

  return fileContent;
}

export async function getPosts(): Promise<Omit<Post, 'content'>[]> {
  const dirs = await getDirs();
  const fileContents = await Promise.all(dirs.map((dir) => getFileContent(dir)));

  const posts = dirs
    .map((slug, i) => {
      const fileContent = fileContents[i];
      const { data, content } = matter(fileContent);

      return {
        ...data,
        slug,
        timeToRead: getTimeToRead(content),
      } as Post;
    })
    .filter((post) => !post.draft);

  posts.sort((a, b) => {
    return Date.parse(a.date) < Date.parse(b.date) ? 1 : -1;
  });

  return posts;
}

export async function getPost(slug: string): Promise<Post> {
  const fileContent = await getFileContent(slug);
  const { data, content } = matter(fileContent);

  return {
    ...data,
    slug,
    timeToRead: getTimeToRead(content),
    content,
  } as Post;
}
