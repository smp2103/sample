import { useState } from 'react';
import { useDidMount } from 'rooks';
import { ICategory, IProduct, ICoupon } from '../../../../../mock';

export const useFetchData = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [coupons, setCoupons] = useState<ICoupon[]>([]);

  useDidMount(() => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data: { categories: ICategory[] }) => {
        setCategories(data.categories);
      });
    fetch('/api/products')
      .then((res) => res.json())
      .then((data: { products: IProduct[] }) => {
        setProducts(data.products);
      });
    fetch('/api/coupons')
      .then((res) => res.json())
      .then((data: { coupons: ICoupon[] }) => {
        setCoupons(data.coupons);
      });
  });

  return {
    categories,
    products,
    coupons,
  };
};
