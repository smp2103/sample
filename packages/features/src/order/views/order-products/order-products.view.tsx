import { Box, Tiles } from '@mobily/stacks';
import { ProductButtonComponent } from '@smp/ui';
import { IProduct } from '@smp/web';
import { memo } from 'react';

type IOrderProductsViewProps = {
  products: IProduct[] | undefined;
  pressProduct: (product: IProduct) => void;
};

export const OrderProductsView = memo<IOrderProductsViewProps>(({ products, pressProduct }) => {
  return (
    <Box flex="fluid" alignX="center" paddingX={4}>
      <Tiles columns={4} space={6}>
        {products.map((product, i) => {
          const handlePressButton = () => {
            pressProduct(product);
          };

          return (
            <ProductButtonComponent
              onPress={handlePressButton}
              label={product.name}
              key={i}
              price={product.price}
            />
          );
        })}
      </Tiles>
    </Box>
  );
});
