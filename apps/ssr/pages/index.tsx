import * as React from 'react';
import {articlesRepository} from "@theming/articles/repository";

export default function Index({ data }) {
  console.log(data);

  return (
    <div>
      <h1>This is a simple example of a SSR rendering.</h1>
      <br/>
      <h2>The data is fetched from the server and rendered in the browser.</h2>
      <br/>
      <p>The data is:</p>
      <br/>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export async function getServerSideProps() {
  return articlesRepository().getAll().then(articles => {
    return {
      props: {
        data: articles
      }
    }
  })
}
