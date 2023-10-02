import { Toast, ToasterProps as HotToasterProps } from 'react-hot-toast';

type ToastType = Toast;

type Renderable = JSX.Element | string | null;

type ValueFunction<TValue, TArg> = (arg: TArg) => TValue;

type ValueOrFunction<TValue, TArg> = TValue | ValueFunction<TValue, TArg>;

type Message = ValueOrFunction<Renderable, Toast>;

type ToastMessage = Message;

export type PromiseToastHandler<T = any> = (
  promise: Promise<T>,
  msgs: {
    loading: Renderable;
    success: ValueOrFunction<Renderable, T>;
    error: ValueOrFunction<Renderable, any>;
  },
  opts?: ToastOptions
) => Promise<T>;

export type ToastOptions = Partial<
  Pick<
    ToastType,
    'id' | 'icon' | 'duration' | 'ariaProps' | 'className' | 'style' | 'position' | 'iconTheme'
  >
>;

export type ToastHandler = (message: ToastMessage, options?: ToastOptions) => string;

export type ToasterProps = HotToasterProps;
