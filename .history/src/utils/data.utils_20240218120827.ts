export const getData =async<t> (url: string): Promise<> => {
    const response = await fetch(url);
    return await response.json();
}