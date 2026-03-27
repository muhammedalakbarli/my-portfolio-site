const _FP_PROJECT_ID = "0y15vxbi";
const _FP_DATASET    = "production";

function sanityImageUrl(ref, width) {
  if (!ref) return null;
  const clean = ref.replace(/^image-/, '').replace(/-([a-z]+)$/, '.$1');
  const url = `https://cdn.sanity.io/images/${_FP_PROJECT_ID}/${_FP_DATASET}/${clean}`;
  return width ? url + `?w=${width}&fit=max&auto=format` : url;
}

async function fetchAndRenderProjects() {
  const query = encodeURIComponent(
    '*[_type == "project"] | order(order asc, _createdAt asc) {name, description, image, tags, github, live, featured}'
  );
  const url = `https://${_FP_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${_FP_DATASET}?query=${query}`;

  try {
    const res = await fetch(url);
    if (!res.ok) return;
    const { result } = await res.json();
    if (!Array.isArray(result) || result.length === 0) return;

    PROJECTS.splice(0, PROJECTS.length);
    result.forEach((p, i) => {
      PROJECTS.push({
        id:     2000 + i,
        name:   p.name   || '',
        desc:   p.description || '',
        image:  sanityImageUrl(p.image?.asset?._ref, 600),
        tags:   Array.isArray(p.tags) ? p.tags : [],
        github: p.github || null,
        live:   p.live   || null,
        star:   !!p.featured,
      });
    });

    renderProjects();
  } catch (err) {
    console.error('Layihələr gətirilərkən xəta:', err);
  }
}

document.addEventListener('DOMContentLoaded', fetchAndRenderProjects);
