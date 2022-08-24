import React from 'react';
import Image from 'next/image';

import * as T from './Icon.types';

const Icon = ({name, size}: T.IconProps) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const icon = require(`./IconsList/${name}.svg`);

  return (
    <Image
      src={icon}
      alt={`${name} icon`}
      width={size || 24}
      height={size || 24}
    /> );
};

export { Icon };