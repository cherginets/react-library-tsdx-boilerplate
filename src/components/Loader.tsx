import React, { FC } from 'react';
import classes from './Loader.module.scss';

type LoaderProps = {
  position?: 'relative' | 'absolute' | 'window';
};

const Loader: FC<LoaderProps> = props => {
  return (
    <div>
      <div className={classes.ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export const LoaderSpin = () => {};
export const LoaderProgress = () => {};

export default Loader;
