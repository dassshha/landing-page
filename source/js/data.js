export const fillLocalStorage = (lamps) => {
    localStorage.clear();
    lamps.forEach(lamp => {
        localStorage.setItem(lamp.id, JSON.stringify(lamp));
    });
    return lamps;
}
