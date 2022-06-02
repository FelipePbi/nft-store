export const formatCurrencyToBRL = (value: number): string => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return value ? formatter.format(value) : 'R$ 0,00';
};
