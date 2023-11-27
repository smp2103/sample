import { PropsWithChildren, Fragment } from 'react';

export function PropDetailsComponent({
  children,
  propName,
  val,
}: PropsWithChildren<{
  propName: string;
  val: any;
}>) {
  const isDarkModeProp = propName === 'darkMode';
  const Wrapper = isDarkModeProp ? 'div' : Fragment;
  const wrapperProps = isDarkModeProp && {};
  //@ts-ignore
  return <Wrapper {...wrapperProps}>{children}</Wrapper>;
}
