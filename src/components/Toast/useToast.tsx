import toast from 'react-hot-toast';
import { PromiseToastHandler, ToastHandler } from './Toast.types';

const defaultDelay = 2000;

export const useToast = () => {
  const errorToast: ToastHandler = (message, options) =>
    toast.error(message, { duration: defaultDelay, ...options });

  const successToast: ToastHandler = (message, options) =>
    toast.success(message, { duration: defaultDelay, ...options });

  const loadingToast: ToastHandler = (message, options) =>
    toast.success(message, { duration: defaultDelay, ...options });

  const promiseToast: PromiseToastHandler = (cbPromise, opts) => toast.promise(cbPromise, opts);

  return {
    errorToast,
    successToast,
    loadingToast,
    promiseToast,
  };
};
