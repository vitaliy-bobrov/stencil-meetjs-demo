exports.config = {
  bundles: [
    {
      components: [
        'menu-list',
        'menu-list-item',
        'menu-list-demo'
      ]
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
