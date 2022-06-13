import { render } from '@testing-library/react';
import { ChipList } from './chip-list';

describe('ChipList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChipList tags={['Label1', 'Label2']} />);
    expect(baseElement).toBeTruthy();
  });
});
