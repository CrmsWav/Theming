// import styled from 'styled-components';
import * as React from 'react';
import {articlesRepository} from "@theming/articles/repository";
import PostDetail from "../../../../libs/ui/src/lib/post-detail/postDetail";
import {PostEntity} from "@theming/articles/entity";

class IdTsxProps {
  data: PostEntity[];
}

export default function IdTsx(props: IdTsxProps) {
  // console.log("props => ", props);

  return (
    <div>
        <PostDetail data={props.data} />
    </div>
  );
}

export async function getServerSideProps() {
  return articlesRepository().getAll().then(data => {
    // console.log("articles => ", articles);

    return {
      props: {
        data: data
      }
    }
  })
}
