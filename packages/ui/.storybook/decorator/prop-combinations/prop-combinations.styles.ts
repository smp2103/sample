import { css } from '@leafygreen-ui/emotion';
import { palette } from '@leafygreen-ui/palette';
import { typeScales } from '@leafygreen-ui/tokens';

export const generatedStoryWrapper = css`
  width: 100vw;
  display: flex;
  padding-top: 10px;
`;

export const tableStyles = css`
  flex: 1;
  width: max-content;
  max-width: 100%;
  border-collapse: collapse;
  padding: 16px;
`;

export const combinationRowStyles = css`
  position: relative;
  overflow: visible;
  display: flex;

  font-size: ${typeScales.body1.fontSize}px;
  line-height: ${typeScales.body1.lineHeight}px;

  color: ${palette.gray.base};
  background-color: ${palette.gray.light3};
`;

export const combinationDarkModeStyles = css`
  background-color: ${palette.black};
  color: ${palette.gray.base};
`;

export const cellStyles = css`
  padding: 1px;
  display: flex;
  justify-content: flex-end;
`;

export const instanceCellStyles = css`
  vertical-align: middle;
  width: 100%;
`;
