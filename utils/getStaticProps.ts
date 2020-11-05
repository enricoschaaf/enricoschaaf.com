import posts from "utils/getPosts"

export async function getStaticProps() {
  return {
    props: {
      posts: posts.map((post) => ({
        title: post.module.meta.title,
        link: post.link,
      })),
    },
  }
}
