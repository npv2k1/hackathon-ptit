import React, { ReactNode } from 'react'
import classNames from 'classnames'
import { LazyImage } from './LazyImage'
import classed from '@lib/classed'
const Title = classed(
  'h3',
  'font-bold break-words typo-body text-theme-label-primary multi-truncate line-clamp-3'
)

export const CardTitle = classed(Title, 'my-2 break-word')

export const CardTextContainer = classed('div', 'flex flex-col mx-4')

export const CardImage = classed(LazyImage, 'rounded-xl h-40')

export const CardSpace = classed('div', 'flex-1')

export const CardLink = classed(
  'a',
  'absolute inset-0 w-full h-full focus-outline'
)

export const Card = classed(
  'article',
  'relative group flex flex-col p-2 rounded-2xl bg-white border hover:border-gray-500 shadow-2 cursor-pointer'
)

export const CardHeader = classed('div', 'flex h-8 items-center my-1 -mx-1.5')

export const CardNotification = classed(
  'div',
  'px-4 py-1.5 -mx-1.5 rounded-10 bg-theme-label-primary text-theme-label-invert typo-callout font-bold'
)
