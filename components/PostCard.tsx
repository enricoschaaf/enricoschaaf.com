import Link from "next/link"

const PostCard = ({ post }) => (
  <Link href={`/blog${post.link}`}>
    <a className="font-medium text-gray-500 hover:text-gray-100 dark:(hover:text-gray-900) transition duration-150 ease-in-out">
      {post.title}
    </a>
  </Link>
)

export default PostCard
