import * as React from 'react';
import {articlesRepository} from "@theming/articles/repository";
import PostsList from "../../../libs/ui/src/lib/posts-list/posts-list";

export default function Index({ data }) {
  // console.log("data -> ", data);

  return (
    <div>
      <PostsList data={data} />
    </div>
  )
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
