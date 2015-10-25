Package.describe({
    name: 'polyroid:iron-form-element-behavior',
    version: '1.0.5',
    summary: 'Enables a custom element to be included in an iron-form',
    git: 'https://github.com/Polyroid/iron-form-element-behavior.git',
    documentation: null
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');

    api.use([
        'polyroid:polymer@1.0.0'
    ], 'client');

    api.addAssets([
        'iron-form-element-behavior.html'
    ], 'client');
});
