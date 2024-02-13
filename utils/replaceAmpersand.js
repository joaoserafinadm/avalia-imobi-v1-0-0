

export function replaceAmpersand(url) {
    // Substituir "%26" por "&"
    const updatedUrl = url.replace(/&/g, '%26');
    return updatedUrl;
}