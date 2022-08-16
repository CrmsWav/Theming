import * as React from 'react';
import {PostEntity} from "@theming/articles/entity";

export function PostDetail(props: PostEntity) {
  console.log("props => ", props);

  return (
    <div>
      <h1>Post n°{props.id}</h1>
      <br/>
      <p>Title: {props.title}</p>
      <br/>
      <p>Body : {props.body}</p>
    </div>
  );
}

export default PostDetail;
