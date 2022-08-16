import * as React from "react";
import {PostEntity} from "@theming/articles/entity";
import Link from "next/link";

type propsType = {
  posts: PostEntity[]
}
export default function PostsList(props: propsType) {
  return (
    <div>
      <h1>Posts List</h1>
      <ul>
        {props.posts.map(post => (
          <li key={post.id}>
            <Link href={{pathname: '/detailPost/[id]', query: {id: post.id}}}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
