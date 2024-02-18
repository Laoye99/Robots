export const getData =async<T> (url: string): Promise<> => {
    const response = await fetch(url);
    return await response.json();
}