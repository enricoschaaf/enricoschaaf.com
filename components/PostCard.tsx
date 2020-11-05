import Link from "next/link"

const PostCard = ({ post }) => (
  <Link href={`/blog${post.link}`}>
    <a>{post.title}</a>
  </Link>
)

export default PostCard
