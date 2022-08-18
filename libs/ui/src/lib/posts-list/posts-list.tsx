import * as React from "react";
import {PostEntity} from "@theming/articles/entity";
import Link from "next/link";
import styled from "styled-components";
import {FaBinoculars, FaCarrot, FaBitcoin, FaBible, FaBlog} from 'react-icons/fa';
import {MdAirplay, MdDescription, Md2Mp, MdDirtyLens, MdArchitecture} from 'react-icons/md';

type propsType = {
  posts: PostEntity[]
}

const PostsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 4em;
  font-weight: bolder;

  display: flex;
  justify-content: center;

  margin: 50px 0;
  padding: 2% 5%;
  width: 30%;
  border: black dashed 5px;
  border-radius: 20px;
  `;

const List = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Post = styled.li`
  border-radius: 10px;
  box-shadow: black 5px 5px 10px 0;
  list-style: none;
  margin: 1% 20%;
  padding: 2% 5%;
  background-color: #606060;
  width: 60%;
  max-height: min-content;

  font-family: 'Roboto', sans-serif;
  font-size: large;
  color: whitesmoke;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const PostContainer = styled.div`
  margin: 0 15% 0 2%;
`;

const PostTitle = styled.h2`
  font-weight: normal;
  font-size: x-large;
`;

const icons = [FaBinoculars, FaCarrot, FaBitcoin, FaBible, FaBlog, MdAirplay, MdDescription, Md2Mp, MdDirtyLens, MdArchitecture]

export default function PostsList(props: propsType) {
  const assignIcon = (postId: number) => {
    if (postId <= 10){
      return icons[postId - 1]
    } else {
      return icons[(postId - 1) % 10]
    }
  }

  return (
    <PostsListContainer>
      <Title>Posts List</Title>

      <List>
        {props.posts.map(post => {
          const Icon = assignIcon(post.id);
          const bodyView = post.body

          return (
          <Link href={{pathname: '/detailPost/[id]', query: {id: post.id}}} key={post.id}>
            <Post>
              <PostContainer>
                <PostTitle>{post.title}</PostTitle>

                <p>{post.body.length < 25 ? post.body : bodyView.substring(0, 25) + '...'}</p>
              </PostContainer>

              <Icon style={{ fontSize: '4em', margin: '2%', color: 'whitesmoke' }} />
            </Post>
          </Link>
          )
        })}
      </List>
    </PostsListContainer>
  )
}
