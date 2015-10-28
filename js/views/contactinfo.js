
function processData(data) {
  return data.map(function(item) {
    return `
    <li>${item.title}</li>
    `
  }).join('');

}

function contactinfoTemplate(data) {
    return `
      <h2>Contact Info<h2>
      <ul>${processData(data)}</ul>
    `;
 }

export default contactinfoTemplate