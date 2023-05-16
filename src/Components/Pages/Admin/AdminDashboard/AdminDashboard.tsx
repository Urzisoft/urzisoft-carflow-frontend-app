import useGetCustomFetch from "../../../../Hooks/useGetCustomFetch";
import { BrandType, ModelType } from "../../../../Utils/Types";
import { requestUrls } from "../../../../Backend/requestUrls";
import { useEffect, useState } from "react";
import useValidateUser from "../../../../Hooks/useValidateUser";
import {
    AdminBreaker,
    AdminContainerItems,
    AdminDashboardContainer,
    AdminSectionContainer,
    AdminSectionTitle
} from "./AdminDashboard.css";
import { PageRoutes } from "../../../../Utils/Routes";

export const AdminDashboard = () => {
    const { response: brandsResponse, fetcher: fetchBrands } = useGetCustomFetch<BrandType[], string>(requestUrls.brands);
    const { response: modelsResponse, fetcher: fetchModels } = useGetCustomFetch<ModelType[], string>(requestUrls.models);
    const { token } = useValidateUser();

    const [brands, setBrands] = useState<BrandType[]>([]);
    const [models, setModels] = useState<ModelType[]>([]);

    useEffect(() => {
        fetchBrands(token);
        fetchModels(token);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (brandsResponse) {
            setBrands(brandsResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [brandsResponse]);

    useEffect(() => {
        if (modelsResponse) {
            setModels(modelsResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modelsResponse]);

    return (
        <AdminDashboardContainer>
            <AdminSectionContainer>
                <AdminSectionTitle>Brands</AdminSectionTitle>
                {brands?.map((brand) => {
                    return (
                        <>
                            <AdminContainerItems to={PageRoutes.ADD_BRAND}>
                                {brand.id} - {brand.name}
                            </AdminContainerItems>
                            <div>&nbsp;</div>
                        </>
                    )
                })}
            </AdminSectionContainer>
            <AdminBreaker />
            <AdminSectionContainer>
                <AdminSectionTitle>Models</AdminSectionTitle>
                {models?.map((model) => {
                    return (
                        <>
                            <AdminContainerItems to={PageRoutes.ADD_BRAND}>
                                {model.id} - {model.name}
                            </AdminContainerItems>
                            <div>&nbsp;</div>
                        </>
                    )
                })}
            </AdminSectionContainer>
        </AdminDashboardContainer>
    )
}