'use client'

import { useEffect, useState } from 'react'

type Dimensions = {
  width: number
  height: number
}

export function useDeviceSize(): Dimensions {
  const [deviceSize, setDeviceSize] = useState<Dimensions>({ width: 0, height: 0 })

  const resize = (): void => {
    setDeviceSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    resize()

    window.addEventListener('resize', resize)
    return (): void => window.removeEventListener('resize', resize)
  }, [])

  return deviceSize
}
