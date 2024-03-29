const backendEnvironment = 'https://localhost:7088/';
const routeBase = 'api';
const authRouteBase = 'auth';
const id = ':id';

export const requestUrls = {
    brands: `${backendEnvironment}${routeBase}/brands`,
    brand: `${backendEnvironment}${routeBase}/brands/${id}`,

    models: `${backendEnvironment}${routeBase}/models`,
    model: `${backendEnvironment}${routeBase}/models/${id}`,

    cars: `${backendEnvironment}${routeBase}/cars`,
    car: `${backendEnvironment}${routeBase}/cars/${id}`,

    cities: `${backendEnvironment}${routeBase}/cities`,
    city: `${backendEnvironment}${routeBase}/cities/${id}`,

    carWashStations: `${backendEnvironment}${routeBase}/car-wash-stations`,
    carWashStation: `${backendEnvironment}${routeBase}/car-wash-stations/${id}`,

    prices: `${backendEnvironment}${routeBase}/prices`,
    fuel: `${backendEnvironment}${routeBase}/fuels/${id}`,

    gasStations: `${backendEnvironment}${routeBase}/gas-stations`,
    gasStation: `${backendEnvironment}${routeBase}/gas-stations/${id}`,

    carServices: `${backendEnvironment}${routeBase}/car-services`,
    carService: `${backendEnvironment}${routeBase}/car-services/${id}`,

    fuels: `${backendEnvironment}${routeBase}/fuels`,

    authRegister: `${backendEnvironment}${routeBase}/${authRouteBase}/register`,
    authLogin: `${backendEnvironment}${routeBase}/${authRouteBase}/login`,
    changePassword: `${backendEnvironment}${routeBase}/${authRouteBase}/change-password`
};