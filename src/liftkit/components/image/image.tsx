import { useMemo } from 'react';
import { propsToDataAttrs } from './utilities';

type LkAspectRatio = 'auto' | '1/1' | '2.39/1' | '2/1' | '16/9' | '3/2' | '4/3' | '5/4' | '1/2.39' | '1/2' | '9/16' | '4/5';
type LkSizeUnit = '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

type LkImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  aspect?: LkAspectRatio;
  borderRadius?: LkSizeUnit | 'none' | 'zero' | undefined;
  objectFit?: React.CSSProperties['objectFit'];
  width?: LkSizeUnit | 'auto';
  height?: LkSizeUnit | 'auto';
};

export default function Image({ aspect = 'auto', borderRadius = undefined, objectFit = 'fill', width = 'auto', height = 'auto', ...rest }: LkImageProps) {
  const attrs = useMemo(() => propsToDataAttrs({ aspect, borderRadius, objectFit, width, height }, 'lk-image'), [aspect, borderRadius, objectFit, width, height]);

  return <img {...attrs} {...rest} />;
}
