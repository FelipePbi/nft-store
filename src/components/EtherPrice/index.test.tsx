import { renderWithEverything, screen } from '../../helpers/rtl';

import EtherPrice from '.';

describe('EtherPrice', () => {
  it('should show the component correctly with value 10', () => {
    renderWithEverything(<EtherPrice value={10} />);

    expect(screen.queryByText('10.00')).toBeInTheDocument();
    expect(screen.queryByText('10.00')).toHaveStyle('font-size: 16px;');
    expect(screen.queryByAltText('Logo da moeda Ether')).toBeInTheDocument();
  });

  it('should render with font-size equal to 24px', () => {
    renderWithEverything(<EtherPrice value={10} fontSize="24px" />);

    expect(screen.queryByText('10.00')).toHaveStyle('font-size: 24px;');
  });
});
