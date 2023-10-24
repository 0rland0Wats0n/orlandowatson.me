import React, { PropsWithChildren } from 'react';

type TextSize = 'xlarge' | 'large' | 'normal' | 'small';

interface TextProps extends PropsWithChildren {
  size?: TextSize;
  className?: string;
}

const Text = ({ size = 'normal', className = '', children }: TextProps) =>
  <span className={`font--${size} ${className}`}>{children}</span>

export default Text;