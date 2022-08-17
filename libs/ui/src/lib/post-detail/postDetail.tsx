import * as React from 'react';
import {PostEntity} from "@theming/articles/entity";

export function PostDetail(props: PostEntity) {
  return (
    <div className="postFromPostDetail">
      <h1 className="titleFromPostDetail">Post n°{props.id}</h1>

      <p className="labelFromPostDetail">Title:</p>
      <p>{props.title}</p>

      <p className="labelFromPostDetail">Body :</p>
      <p>{props.body}</p>
    </div>
  );
}

export default PostDetail;
