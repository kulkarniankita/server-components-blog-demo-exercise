import { Tag } from '@/components/Tags';
import { getPostData, getAllPostParams } from '@/lib/posts';
import Head from 'next/head';

export async function generateStaticParams() {
  return getAllPostParams();
}

async function fetchData(params: { id: string }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetchData(params);
  const { title, abstract } = data.props.postData;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          property="og:image"
          content={`http://localhost:3000/api/og?title=${title}`}
        />
      </Head>
      <Tag twClass="bg-pink-200">React Server component: Page</Tag>
      <div className="space-y-4 p-4 border-pink-600 border-solid border-spacing-4 border-2 m-4">
        <h1 className="text-2xl font-medium text-gray-900">{title}</h1>
        <p className="font-medium text-gray-800">{abstract}</p>
      </div>
    </>
  );
}
