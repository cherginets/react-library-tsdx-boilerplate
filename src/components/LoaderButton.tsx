import React, { FC, useMemo } from 'react';
import { useLoader } from '../index';

type LoaderButtonProps = {
  children: React.ReactNode;
  loading?: boolean;
  onClick: () => Promise<any> | any;
  component?: FC<{
    children?: React.ReactNode;
    onClick: () => any;
  }>;
  componentPropsOnLoading?: any;
};

/**
 * Кнопка загрузки
 */
const LoaderButton: FC<LoaderButtonProps> = ({
  children,
  loading: parentLoading,
  component: ButtonComponent = 'button',
  componentPropsOnLoading = { disabled: true },
}) => {
  const { start, stop, loading: loaderLoading } = useLoader(false);

  const loading = useMemo<boolean>(() => {
    if (parentLoading !== undefined) return parentLoading;
    return loaderLoading;
  }, [loaderLoading, parentLoading]);

  return (
    <ButtonComponent {...(loading ? componentPropsOnLoading : {})}>
      {children}
    </ButtonComponent>
  );
};

export default LoaderButton;
