import { FC } from 'react';
import { Toaster as HotToaster } from 'react-hot-toast';
import { ToasterProps } from './Toast.types';

export const Toaster: FC<ToasterProps> = (props) => {
  return <HotToaster {...props} />;
};
