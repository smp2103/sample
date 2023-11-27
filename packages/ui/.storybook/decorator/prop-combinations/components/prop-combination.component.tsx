import { cx } from '@leafygreen-ui/emotion';
import { GeneratedStoryConfig } from '@leafygreen-ui/lib';
import { Args, StoryFn } from '@storybook/react';
import { entries } from 'lodash';
import React, { ReactElement } from 'react';

import {
  cellStyles,
  generatedStoryWrapper,
  instanceCellStyles,
  tableStyles,
} from '../prop-combinations.styles';
import { valStr, type PropCombination } from '../utils';
import { RecursiveCombinations } from '../utils/recursive-combinations';
import { PropName } from '../utils/types';

import { Instance } from './instance';

/**
 * Generates all combinations of each variable
 */
export function PropCombinations<T extends React.ComponentType<any>>({
  component,
  variables,
  args,
  exclude,
  decorator = (SFn: StoryFn) => <SFn />,
  screenMode,
}: {
  component: T;
  variables: Array<[PropName<T>, Array<any> | undefined]>;
  args: Args;
  //@ts-ignore
  exclude: GeneratedStoryConfig<T>['excludeCombinations'];
  //@ts-ignore
  decorator: GeneratedStoryConfig<T>['decorator'];
  screenMode?: boolean;
}): ReactElement<any> {
  // @ts-ignore
  const allCombinations = RecursiveCombinations({}, [...variables], exclude);

  const comboCount = allCombinations.length;
  console.info(`Rendering ${comboCount} prop combinations for component: ${component.displayName}`);

  const tables = allCombinations.reduce(
    (t, combo) => {
      const mode = combo.darkMode ? 'dark' : 'light';
      t[mode].push(combo);
      return t;
    },
    { light: [], dark: [] } as Record<'light' | 'dark', Array<PropCombination<T>>>,
  );

  return (
    <div className={generatedStoryWrapper}>
      {entries(tables).map(([mode, combos]) => (
        <div key={mode} className={tableStyles}>
          {combos.map((combo, index) => (
            <div
              key={index}
              style={{
                paddingBottom: 20,
                boxSizing: 'border-box',
                width: '100%',
                display: 'flex',
                gap: 20,
              }}
            >
              <pre>
                {entries(combo).map(([n, v]) => (
                  <div key={n + v}>
                    <b>{n}:</b> {valStr(v)}
                  </div>
                ))}
              </pre>
              <div
                className={cx(cellStyles, instanceCellStyles)}
                style={{
                  alignSelf: 'center',
                  ...(screenMode && {
                    width: 360,
                    height: 740,
                    backgroundColor: 'gray',
                  }),
                }}
              >
                <Instance
                  component={component}
                  instanceProps={{
                    ...args,
                    ...combo,
                  }}
                  decorator={decorator}
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
