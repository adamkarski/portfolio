import { useRouter } from 'next/router'
import Head from "next/head";
const Projekt = () => {
  const router = useRouter()
  const slug = router.query.slug || []

  return (
    <>
      <Head title="as"/>
      <h1>Slug: {slug.join('/')}</h1>
    </>
  )
}

export default Comment