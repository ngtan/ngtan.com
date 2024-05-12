import {
  MDXRemote as NextMDXRemote,
  MDXRemoteProps as NextMDXRemoteProps,
} from 'next-mdx-remote/rsc';
import Link from 'next/link';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkSmartpants from 'remark-smartypants';

type MDXRemoteProps = {
  content: NextMDXRemoteProps['source'];
};

export default function MDXRemote({ content }: MDXRemoteProps) {
  return (
    <NextMDXRemote
      source={content}
      components={{
        // @ts-ignore
        a: (props) => <Link target="_blank" {...props} />,
      }}
      options={{
        mdxOptions: {
          useDynamicImport: true,
          // @ts-ignore
          remarkPlugins: [[remarkSmartpants]],
          // @ts-ignore
          rehypePlugins: [[rehypePrettyCode]],
        },
      }}
    />
  );
}
