var ghpages = require('gh-pages');

console.log('publish pages');

ghpages.publish('public', {
    repo: 'https://github.com/ZeusWesley/chucknorris-spa.git',
    branch: 'deploy'
}, function(err) {

    console.log(err);

    console.log('pages published with success!');
})