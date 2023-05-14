export const getServicesStationStatusByCurrentTime = (): string => {
    const currentHour = new Date().getHours();
    return (currentHour >= 8 && currentHour < 20) ? "Open" : "Closed";
}

export const getWashStationsStatusByCurrentTime = (): string => {
    const currentHour = new Date().getHours();
    return (currentHour >= 9 && currentHour < 17) ? "Open" : "Closed";
}