export const getServicesStationStatusByCurrentTime = (): string => {
    const currentHour = new Date().getHours();
    return (currentHour >= 8 && currentHour < 20) ? "Open" : "Closed";
}

export const getWashStationsStatusByCurrentTime = (): string => {
    const currentHour = new Date().getHours();
    return (currentHour >= 9 && currentHour < 17) ? "Open" : "Closed";
}

export const generateBoundaryString = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const boundaryLength = 32;
    let boundary = '';

    for (let i = 0; i < boundaryLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        boundary += characters.charAt(randomIndex);
    }

    return boundary;
}