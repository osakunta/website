export async function fetchNavData() {
  const collectionName: string = "Nav";
  const url = `${process.env.DIRECTUS_URL}items/${collectionName}`;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(url, {
      method: "GET",
      headers,
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
    return { data: [] };
  }
}
