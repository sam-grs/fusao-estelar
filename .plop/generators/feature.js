module.exports = function (plop) {
    plop.setGenerator('features', {
        description: 'React Feature Generator',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Feature name',
            },
        ],
        actions: [
            {
                type: 'add',
                path: '../src/features/{{ camelCase name }}/{{ pascalCase name }}.tsx',
                templateFile: 'templates/features/feature.hbs',
            },
            // {
            //     type: 'add',
            //     path: '../src/features/{{ camelCase name }}/{{ pascalCase name }}.styles.ts',
            //     templateFile: 'templates/features/styles.hbs',
            // },
            {
                type: 'add',
                path: '../src/features/{{ camelCase name }}/__stories__/{{ pascalCase name }}.stories.tsx',
                templateFile: 'templates/features/feature-stories.hbs',
            },
            {
                type: 'add',
                path: '../src/features/{{ camelCase name }}/index.ts',
                templateFile: 'templates/features/index.hbs',
            },
            {
                type: 'add',
                path: '../src/app/{{ camelCase name }}/{{ kebabCase name }}.tsx',
                templateFile: 'templates/features/pages.hbs',
            },
        ],
    })
}
