import PostCard from "components/PostCard"

const PostList = ({ posts }) => (
  <div className="grid gap-4">
    {posts.map((post) => (
      <PostCard key={post.link} post={post} />
    ))}
  </div>
)

export default PostList
