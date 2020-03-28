import _ from 'lodash'
import all from '../posts/*.md'

export const posts = buildPosts()
const tags = []

buildTags()

export function findPost(permalink) {
  return _.find(posts, {permalink})
}

export function findByTag(tag) {
  return tags[tag]
}

function buildPosts() {
  return _.chain(all)
    .map(transform)
    .orderBy('date', 'desc')
    .value()
}

function buildTags() {
  posts.forEach(post => {
    post.tags.forEach(tag => {
      if (!tags[tag]) {
        tags[tag] = []
      }

      tags[tag].push(post)
    })
  })
}

function transform({filename, metadata, html}) {
  const permalink = filename.replace(/.md$/, '')
  const date = new Date(metadata.date)
  const tags = (metadata.tags || '').split(',').map(s => s.trim())

  return {...metadata, tags, filename, permalink, html, date}
}
