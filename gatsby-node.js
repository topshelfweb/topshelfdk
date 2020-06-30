const { resolve } = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = function({ actions, graphql }) {
	const { createPage } = actions;

	return graphql(`
		{
			allMarkdownRemark(limit: 1000) {
				edges {
					node {
						id
						fields {
							slug
						}
						frontmatter {
							templateKey
						}
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			result.errors.forEach(error => console.error(error.toString()));
			return Promise.reject(result.errors);
		}

		const pages = result.data.allMarkdownRemark.edges;

		pages.forEach(edge => {
			const id = edge.node.id;
			createPage({
				path: edge.node.fields.slug,
				component: resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.js`),
				context: id
			});
		});

	});
};

exports.onCreateNode = function({ node, actions, getNode }) {
	const { createNodeField } = actions;
	fmImagesToRelative(node);

	if (node.internal.type === "MarkdownRemark") {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: "slug",
			node,
			value
		});
	}
};
