import { type MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [{ title: 'Remix Starter Template' }, { name: 'description', content: 'Remix Starter Template' }]
}

export default function Index() {
  return (
    <main>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Remix Starter Template
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
            sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
      </div>
    </main>
  )
}
