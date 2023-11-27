import { ICategory } from '@smp/web';
import { useMemo, useState } from 'react';

export const useCategories = (categories: ICategory[]) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

  const selectedCategory = useMemo(() => {
    return categories[selectedCategoryIndex];
  }, [selectedCategoryIndex, categories]);

  const selectCategory = (index: number) => {
    setSelectedCategoryIndex(index);
  };

  return { selectedCategory, selectCategory };
};
