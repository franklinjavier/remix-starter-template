import type { LinksFunction } from '@remix-run/node'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import './globals.css'

export const links: LinksFunction = () => [
  {
    rel: 'icon',
    href: '/logo.svg',
    type: 'image/svg',
  },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <Meta />
        <Links />
      </head>
      <body>
        {/**
         * This removes anything added to html from extensions, causing hydration issue
          https://github.com/remix-run/remix/issues/4822
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.querySelectorAll("html > script").forEach((s) => s.parentNode?.removeChild(s));`,
          }}
        />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
