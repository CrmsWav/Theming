import axios from "axios";
import {PostDomain} from "@theming/articles/domain";

export const articlesGateway = () => {

  return {
    getAll: async () => {
      const posts: PostDomain[] = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.data)
        .catch(error => error);
      return posts;
    },
    getById: async (id: number) => {
      const postById: PostDomain[] = await axios.get(`https://jsonplaceholder.typicode.com/posts${id}`)
        .then(response => response.data)
        .catch(error => error);
      return postById
    }
  }
}
