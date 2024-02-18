export const getData =async (url: str) => {
    const response = await fetch(url);
    return await response.json();
}