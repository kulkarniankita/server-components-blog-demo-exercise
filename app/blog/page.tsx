import { Tag } from '@/components/Tags';
import CardList from '@/components/card-list';
import { getSortedPostsData } from '@/lib/posts';

export default async function Page() {
  const data = getSortedPostsData();

  return (
    <div className="border-pink-600 border-solid border-spacing-4 border-2 ">
      <Tag twClass="bg-pink-200">React Server component: Page</Tag>

      <div className="m-2 py-4 px-1 lg:px-12">
        <h1 className="text-xl">Blog Posts!</h1>
        <div className="py-2"></div>
        <CardList data={data} />
      </div>
    </div>
  );
}
