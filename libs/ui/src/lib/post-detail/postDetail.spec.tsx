import { render } from '@testing-library/react';

import PostDetail from './postDetail';

describe('PostDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostDetail id={post.id} title={post.title} body={post.body} />);
    expect(baseElement).toBeTruthy();
  });
});
