import { useNavigate, useParams } from "react-router-dom";
import useValidateUser from "../../../../../Hooks/useValidateUser";
import { requestUrls } from "../../../../../Backend/requestUrls";
import useGetCustomFetch from "../../../../../Hooks/useGetCustomFetch";
import { BrandType } from "../../../../../Utils/Types";
import React, { useEffect, useState } from "react";
import {
    AdminDashboardContainer, AdminFormContainer,
    AdminFormDashboard,
    ExtraFormContainer
} from "../../AdminDashboard/AdminDashboard.css";
import { InputField } from "../../../../Common/InputField/InputField";
import { FormButton } from "../../../../Common/Authentication/Authentication.css";
import { PageRoutes } from "../../../../../Utils/Routes";
import { Colors } from "../../../../../Utils/cssMedia";
import usePostCustomFetch from "../../../../../Hooks/usePostCustomFetch";

export const AdminBrand = () => {
    const { id } = useParams();
    const { token } = useValidateUser();
    const brandObjectRequestUrl = requestUrls.brand.replace(':id', `${id}`);
    const { response: brandResponse, fetcher: fetchBrand } = useGetCustomFetch<BrandType, string>(brandObjectRequestUrl);
    const {
        fetcher: sendPayload
    } = usePostCustomFetch<any, any>(brandObjectRequestUrl, 'PATCH');
    const navigate = useNavigate();
    const {
        fetcher: deleteEndpoint,
    } = usePostCustomFetch<any, any>(`${requestUrls.brands}/${id}`, 'DELETE');

    const [brand, setBrand] = useState<BrandType>();
    const [name, setName] = useState<string | undefined>();
    const [description, setDescription] = useState<string | undefined>();
    const [imageFile, setImageFile] = useState<File | null>();

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

    const handleInputNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleInputDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleInputFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.[0]) {
            setImageFile(event.target.files?.[0]);
        }
    };

    const onSendButtonClick = () => {
        const formData = new FormData();
        name && formData.append('Name', name);
        description && formData.append('Description', description);
        imageFile && formData.append('File', imageFile);

        sendPayload(formData, token, true);
    };

    const onDeleteButtonClick = () => {
        deleteEndpoint(undefined, token);
    };

    return (
        <ExtraFormContainer>
            <AdminFormDashboard>
                <AdminFormContainer>
                    <InputField
                        type="text"
                        placeholder={brand?.name}
                        onChange={handleInputNameChange}
                    />
                    <InputField
                        type="text"
                        placeholder={brand?.description}
                        onChange={handleInputDescriptionChange}
                    />
                    <InputField
                        type="file"
                        isFileInput={true}
                        onChange={handleInputFileChange}
                    />
                    <FormButton onClick={onSendButtonClick}>Update brand</FormButton>
                    <FormButton onClick={onDeleteButtonClick}>Delete brand</FormButton>
                    <FormButton onClick={() => navigate(PageRoutes.ADMIN_DASHBOARD)} backgroundColor={Colors.darkBlue}>Go back</FormButton>
                </AdminFormContainer>
            </AdminFormDashboard>
        </ExtraFormContainer>
    )
};