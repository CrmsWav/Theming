// import styled from 'styled-components';
import * as React from 'react';
import {articlesRepository} from "@theming/articles/repository";
// import PostDetail from "../../../../libs/ui/src/lib/post-detail/postDetail";
import {useRouter} from "next/router";

class IdTsxProps {
}

export default function IdTsx(props: IdTsxProps) {
  // console.log("props => ", props);
  const router = useRouter();
  const {id} = router.query;

  return (
    // <PostDetail data={data} />
    // <PostDetail data={data} id={id} />
    <p>Post : {id}</p>
  );
}

export async function getServerSideProps() {
  return articlesRepository().getAll().then(articles => {
    return {
      props: {
        data: articles
      }
    }
  })
}
