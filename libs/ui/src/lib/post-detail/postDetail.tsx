import * as React from 'react';
import {PostEntity} from "@theming/articles/entity";
import {useRouter} from "next/router";

/* eslint-disable-next-line */
type PostDetailProps = {
  data: PostEntity[];
}

export function PostDetail(props: PostDetailProps) {
  // console.log("props => ", props);
  const router = useRouter();
  console.log("router => ", router);
  const id = parseInt(router.query.id[0]) - 1;

  return (
    <div>
      <h1>Post n°{props.data[id].id}</h1>
      <br/>
      <p>Title: {props.data[id].title}</p>
      <br/>
      <p>Body : {props.data[id].body}</p>
    </div>
  );
}

export default PostDetail;
