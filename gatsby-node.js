const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      query PeterGQuery {
        allFile(sort: { order: ASC, fields: [name] }) {
          edges {
            node {
              name
            }
          }
        }
      }
    `).then(results => {
      results.data.allFile.edges.forEach(({ node }) => {
        createPage({
          path: `/${node.name}`,
          component: path.resolve("./src/templates/bookPageLayout.js"),
          context: {
            slug: node.name,
          },
        })
      })
      resolve()
    })
  })
}

/**`/bookpage/${node.frontmatter.title}`,
 * context: {
          slug: node.frontmatter.title,
        },
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// const path = require("path")

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return new Promise((resolve, reject) => {
//     graphql(`
//       query PeterGatsbyQuery {
//         allFile(sort: { order: ASC, fields: [name] }) {
//           edges {
//             node {
//               name
//             }
//           }
//         }
//       }
//     `).then(results => {
//       results.data.allFile.edges.node.forEach(({ node }) => {
//         createPage({
//           path: node.name,
//           component: path.resolve("./src/templates/bookPageLayout.js"),
//         })
//       })
//       resolve()
//     })
//   })
// }
