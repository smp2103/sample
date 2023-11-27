import { IOption, IProduct } from '@smp/web';
import { useCallback, useMemo, useState } from 'react';
import { ISelectedProduct } from '../selected-product';

export type IOrderedProduct = {
  id: number;
  name: string;
  count: number;
  options?: IOption[];
};

export type IUpdateType = 'plus' | 'minus';

export const useOrderProduct = (products: IProduct[], seledctedProduct: ISelectedProduct) => {
  const [orderedProducts, setOrderedProducts] = useState<IOrderedProduct[]>([]);

  const findProductByName = useCallback(
    (name: string) => {
      return products.find((product, i) => {
        return product.name === name;
      });
    },
    [products],
  );

  const orderProduct = useCallback(
    (name: string, options?: IOption[]) => {
      setOrderedProducts((prev) => {
        return [
          ...prev,
          {
            id: prev.length + 1,
            name,
            count: 1,
            options,
          },
        ];
      });
    },
    [setOrderedProducts],
  );

  const deleteProduct = (index: number) => {
    setOrderedProducts((prev) => {
      return prev.filter((product) => {
        return product.id !== index + 1;
      });
    });
  };

  const totalPrice = useMemo(() => {
    return orderedProducts.reduce((acc, cur) => {
      const product = findProductByName(cur.name);
      const productPrice = product.price * cur.count;
      const optionPrice =
        product?.option?.reduce((acc, cur) => {
          if (cur.price) {
            return acc + cur.price;
          } else {
            return acc;
          }
        }, 0) || 0 * cur.count;
      const totalPrice = productPrice + optionPrice;
      return acc + totalPrice;
    }, 0);
  }, [orderedProducts, findProductByName]);

  const addOrderCount = () => {
    setOrderedProducts((prev) => {
      const orderedProducts = [...prev];
      const fixedOrderedProducts = orderedProducts.map((e, i) => {
        if (e.id === seledctedProduct.id) {
          return {
            ...e,
            count: e.count + 1,
          };
        } else {
          return e;
        }
      });
      return fixedOrderedProducts;
    });
  };

  const subtractOrderCount = () => {
    setOrderedProducts((prev) => {
      const orderedProducts = [...prev];
      const fixedOrderedProducts = orderedProducts.map((e, i) => {
        if (e.count === 1) return e;
        if (e.id === seledctedProduct.id) {
          return {
            ...e,
            count: e.count - 1,
          };
        } else {
          return e;
        }
      });
      return fixedOrderedProducts;
    });
  };

  return {
    orderProduct,
    orderedProducts,
    totalPrice,
    findProductByName,
    addOrderCount,
    subtractOrderCount,
    deleteProduct,
  };
};
