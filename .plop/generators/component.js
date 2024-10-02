module.exports = function (plop) {
    plop.setGenerator('components', {
        description: 'React Component Generator',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name',
            },
        ],
        actions: [
            {
                type: 'add',
                path: '../src/components/{{ camelCase name }}/{{ pascalCase name }}.tsx',
                templateFile: 'templates/components/component.hbs',
            },
            // {
            //     type: 'add',
            //     path: '../src/components/{{ camelCase name }}/{{ pascalCase name }}.styles.ts',
            //     templateFile: 'templates/components/styles.hbs',
            // },
            {
                type: 'add',
                path: '../src/components/{{ camelCase name }}/__stories__/{{ pascalCase name }}.stories.tsx',
                templateFile: 'templates/components/stories.hbs',
            },
            {
                type: 'add',
                path: '../src/components/{{ camelCase name }}/index.ts',
                templateFile: 'templates/components/index.hbs',
            },
        ],
    })
}
