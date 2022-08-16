import * as React from 'react';
import {articlesRepository} from "@theming/articles/repository";
import PostDetail from "../../../../libs/ui/src/lib/post-detail/postDetail";

export default function IdTsx({ post }) {

  return (
    <div>
      <PostDetail id={post.id} title={post.title} body={post.body} />
    </div>
  );
}

export async function getServerSideProps(context) {
  return articlesRepository().getAll().then(data => {
    const post = data.find(post => post.id === parseInt(context.params.id));

    return {
      props: {
        post: post
      }
    }
  })
}
