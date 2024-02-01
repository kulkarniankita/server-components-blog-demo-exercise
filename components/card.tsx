'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tag } from './Tags';
import Date from './date';

type CardProps = {
  slug: string;
  link: string;
  date?: string;
  title?: string;
  key: string;
  imgUrl?: string;
};

export default function Card({
  slug,
  date,
  title,
  link,
  imgUrl = '/card-bg.jpg',
}: CardProps) {
  const [imgSrc, setImgSrc] = useState('/card-bg.jpg');

  useEffect(() => {
    setImgSrc(imgUrl);
  }, []);

  const handleError = () => {
    setImgSrc('/card-bg.jpg');
  };

  return (
    <div
      className={`border-gray-700 border-solid border-spacing-4 border-2 m-2 hover:bg-gray-200 bg-white p-2 lg:p-6`}
    >
      <Tag twClass="bg-pink-100">React Client Component: Card component</Tag>
      <Link href={link}>
        <li
          className={`flex flex-col mb-4  lg:px-6 dark:bg-gray-900 text-black dark:text-white hover:cursor-pointer pb-2 overflow-hidden hover:text-gray-900  mr-2 glass-list`}
          key={slug}
        >
          <>
            <Image
              src={imgSrc}
              alt="image"
              width={400}
              height={100}
              onError={handleError}
              priority={true}
              className="rounded-xl py-4 w-auto h-auto"
            />
            <h2 className="outline-none mb-0 pb-2 text-lg lg:text-xl">
              {title}
            </h2>
            {date && (
              <span className={'text-gray-951 text-xs flex flex-col py-2'}>
                <Tag twClass="bg-pink-200">React Server component: Date</Tag>
                <Date value={date} />
              </span>
            )}
          </>
        </li>
      </Link>
    </div>
  );
}
