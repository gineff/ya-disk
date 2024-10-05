import React from 'react';
import { IconProps } from '../types';
import { icons } from './icons';
import { FC } from 'react';

export const Icon: FC<IconProps> = ({ type, sx }) => {
  if (!type) {
    return null;
  }
  return React.cloneElement(icons[type], {
    sx: { ...icons[type].props.sx, ...sx },
  });
};
