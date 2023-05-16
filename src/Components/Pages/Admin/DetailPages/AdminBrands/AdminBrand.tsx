import { useParams } from "react-router-dom";
import useValidateUser from "../../../../../Hooks/useValidateUser";
import { requestUrls } from "../../../../../Backend/requestUrls";
import useGetCustomFetch from "../../../../../Hooks/useGetCustomFetch";
import { BrandType } from "../../../../../Utils/Types";
import { useEffect, useState } from "react";
import { AdminDashboardContainer } from "../../AdminDashboard/AdminDashboard.css";

export const AdminBrand = () => {
    const { id } = useParams();
    const { token } = useValidateUser();
    const brandObjectRequestUrl = requestUrls.brand.replace(':id', `${id}`);
    const { response: brandResponse, fetcher: fetchBrand } = useGetCustomFetch<BrandType, string>(brandObjectRequestUrl);

    const [brand, setBrand] = useState<BrandType>();

    useEffect(() => {
        fetchBrand(token);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (brandResponse) {
            setBrand(brandResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [brandResponse]);

    return (
        <AdminDashboardContainer>
            <p>{brand?.name}</p>
            <p>{brand?.description}</p>
            <p>{brand?.storageImageUrl}</p>
        </AdminDashboardContainer>
    )
};