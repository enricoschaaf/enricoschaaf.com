import { ReactNode } from "react"

const BlogLayout = ({ children }: { children: ReactNode }) => (
  <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 grid gap-4">
    {children}
  </div>
)

export default BlogLayout
