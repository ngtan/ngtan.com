import siteMetadata from '@/data/siteMetadata';
import { getPosts } from '@/utils/services';
import Link from 'next/link';

export default async function Page() {
  const posts = await getPosts();

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Latest
        </h2>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          {siteMetadata.description}
        </p>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {posts.map((post) => {
          const { slug, date, title, summary, timeToRead } = post;
          return (
            <li key={slug} className="py-6">
              <article>
                <header>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link
                      href={`/${slug}`}
                      className="text-gray-900 hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-500"
                    >
                      {title}
                    </Link>
                  </h3>
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
                    <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
                      {'•'}
                    </dd>
                    <dt className="sr-only">Reading time</dt>
                    <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
                      {`${timeToRead} min read`}
                    </dd>
                  </dl>
                </header>
                {summary && (
                  <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
                )}
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
