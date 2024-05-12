import siteMetadata from '@/data/siteMetadata';
import { getDirs, getPost } from '@/utils/services';

import MDXRemote from './MDXRemote';
import './markdown.css';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const dirs = await getDirs();
  return dirs.map((dir) => ({ slug: dir }));
}

export async function generateMetadata({ params }: Props) {
  const post = await getPost(params.slug);
  const { title, date, summary } = post;

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: new Date(date).toISOString(),
      modifiedTime: new Date(date).toISOString(),
      url: './',
      // images: [],
      authors: [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: summary,
      imageList: [],
    },
  };
}

export default async function Page(props: Props) {
  const post = await getPost(props.params.slug);
  const { title, date, timeToRead, content } = post;

  return (
    <article>
      <header className="space-y-1 border-b border-gray-200 pb-10 dark:border-gray-700">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          {title}
        </h1>
        <dl className="flex gap-2">
          <dt className="sr-only">Published on</dt>
          <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
            <time dateTime={date}>
              {new Date(date).toLocaleDateString('en', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </dd>
          <dt className="sr-only">Separator</dt>
          <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">{'•'}</dd>
          <dt className="sr-only">Reading time</dt>
          <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
            {`${timeToRead} min read`}
          </dd>
        </dl>
      </header>
      <div className="markdown my-10">
        <MDXRemote content={content} />
      </div>
    </article>
  );
}
