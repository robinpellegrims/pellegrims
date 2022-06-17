import { render } from '@testing-library/react';
import { Tags } from './tags';

describe('Tags', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tags tags={['Label1', 'Label2']} />);
    expect(baseElement).toBeTruthy();
  });
});
