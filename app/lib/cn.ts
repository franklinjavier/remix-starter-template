import { twMerge } from 'tailwind-merge'

export function cn(...args: unknown[]): string {
  return twMerge(
    args
      .flat()
      .filter((x) => typeof x === 'string')
      .join(' '),
  )
}
