import { Column, Columns } from '@mobily/stacks';
import { TabButtonComponent } from '@smp/ui';
import { ICategory } from '@smp/web';
import { memo } from 'react';

type IOrderCategoryViewProps = {
  categories: ICategory[] | undefined;
  pressCategory: (index: number) => void;
  selectedCategory: ICategory;
};

export const OrderCategoryView = memo<IOrderCategoryViewProps>(
  ({ categories, pressCategory, selectedCategory }) => {
    return (
      <Columns padding={2} space={4} style={{ borderWidth: 1 }}>
        {categories.map((category, i) => {
          const handlePressCategoryButton = () => {
            pressCategory(i);
          };
          const isPressed = selectedCategory.id === category.id;
          return (
            <Column key={i} width="content">
              <TabButtonComponent
                onPress={handlePressCategoryButton}
                label={category.name}
                focused={isPressed}
              />
            </Column>
          );
        })}
      </Columns>
    );
  },
);
