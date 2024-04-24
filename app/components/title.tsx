import { cn } from '~/lib/cn'

type TitleProps = React.ComponentProps<'h1'>
export function Title({ className, ...props }: TitleProps) {
  return (
    <h1
      className={cn(
        'text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl',
      )}
      {...props}
    />
  )
}
