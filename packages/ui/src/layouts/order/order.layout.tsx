import { Box, Row, Rows } from '@mobily/stacks';
import { ReactNode, memo } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

type IOrderLayoutProps = {
  header: ReactNode;
  contentLeft: ReactNode;
  contentRight: ReactNode;
};

export const OrderLayout = memo<IOrderLayoutProps>(({ header, contentLeft, contentRight }) => {
  return (
    <Rows padding={4} style={{ borderWidth: 1 }}>
      <Row paddingLeft={4} height="content">
        {header}
      </Row>
      <Row height="fluid" paddingTop={4}>
        <Box flex="fluid" direction="row">
          <Box flex="3/4">
            <ScrollView showsVerticalScrollIndicator={false}>{contentLeft}</ScrollView>
          </Box>
          <Box flex="1/4">{contentRight}</Box>
        </Box>
      </Row>
    </Rows>
  );
});
