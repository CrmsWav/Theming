import styled from 'styled-components';
import * as React from "react";
import {PostEntity} from "@theming/articles/entity";

type propsType = {
  data: PostEntity[]
}
export default function PostsList(props: propsType) {
  // console.log("props => ", props);

  return (
    <div>
      <h1>Posts List</h1>
      <ul>
        {props.data.map(article => (
          <li key={article.id}>
            <a href={`/articles/${article.id}`}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
