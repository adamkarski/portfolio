import { useRouter } from "next/router";
import MetaTags from "react-meta-tags";
import conf from "../../components/utils";

const Projekt = () => {
  const router = useRouter();
  const slug = router.query.slug || [];

  return (
    <>
      <MetaTags>
        <title key={"title"}>
          {conf.PageTitle} // {router.query.slug}
        </title>
      </MetaTags>

      <h1>Slug: {router.query.slug}</h1>
    </>
  );
};

export default Projekt;
