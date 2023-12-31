'use client';
import { useDropdownContext } from '@components/Dropdown/Dropdown.context';
import { useInputGroupContext } from '@components/InputGroup/InputGroup.context';
import { Spinner } from '@components/Spinner';
import { ChevronDownIcon } from '@icons/ChevronDown';
import { useComponentTheme } from '@theme/theme.context';
import { useComponentVariant } from '@theme/variant.context';
import { usePropId } from '@utils/usePropId';
import { PolymorphicRef } from '../../types';
import { ButtonComponentType, ButtonInnerProps, ButtonProps } from './Button.types';
import { ElementType, forwardRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const defaultProps: Partial<ButtonInnerProps> = {
  animation: 'none',
  color: 'gray',
  disabled: false,
  icon: false,
  loading: false,
  radius: 'md',
  shadow: 'none',
  shadowColor: 'none',
  size: 'md',
  tone: 'solid',
  withRing: true,
};

const Button: ButtonComponentType = forwardRef(
  <C extends ElementType = 'button'>(props: ButtonProps<C>, ref?: PolymorphicRef<C>) => {
    const variantProps = useComponentVariant('Button', props.variant) as Partial<ButtonInnerProps>;
    const theme = useComponentTheme('Button');
    const {
      animation,
      as,
      children,
      className = '',
      color,
      disabled,
      icon,
      loading,
      radius,
      shadow,
      shadowColor,
      size,
      tone,
      variant,
      withRing,
      ...additionalProps
    } = {
      ...defaultProps,
      ...useInputGroupContext(),
      ...variantProps,
      ...props,
    };
    const { open, withChevron, chevronRotation } = {
      ...useDropdownContext(),
    };

    const classes = useMemo(() => {
      return twMerge(
        theme.base({
          animation,
          className,
          color,
          disabled,
          icon,
          loading,
          radius,
          shadow,
          shadowColor,
          size,
          tone,
          withRing,
        })
      );
    }, [
      animation,
      className,
      color,
      disabled,
      icon,
      loading,
      radius,
      shadow,
      shadowColor,
      size,
      theme,
      tone,
      withRing,
      variant,
    ]);
    const chevronClasses = withChevron ? theme.chevron({ open, size, chevronRotation }) : '';
    const spinnerClasses = loading ? theme.spinner({ size }) : '';

    const Component = as || 'button';
    const id = usePropId(props.id);
    const type = props.type || Component === 'button' ? 'button' : undefined;

    return (
      <Component
        id={id}
        ref={ref}
        type={type}
        className={`${classes}`}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        {...additionalProps}
      >
        {loading && <Spinner className={spinnerClasses} />}
        {children}
        {withChevron && <ChevronDownIcon className={chevronClasses} />}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;
