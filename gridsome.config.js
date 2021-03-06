// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = {
    siteName: 'SolarLab Sport',
    plugins: [{
        use: '@gridsome/source-wordpress',
        options: {
            baseUrl: 'https://admin.solarlab.cc/',
            apiBase: 'wp-json',
            typeName: 'WordPress',
            perPage: 100,
            concurrent: 10,
        }
    },
        {
            use: 'gridsome-plugin-svg'
        }
    ],
    templates: {
        WordPressActivity: '/events/:slug',
        WordPressNews: '/news/:slug',
        WordPressAlbom: '/media/:slug'
    }
};
