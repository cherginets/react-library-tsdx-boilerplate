import React from 'react';
import Loader from '../Loader';
import classes from './Example.module.scss';
import { AbsoluteLoaderButton } from './ExampleAbsoluteLoaderButton';

export const Example = () => {
  return (
    <div>
      <h2>Loader position relative222</h2>
      <div className={classes.bordered}>
        <Loader />
      </div>
      <h2>Loader position absolute</h2>
      <div className={classes.bordered}>
        <Loader position={'absolute'} />
      </div>
      <h2>Loader position window</h2>
      <AbsoluteLoaderButton />
    </div>
  );
};
