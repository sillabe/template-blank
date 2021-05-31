const { FilesystemSortingPlugin } = require('@sillabe/filesystem-sorting-plugin');
const { PrivateNodesPlugin } = require('@sillabe/private-nodes-plugin');
const { MarkdownPostsPlugin } = require('@sillabe/markdown-posts-plugin');

module.exports = {
    content: 'content',
    build: 'build',
    views: 'views',
    public: 'public',
    templateEngine: 'nunjucks',
    plugins: [
        new FilesystemSortingPlugin(),
        new PrivateNodesPlugin(),
        new MarkdownPostsPlugin(),
    ],
};
