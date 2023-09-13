import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ElementType,
  type ReactNode,
  type Ref,
} from 'react'
import { useEvent } from '../../hooks/use-event'
import { useId } from '../../hooks/use-id'
import { useIsoMorphicEffect } from '../../hooks/use-iso-morphic-effect'
import { useSyncRefs } from '../../hooks/use-sync-refs'
import type { Props } from '../../types'
import { NonNullableType } from '../../types/index'
import { forwardRefWithAs, render, type HasDisplayName, type RefProp } from '../../utils/render'

// ---

interface SharedData {
  slot?: NonNullableType
  name?: string
  props?: NonNullableType
}

const LabelContext = createContext<({ register(value: string): () => void } & SharedData) | null>(
  null
)

function useLabelContext() {
  const context = useContext(LabelContext)
  if (context === null) {
    const err = new Error('You used a <Label /> component, but it is not inside a relevant parent.')
    // @ts-ignore
    if (Error.captureStackTrace) Error.captureStackTrace(err, useLabelContext)
    throw err
  }
  return context
}

interface LabelProviderProps extends SharedData {
  children: ReactNode
}

export function useLabels(): [string | undefined, (props: LabelProviderProps) => JSX.Element] {
  const [labelIds, setLabelIds] = useState<string[]>([])

  return [
    // The actual id's as string or undefined.
    labelIds.length > 0 ? labelIds.join(' ') : undefined,

    // The provider component
    useMemo(() => {
      return function LabelProvider(props: LabelProviderProps) {
        const register = useEvent((value: string) => {
          setLabelIds((existing) => [...existing, value])

          return () =>
            setLabelIds((existing) => {
              const clone = existing.slice()
              const idx = clone.indexOf(value)
              if (idx !== -1) clone.splice(idx, 1)
              return clone
            })
        })

        const contextBag = useMemo(
          () => ({
            register,
            slot: props.slot,
            name: props.name,
            props: props.props,
          }),
          [register, props.slot, props.name, props.props]
        )

        return <LabelContext.Provider value={contextBag}>{props.children}</LabelContext.Provider>
      }
    }, [setLabelIds]),
  ]
}

// ---

const DEFAULT_LABEL_TAG = 'label' as const

export type LabelProps<TTag extends ElementType = typeof DEFAULT_LABEL_TAG> = Props<TTag> & {
  passive?: boolean
}

function LabelFn<TTag extends ElementType = typeof DEFAULT_LABEL_TAG>(
  props: LabelProps<TTag>,
  ref: Ref<HTMLLabelElement>
) {
  const internalId = useId()
  const { id = `headlessui-label-${internalId}`, passive = false, ...theirProps } = props
  const context = useLabelContext()
  const labelRef = useSyncRefs(ref)

  useIsoMorphicEffect(() => context.register(id), [id, context.register])

  const ourProps = { ref: labelRef, ...context.props, id }

  if (passive) {
    if ('onClick' in ourProps) {
      delete (ourProps as any)['htmlFor']
      delete (ourProps as any)['onClick']
    }

    if ('onClick' in theirProps) {
      delete (theirProps as any)['onClick']
    }
  }

  return render({
    ourProps,
    theirProps,
    slot: context.slot || {},
    defaultTag: DEFAULT_LABEL_TAG,
    name: context.name || 'Label',
  })
}

// ---

export interface _internal_ComponentLabel extends HasDisplayName {
  <TTag extends ElementType = typeof DEFAULT_LABEL_TAG>(
    props: LabelProps<TTag> & RefProp<typeof LabelFn>
  ): JSX.Element
}

const LabelRoot = forwardRefWithAs(LabelFn) as unknown as _internal_ComponentLabel

export const Label = Object.assign(LabelRoot, {
  //
})
