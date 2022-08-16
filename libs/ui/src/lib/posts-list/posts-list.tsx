import * as React from "react";
import {PostEntity} from "@theming/articles/entity";
import Link from "next/link";
import styled from "styled-components";

type propsType = {
  posts: PostEntity[]
}
export default function PostsList(props: propsType) {
  const Title = styled.h1`
    color: red;
    font-size: xxx-large;
    font-weight: bold;
    display: flex;
    justify-content: center;
  `;

  const Post = styled.li`
    list-style: none;
    border: 1px solid black;
    margin-bottom: 10px;
    padding: 10px;
    text-align: center;
    font-size: large;
  `;

  return (
    <div>
      <Title>Posts List</Title>
      <ul>
        {props.posts.map(post => (
          <Link href={{pathname: '/detailPost/[id]', query: {id: post.id}}} key={post.id}>
              <Post>
                <a>{post.title}</a>
              </Post>
          </Link>
        ))}
      </ul>
    </div>
  )
}
