import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface PostData {
  slug: string;
  [key: string]: any;
}

const postsDirectory = path.join(process.cwd(), 'posts');

const readPostFile = (slug: string): PostData => {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);

  return {
    slug,
    ...data,
  };
};

const generatePosts = (postSlugs: string[]): PostData[] => {
  return postSlugs
    .map((slug) => readPostFile(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
};

export function getSortedPostsData(): PostData[] {
  const postSlugs = getAllPostSlugs();
  return generatePosts(postSlugs);
}

export function getPostData(slug: string): PostData {
  return readPostFile(slug);
}

export function getAllPostSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
}

export function getAllPostParams(): { params: { slug: string } }[] {
  const postSlugs = getAllPostSlugs();

  return postSlugs.map((slug) => ({
    params: {
      slug,
    },
  }));
}
