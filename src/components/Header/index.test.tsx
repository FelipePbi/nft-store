import { renderWithEverything, screen } from '../../helpers/rtl';

import Header from '.';

describe('Header', () => {
  it('should show the component correctly', () => {
    renderWithEverything(<Header />);

    expect(screen.queryByText('Minha Carteira')).toBeInTheDocument();
    expect(screen.queryByText('0 itens')).toBeInTheDocument();
  });
});
