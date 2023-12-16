import path from 'node:path'
import fs from 'node:fs'
import { marked } from 'marked'

const blogsDir = path.resolve(__dirname, 'blogs')

const posts = fs.readdirSync(blogsDir)
  .filter(file => file.endsWith('.md'))
  .map(file => {
    const md = fs.readFileSync(path.resolve(blogsDir, file), 'utf-8')
    const html = marked(md)
    const [id, title] = path.basename(file, '.md').split('-')
    return {
      id,
      html,
      title,
    }
  })

export default {
  getRoutes: async () => {

    return [
      {
        path: '/',
        getData: () => ({
          posts,
        }),
      },
      {
        path: '/blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          template: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
