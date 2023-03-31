export type FetchResponse<data, param> = {
    response: data | null;
    error: any;
    loading: boolean;
    fetcher: () => any;
};

export type Brand = {

}

export type Model = {

}

export type Car = {
    id: number,
    brand: Brand,
    model: Model,
    generation: string,
    year: number,
    gasType: string,
    mileage: string,
    gearbox: string,
    power: number,
    engineSize: number,
    driveWheel: string,
    licensePlate: string,
}

export type WelcomePageConfigType = {
    title: string;
    description: string;
    buttonText: string;
};
