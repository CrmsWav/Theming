import {PostDomain} from "@theming/articles/domain";
import {PostEntity} from "@theming/articles/entity";

export function articlesPresenter(postDomain: PostDomain): PostEntity {

  return {
    id: postDomain.id,
    title: postDomain.title,
    body: postDomain.body
  };
}
