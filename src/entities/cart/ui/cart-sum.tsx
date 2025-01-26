type Props = {
  totalItems: number;
  totalPrice: number;
};
export const CartSum = ({ totalItems, totalPrice }: Props) => {
  if (totalItems === 0) return null;

  return (
    <div className="text-sm">
      <span className="font-bold">{totalItems}</span> items |
      <span className="font-bold ml-1">${totalPrice.toFixed(2)}</span>
    </div>
  );
};
