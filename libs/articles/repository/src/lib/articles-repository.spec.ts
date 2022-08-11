import { articlesRepository } from './articles-repository';

describe('articlesRepository', () => {
  it('should work', () => {
    expect(articlesRepository()).toEqual('articles-repository');
  });
});
