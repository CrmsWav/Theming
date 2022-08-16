import * as React from 'react';
import {articlesRepository} from "@theming/articles/repository";
import PostsList from "../../../libs/ui/src/lib/posts-list/posts-list";

export default function Index({ posts }) {
  return (
    <div>
      <PostsList posts={posts} />
    </div>
  )
}

export async function getServerSideProps() {
  return articlesRepository().getAll().then(data => {
    return {
      props: {
        posts: data
      }
    }
  })
}
