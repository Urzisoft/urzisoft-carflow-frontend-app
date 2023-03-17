import { WelcomePageConfigType } from "./Types";

export class Config {
    private static instance: Config;
    private _WelcomePageConfig!: WelcomePageConfigType;

    private constructor() {}

    public static getInstance(): Config {
        if (!Config.getInstance()) {
            Config.instance = new Config();
        }

        return Config.getInstance();
    }

    public get WelcomePageConfig(): WelcomePageConfigType {
        return this._WelcomePageConfig;
    }

    public set WelcomePageConfig(welcomePageConfig: WelcomePageConfigType) {
        this._WelcomePageConfig = welcomePageConfig;
    }
}