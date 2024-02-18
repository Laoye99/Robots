export const getData =async (url: string): Promise< => {
    const response = await fetch(url);
    return await response.json();
}