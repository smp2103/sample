import { Decorator, StoryContext, StoryFn } from '@storybook/react';

export const ComponentPreview: Decorator = (StoryFn: StoryFn, context: StoryContext<any>) => {
  const { darkMode } = context.args;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <StoryFn darkMode={darkMode} {...context} />
    </div>
  );
};
