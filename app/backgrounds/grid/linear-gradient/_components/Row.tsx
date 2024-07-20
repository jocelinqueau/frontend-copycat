import React from 'react'
import { HorizontalLinearLine } from './HorizontalLinearLine'

const Dot = (
  <div className='w-full h-full bg-foreground/30 rounded-full flex flex-col justify-center items-center '>
    <div className='m-2 flex-1 min-w-2 min-h-2 bg-foreground/60 rounded-full'>
    </div>
  </div>
)

interface RowProps {
  dotCount: number
  id: string | number
  delay?: number
  duration?: number
}
export const Row = ({ dotCount, id, delay, duration }: RowProps) => {
  return (
    <>
      {Dot}
      {Array.from({ length: dotCount - 1 }).map((_, index) => (
        <React.Fragment key={`row-${id}-${index}`}>
          <HorizontalLinearLine delay={delay} duration={duration} />
          {Dot}
        </React.Fragment>
      ))}
    </>
  )
}