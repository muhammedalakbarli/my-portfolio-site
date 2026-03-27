const PROJECT_ID = "0y15vxbi";
const DATASET = "production";
const QUERY = encodeURIComponent('*[_type == "post"] | order(publishedAt desc) {title, slug, publishedAt, body}');
const SANITY_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

function ptToText(body) {
  if (!Array.isArray(body)) return '';
  return body
    .filter(block => block._type === 'block' && Array.isArray(block.children))
    .map(block => block.children.map(span => span.text || '').join(''))
    .join('\n\n');
}

async function fetchAndRenderBlogs() {
  try {
    const response = await fetch(SANITY_URL);
    if (!response.ok) return;
    const { result } = await response.json();
    if (!Array.isArray(result) || result.length === 0) return;

    result.forEach((post, i) => {
      const fullText = ptToText(post.body);
      const excerpt = fullText.slice(0, 150).trim() + (fullText.length > 150 ? '…' : '');
      const date = post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
        : '';
      POSTS.push({
        id:      1000 + i,
        date,
        tag:     'Blog',
        title:   post.title || '',
        excerpt,
        content: fullText,
      });
    });

    renderPosts();
  } catch (err) {
    console.error('Bloqlar gətirilərkən xəta:', err);
  }
}

document.addEventListener('DOMContentLoaded', fetchAndRenderBlogs);
