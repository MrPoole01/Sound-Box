getSounds();

async function getSounds() {
  const response = await fetch('./sounds.json');
  const json = await response.json();
  console.log(json);
}
