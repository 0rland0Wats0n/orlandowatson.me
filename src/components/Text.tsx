import React, { PropsWithChildren } from 'react';

type TextSize = 'xlarge' | 'large' | 'normal' | 'small';

interface TextProps extends PropsWithChildren {
  size?: TextSize;
  quote?: boolean;
  className?: string;
}

const Text = ({ 
  size = 'normal', 
  className = '',
  quote = false, 
  children 
}: TextProps) =>
  <span className={`font--${size} ${className} ${quote ? 'text--quote' : ''}`}>
    {children}
  </span>

export default Text;