import { renderWithEverything, screen } from '../../helpers/rtl';

import HashCode from '.';

describe('HashCode', () => {
  it('should show the component correctly', () => {
    renderWithEverything(<HashCode value={10000} />);

    expect(screen.queryByText('#10000')).toBeInTheDocument();
    expect(screen.queryByText('#10000')).toHaveStyle('font-size: 14px;');
  });

  it('should render with font-size equal to 24px', () => {
    renderWithEverything(<HashCode value={10000} fontSize="24px" />);

    expect(screen.queryByText('#10000')).toHaveStyle('font-size: 24px;');
  });
});
