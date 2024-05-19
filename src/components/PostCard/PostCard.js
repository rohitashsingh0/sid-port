import Link from 'next/link';

import { postPathBySlug, sanitizeExcerpt } from 'lib/posts';

import Metadata from 'components/Metadata';

import { FaMapPin } from 'react-icons/fa';
import styles from './PostCard.module.scss';
import Image from 'next/image';

const PostCard = ({ post, options = {} }) => {
  const { title, excerpt, slug, date, author, categories, isSticky = false } = post;
  const { excludeMetadata = [] } = options;

  console.log(post);
  const metadata = {};

  if (!excludeMetadata.includes('author')) {
    metadata.author = author;
  }

  if (!excludeMetadata.includes('date')) {
    metadata.date = date;
  }

  if (!excludeMetadata.includes('categories')) {
    metadata.categories = categories;
  }

  let postCardStyle = styles.postCard;

  if (isSticky) {
    postCardStyle = `${postCardStyle} ${styles.postCardSticky}`;
  }

  return (
    <>
      <div key={post.id} className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3">
        <div className="bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative">
          <Link href="/blogs/read/4">
            <Image
              src={post.imgSrc || '/images/articles/article2.png'}
              alt={post.title}
              width={389}
              height={262}
              className="inline-block m-auto"
            />
          </Link>

          {/* <Link href="/">
            <h3 className="absolute bg-blue text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full article-img">
              {item.time} read
            </h3>
          </Link> */}

          <Link href={postPathBySlug(slug)}>
            <h3
              className="text-2xl font-bold pt-6 text-black"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />
          </Link>

          {excerpt && (
            <div
              className="text-base font-normal pb-1 opacity-75"
              dangerouslySetInnerHTML={{
                __html: sanitizeExcerpt(excerpt),
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default PostCard;
