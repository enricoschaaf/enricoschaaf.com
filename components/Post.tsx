import Title from "components/Title"

const Post = ({ children, meta: { title } }) => (
  <>
    <Title>{title}</Title>
    <div className="bg-gray-50 h-full prose max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {children}
    </div>
  </>
)

export default Post
