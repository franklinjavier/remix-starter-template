import { type MetaFunction } from '@remix-run/node'
import { Title } from '~/components/title'

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix Starter Template' },
    { name: 'description', content: 'Remix Starter Template' },
  ]
}

export default function Index() {
  return (
    <main>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <Title>Remix Starter Template</Title>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
      </div>
    </main>
  )
}
