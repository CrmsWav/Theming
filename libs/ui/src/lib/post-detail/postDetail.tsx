import * as React from 'react';
import {PostEntity} from "@theming/articles/entity";

/* eslint-disable-next-line */
type PostDetailProps = {
  data: PostEntity[]
}

export function PostDetail(props: PostDetailProps) {
  console.log("props => ", props);

  return (
      <h1>Welcome to PostDetail!</h1>
  );
}

export default PostDetail;
