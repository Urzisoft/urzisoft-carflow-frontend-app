const backendEnvironment = 'https://localhost:7088/';
const routeBase = 'api';
const id = ':id';

export const requestUrls = {
    cars: `${backendEnvironment}${routeBase}/cars`,
    car: `${backendEnvironment}${routeBase}/cars/${id}`,

    cities: `${backendEnvironment}${routeBase}/cities`,
    city: `${backendEnvironment}${routeBase}/cities/${id}`,
};