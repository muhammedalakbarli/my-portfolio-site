const _FC_PROJECT_ID = "0y15vxbi";
const _FC_DATASET    = "production";

function sanityImageUrlCert(ref, width) {
  if (!ref) return null;
  const clean = ref.replace(/^image-/, '').replace(/-([a-z]+)$/, '.$1');
  const url = `https://cdn.sanity.io/images/${_FC_PROJECT_ID}/${_FC_DATASET}/${clean}`;
  return width ? url + `?w=${width}&fit=max&auto=format` : url;
}

async function fetchAndRenderCerts() {
  const query = encodeURIComponent(
    '*[_type == "certificate"] | order(order asc, _createdAt asc) {name, issuer, date, image, link}'
  );
  const url = `https://${_FC_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${_FC_DATASET}?query=${query}`;

  try {
    const res = await fetch(url);
    if (!res.ok) return;
    const { result } = await res.json();
    if (!Array.isArray(result) || result.length === 0) return;

    CERTIFICATES.splice(0, CERTIFICATES.length);
    result.forEach(c => {
      CERTIFICATES.push({
        name:   c.name   || '',
        issuer: c.issuer || '',
        date:   c.date   || '',
        image:  sanityImageUrlCert(c.image?.asset?._ref, 400),
        link:   c.link   || null,
        icon:   '◆',
      });
    });

    renderCerts();
  } catch (err) {
    console.error('Sertifikatlar gətirilərkən xəta:', err);
  }
}

document.addEventListener('DOMContentLoaded', fetchAndRenderCerts);
