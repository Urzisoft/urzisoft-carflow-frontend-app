import { useState } from "react";
import { FetchResponse } from "../Utils/Types";

const useGetCustomFetch = <Data extends any, Param extends any>(url: RequestInfo): FetchResponse<Data, Param>  => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [apiData, setApiData] = useState<Data | null>(null);
    const [serverError, setServerError] = useState(null);

    const fetcher = async () => {
        setIsLoading(true);
        try {
            const request = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const response = await request.json();

            if (response.errors) {
                setServerError(response);
            } else {
                setApiData(response);
            }

            setIsLoading(false);
        } catch (error: any) {
            setServerError(error);
            setIsLoading(false);
        }
    };

    return {
        response: apiData,
        error: serverError,
        loading: isLoading,
        fetcher
    };
}

export default useGetCustomFetch;