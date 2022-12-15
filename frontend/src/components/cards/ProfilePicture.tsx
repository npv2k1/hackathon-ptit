import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { LazyImage, LazyImageProps } from './LazyImage';
import { Publisher } from 'src/types';

export interface ProfilePictureProps
  extends Omit<LazyImageProps, 'imgSrc' | 'imgAlt'> {
  user: Pick<Publisher, 'image' | 'name'>;
  size?:
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge';
  className?: string;
}

const sizeClasses = {
  xsmall: 'w-5 h-5 rounded-6',
  small: 'w-6 h-6 rounded-8',
  medium: 'w-8 h-8 rounded-10',
  large: 'w-10 h-10 rounded-12',
  xlarge: 'w-12 h-12 rounded-14',
  xxlarge: 'w-14 h-14 rounded-16',
  xxxlarge: 'w-24 h-24 rounded-26',
};

export function ProfilePicture({
  user,
  size = 'xlarge',
  className,
  ...props
}: ProfilePictureProps): ReactElement {
  return (
    <LazyImage
      {...props}
      imgSrc={user.image || "/img/default.jpg"}
      imgAlt={`${user.name}'s profile`}
      className={classNames(sizeClasses[size], className)}
    />
  )
}
