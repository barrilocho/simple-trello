import { render, RenderResult, screen } from '@testing-library/react';
import { Layout } from './Layout';

describe('test <Layout/> component', () => {
  let layout: RenderResult;
  const title = 'Children simple trello';
  const child = <h1>{title}</h1>;
  beforeEach(() => {
    layout = render(<Layout>{child}</Layout>);
  });

  test('should render correctly', () => {
    render(
      <Layout>
        <div>test</div>
      </Layout>
    );
  });
  test('should render children', () => {
    const children = screen.getByText(title);
    expect(children).toBeInTheDocument();
    expect(children.textContent).toBe(title);
  });
});
