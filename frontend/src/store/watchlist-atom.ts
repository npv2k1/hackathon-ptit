import { atom } from 'jotai'
import { atomWithStorage, RESET } from 'jotai/utils'

export const watchlistAtom = atomWithStorage("watchlist",[
  'FPT',
  'BIV',
  'BID',
  'CVT',
  'DBC',
  'SMC',
])
