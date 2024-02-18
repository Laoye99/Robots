export const getData =async (url: string): Pr => {
    const response = await fetch(url);
    return await response.json();
}