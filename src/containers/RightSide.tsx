import React, { useRef } from 'react';

import { ContainerProps } from '../lib/models';

type RightSideProps = ContainerProps;

const RightSide = (props: RightSideProps) => {
  const rightSideRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      className="RightSide" 
      ref={rightSideRef}
    >

    </section>
  )
}

export default RightSide;