import { useLoader } from '../../index';
import React, { useCallback } from 'react';
import Loader from '../Loader';

export const AbsoluteLoaderButton = () => {
  const { start, stop, loading } = useLoader(false);

  const onClick = useCallback(() => {
    start();
    setTimeout(stop, 500);
  }, []);

  return (
    <>
      <button onClick={onClick}>show loader on window</button>
      {loading && <Loader position={'window'} />}
    </>
  );
};
