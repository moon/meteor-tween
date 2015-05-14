//------------------------------
// Description
//------------------------------

Package.describe({
  name: 'moonco:tween',
  summary: 'Moon tweening engine',
  version: '0.0.2',
  git: 'https://github.com/moon/meteor-tween'
});

//------------------------------
// Definition
//------------------------------

Package.onUse(function(api) {

  api.versionsFrom('1.0.4.2');

  //------------------------------
  // Exports
  //------------------------------

  api.export('Tween');

  //------------------------------
  // Dependancies
  //------------------------------

  api.use([

  ]);

  //------------------------------
  // Files
  //------------------------------

  api.addFiles([

    'tween/tween.js'

  ]);

});