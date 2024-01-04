import path from 'node:path'
import fs from 'node:fs'
import { marked } from 'marked'
import * as cheerio from 'cheerio'

const blogsDir = path.resolve(__dirname, 'blogs')
const termsDir = path.resolve(__dirname, 'terms')

const posts = fs.readdirSync(blogsDir)
  .filter(file => file.endsWith('.md') || file.endsWith('.html'))
  .map(file => {
    const [id, title] = path.basename(file, path.extname(file)).split('-')
    const isMarkdown = file.endsWith('.md')
    const content = fs.readFileSync(path.resolve(blogsDir, file), 'utf-8')
    const html = (isMarkdown ? marked(content) : String(content))
      .replaceAll('../public/', '/')

    const $ = cheerio.load(html)

    const img = $('img').first()

    // Remove <style> tags
    $('style').remove();

    const allTexts = $.text()
    const lines = allTexts.split('\n')
      .map(l => l.trim())
      .filter(Boolean)

    const description = lines.slice(1).join('').slice(0, 100) ?? ''
    return {
      id,
      html,
      title,
      description: description,
      thumbnail: img?.attr('src'),
    }
  })
  .sort((a, b) => Number(b.id) - Number(a.id))

const term = {
  content: fs.readFileSync(path.resolve(termsDir, 'term.html'), 'utf-8')
}

const siteRoot = 'https://tomo-c-k.netlify.app'

export default {
  siteRoot,
  getSiteData: () => ({
    appTitle: 'とも知育工房',
    appDescription: `親子'とも'に楽しくて知育になる！ 未就学児向けの知育プリントや素材を公開中！`,
    siteRoot,
  }),
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
      {
        path: '/term',
        getData: () => term,
      }
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
