export type FetchResponseGET<data, param> = {
    response: data | null;
    error: any;
    loading: boolean;
    fetcher: (arg: param, token?: string, isFormData?: boolean) => any;
};

export type FetchResponsePOST<data, param> = {
    response: data | null;
    error: any;
    loading: boolean;
    fetcher: (arg: param) => any;
};

export type BrandType = {
    name: string;
    description: string;
};

export type ModelType = {
    name: string;
};

export type CarType = {
    id: number;
    storageImageUrl: string;
    username: string;
    brand: BrandType;
    model: ModelType;
    generation: string;
    year: number;
    gasType: string;
    mileage: string;
    gearbox: string;
    power: number;
    engineSize: number;
    driveWheel: string;
    licensePlate: string;
};

export type CityType = {
    id: number;
    storageImageUrl: string;
    name: string;
    county: string;
};

export type CarWashStationType = {
    id: number;
    storageImageUrl: string;
    name: string;
    standardPrice: number;
    premiumPrice: number;
    city: CityType;
    address: string;
    rank: string;
    isSelfWash: boolean;
};

export type PriceType = {
    id: number;
    value: number;
    fuel: string;
    date: string;
};

export type FuelType = {
    id: number;
    name: string;
    description: string;
    type: string;
    quality: string;
};

export type GasStationsType = {
    id: number;
    storageImageUrl: string;
    name: string;
    fuel: FuelType;
    city: CityType;
    address: string;
    rank: string;
};

export type CarServicesType = {
    id: number;
    storageImageUrl: string;
    name: string;
    description: string;
    address: string;
    mainBrand: BrandType;
};

export type WelcomePageConfigType = {
    title: string;
    description: string;
    buttonText: string;
};

export type SideBarConfigType = {
    path: string;
    name: string;
    icon: JSX.Element;
};
export type CarDetailsConfigType = {
    name: string;
    value: string;
    icon: JSX.Element;
};

export type AuthResponseType = {
    token: string;
    expiration: string;
    status?: number;
};

export type CredentialsType = {
    username: string;
    password: string;
};