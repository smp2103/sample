export type ICategory = {
  id: string;
  name: string;
};

export type IOption = {
  name: string;
  price?: number;
};

export type IProduct = {
  categoryId: string;
  name: string;
  price: number;
  option?: IOption[];
};
export type ICoupon = {
  id: string;
  type: string;
  name: string;
  price: number;
};
