export async function getData() {
  try {
    const response = await fetch(
      'https://itunes.apple.com/search?term=jack+johnson',
    );
    const json = await response.json();
    console.log(json);
    return json;
  } catch (err) {
    throw err;
  }
}
