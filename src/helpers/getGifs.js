

export const getGifs = async (category) => {
    //encodeURI permite convertir un string en url, cambiando los espacios por %20.. etc
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=rtn70YIXfJmPAkS5TM7jLZ5la7eg7UfJ`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(({ id, title, images }) => {
        return {
            id,
            title,
            url: images?.downsized_medium.url
        }
    })

    return gifs;
}