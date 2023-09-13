import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from '../..'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<Props> = ({ children, className, ...otherProps }) => {
  return (
    <button
      className={classNames(
        'ui-focus-visible:ring-2 ui-focus-visible:ring-offset-2 flex items-center rounded-md border border-gray-300 bg-white px-2 py-1 ring-gray-500 ring-offset-gray-100 focus:outline-none',
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  )
}

// import { ComponentProps, forwardRef, ReactNode } from 'react'
// import { classNames } from '../../utils/class-names'

// export const Button = forwardRef<
//   HTMLButtonElement,
//   ComponentProps<'button'> & { children?: ReactNode }
// >(({ className, ...props }, ref) => (
//   <button
//     ref={ref}
//     type="button"
//     className={classNames(
//       'ui-focus-visible:ring-2 ui-focus-visible:ring-offset-2 flex items-center rounded-md border border-gray-300 bg-white px-2 py-1 ring-gray-500 ring-offset-gray-100 focus:outline-none',
//       className
//     )}
//     {...props}
//   />
// ))
