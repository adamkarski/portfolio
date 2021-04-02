import { useRouter } from 'next/router'
import Head from "next/head";
const Projekt = () => {
  const router = useRouter()
  const slug = router.query.slug || []

  console.log(router.query);

  return (
    <>
     <Head>
        <title key={'title'}>Foo</title>
      </Head>
      <h1>Slug: {router.query.slug}</h1>
    </>
  )
}

export default Projekt