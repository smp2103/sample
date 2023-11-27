import { GeneratedStoryConfig } from '@leafygreen-ui/lib';
import { Args } from '@storybook/react';
import { ReactElement, createElement } from 'react';
import { ComponentType } from 'react';

import { PropCombination } from '../utils';

/**
 * Renders a component instance
 */
export function Instance<T extends ComponentType<any>>({
  component,
  instanceProps,
  decorator,
}: {
  component: T;
  instanceProps: PropCombination<T>;
  //@ts-ignore
  decorator: Required<GeneratedStoryConfig<T>>['decorator'];
}): ReactElement<any> {
  return decorator(
    //@ts-ignore
    (extraArgs: Args) => {
      return createElement(component, {
        ...instanceProps,
        ...extraArgs,
      });
    },
    { args: { ...instanceProps } },
  );
}
