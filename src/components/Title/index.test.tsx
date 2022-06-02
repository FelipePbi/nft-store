import { renderWithEverything, screen } from '../../helpers/rtl';

import Title from '.';

describe('Title', () => {
  it('should show the component correctly', () => {
    renderWithEverything(<Title text="title_teste" />);

    expect(screen.queryByText('title_teste')).toBeInTheDocument();
    expect(screen.queryByText('title_teste')).toHaveStyle('font-size: 16px;');
  });

  it('should render with font-size equal to 24px', () => {
    renderWithEverything(<Title text="title_teste" fontSize="24px" />);

    expect(screen.queryByText('title_teste')).toHaveStyle('font-size: 24px;');
  });
});
