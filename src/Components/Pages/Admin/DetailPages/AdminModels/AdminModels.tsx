import { useParams } from "react-router-dom";
import useValidateUser from "../../../../../Hooks/useValidateUser";
import { requestUrls } from "../../../../../Backend/requestUrls";
import useGetCustomFetch from "../../../../../Hooks/useGetCustomFetch";
import { BrandType, ModelType } from "../../../../../Utils/Types";
import { useEffect, useState } from "react";
import { AdminDashboardContainer } from "../../AdminDashboard/AdminDashboard.css";

export const AdminModels = () => {
    const { id } = useParams();
    const { token } = useValidateUser();
    const modelObjectRequestUrl = requestUrls.model.replace(':id', `${id}`);
    const { response: modelResponse, fetcher: fetchModel } = useGetCustomFetch<ModelType, string>(modelObjectRequestUrl);

    const [model, setModel] = useState<ModelType>();

    useEffect(() => {
        fetchModel(token);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (modelResponse) {
            setModel(modelResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modelResponse]);

    return (
        <AdminDashboardContainer>
            <p>{model?.name}</p>
        </AdminDashboardContainer>
    )
};