const componentsFolder = 'app/components/{{dashCase name}}'

const componentGenerator = {
  description: `Make a component`,
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your component name?',
    },
  ],
  actions: [
    {
      type: 'add',
      path: `${componentsFolder}/index.ts`,
      templateFile: './.plop/component/index.ts.hbs',
    },
    {
      type: 'add',
      path: `${componentsFolder}/{{pascalCase name}}.test.tsx`,
      templateFile: './.plop/component/component.test.tsx.hbs',
    },
    {
      type: 'add',
      path: `${componentsFolder}/{{pascalCase name}}.tsx`,
      templateFile: './.plop/component/component.tsx.hbs',
    },
  ],
}

module.exports = componentGenerator
