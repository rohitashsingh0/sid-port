import Link from 'next/link';

import { postPathBySlug, sanitizeExcerpt } from 'lib/posts';

import Image from 'next/image';

const PostCard = ({ post, options = {} }) => {
  const { title, excerpt, slug, date, author, categories } = post;
  const { excludeMetadata = [] } = options;

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

  // let postCardStyle = styles.postCard;

  // if (isSticky) {
  //   postCardStyle = `${postCardStyle} ${styles.postCardSticky}`;
  // }

  const maxTitleLength = 50;
  const maxExcerptLength = 90;

  const truncatedTitle = title.length > maxTitleLength ? title.substring(0, maxTitleLength) + '...' : title;
  const truncatedExcerpt = excerpt.length > maxExcerptLength ? excerpt.substring(0, maxExcerptLength) + '...' : excerpt;

  return (
    <>
      <div key={post.id} className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3">
        <div className="bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative">
          <Link href={postPathBySlug(slug)}>
            <Image
              src={post.imgSrc || '/images/articles/article2.png'}
              alt={post.title}
              width={389}
              height={262}
              className="inline-block m-auto"
            />
          </Link>

          <Link href={postPathBySlug(slug)}>
            <h3
              className="text-2xl font-bold pt-6 text-black"
              dangerouslySetInnerHTML={{
                __html: truncatedTitle,
              }}
            />
          </Link>

          {excerpt && (
            <div
              className="text-base font-normal pb-1 opacity-75 mt-2"
              dangerouslySetInnerHTML={{
                __html: sanitizeExcerpt(truncatedExcerpt),
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default PostCard;
