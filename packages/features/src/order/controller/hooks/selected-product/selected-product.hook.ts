import { useState } from 'react';

export type ISelectedProduct = {
  name: string;
  id: number;
};

export const useSelectedProduct = () => {
  const [currentSelectedProduct, setCurrentSelectedProduct] = useState<ISelectedProduct>();

  const selectOrderedProduct = (product: ISelectedProduct) => {
    setCurrentSelectedProduct(product);
  };

  return {
    currentSelectedProduct,
    selectOrderedProduct,
  };
};
