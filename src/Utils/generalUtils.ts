export const getStationStatusByCurrentTime = (): string => {
    const currentHour = new Date().getHours();
    return (currentHour >= 8 && currentHour < 20) ? "Open" : "Closed";
}