import { renderWithEverything, screen } from '../../helpers/rtl';

import Container from '.';

describe('Container', () => {
  it('should show the component correctly with children', () => {
    renderWithEverything(
      <Container>
        <span>teste_children</span>
      </Container>
    );

    expect(screen.queryByText('teste_children')).toBeInTheDocument();
  });
});
