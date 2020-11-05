import Head from "next/head"
import { ReactNode } from "react"

const Title = ({ children }: { children: ReactNode }) => (
  <Head>
    <title>{children} | Enrico Schaaf</title>
  </Head>
)

export default Title
