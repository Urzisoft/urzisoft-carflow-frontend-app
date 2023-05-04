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

export type Brand = {
    name: string;
    description: string;
};

export type Model = {
    name: string;
};

export type Car = {
    id?: number;
    brand: Brand;
    model: Model;
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

export type AuthResponseType = {
    token: string;
    expiration: string;
};

export type CredentialsType = {
    username: string;
    password: string;
};