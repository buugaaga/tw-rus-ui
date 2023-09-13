/* eslint-disable react-hooks/rules-of-hooks */
import { DependencyList, EffectCallback, useEffect, useLayoutEffect } from 'react'
import { env } from '../utils/env.ts'

export const useIsoMorphicEffect = (effect: EffectCallback, deps?: DependencyList | undefined) => {
  if (env.isServer) {
    useEffect(effect, deps)
  } else {
    useLayoutEffect(effect, deps)
  }
}