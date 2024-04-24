import { quote as escape } from 'shell-quote'
import { ESLint } from 'eslint'

const eslint = new ESLint()
const isWin = process.platform === 'win32';

const escapeFileNamesForPrettier = (filenames) =>
  filenames
    .map((filename) => `"${isWin ? filename : escape([filename])}"`)
    .join(' ');

export default {
  '**/*.{js,jsx,ts,tsx}': (filenames) => {
    console.log(filenames);
    return [
      `pnpm lint --fix ${filenames
        .filter((file) => !eslint.isPathIgnored(file))
        .map((f) => `"${f}"`)
        .join(' ')}`,
    ];
  },
  '**/*.{json,md,mdx,css,html,yml,yaml,scss}': (filenames) => {
    return [`prettier --write ${escapeFileNamesForPrettier(filenames)}`];
  },
};
