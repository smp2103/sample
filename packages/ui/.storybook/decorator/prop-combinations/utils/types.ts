import { ComponentProps, ComponentType } from 'react';

export type PropName<T extends ComponentType<any>> = keyof ComponentProps<T>;

export type PropCombination<T extends ComponentType<any>> = {
  [key in PropName<T>]: ComponentProps<T>[key];
};
