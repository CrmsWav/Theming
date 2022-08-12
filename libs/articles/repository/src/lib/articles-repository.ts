import {articlesGateway} from "@theming/articles/gateway";
import {articlesPresenter} from "@theming/articles/presenter";
import {PostDomain} from "@theming/articles/domain";

class ArticlesRepository {
  getAll = async () => {
    const posts: PostDomain[] = await articlesGateway().getAll();
    return posts.map(post => articlesPresenter(post));
  }
  getById = async (id: number) => {
    const postById: PostDomain[] = await articlesGateway().getById(id);
    return postById.map(post => articlesPresenter(post));
  }
}

export function articlesRepository(): ArticlesRepository {
  return {
    getAll: async () => {
      const posts: PostDomain[] = await articlesGateway().getAll();
      return posts.map(post => articlesPresenter(post));
    },
    getById: async (id: number) => {
      const postById: PostDomain[] = await articlesGateway().getById(id);
      return postById.map(post => articlesPresenter(post));
    }
  }
}
