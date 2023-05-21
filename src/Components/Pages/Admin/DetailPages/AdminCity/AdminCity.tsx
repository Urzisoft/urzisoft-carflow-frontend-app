import { useNavigate, useParams } from "react-router-dom";
import useValidateUser from "../../../../../Hooks/useValidateUser";
import { requestUrls } from "../../../../../Backend/requestUrls";
import useGetCustomFetch from "../../../../../Hooks/useGetCustomFetch";
import { CityType } from "../../../../../Utils/Types";
import React, { useEffect, useState } from "react";
import {
    AdminDashboardContainer,
    AdminFormContainer,
    AdminFormDashboard, ExtraFormContainer
} from "../../AdminDashboard/AdminDashboard.css";
import { InputField } from "../../../../Common/InputField/InputField";
import { FormButton } from "../../../../Common/Authentication/Authentication.css";
import { PageRoutes } from "../../../../../Utils/Routes";
import { Colors } from "../../../../../Utils/cssMedia";
import usePostCustomFetch from "../../../../../Hooks/usePostCustomFetch";

export const AdminCity = () => {
    const { id } = useParams();
    const { token } = useValidateUser();
    const adminCityObjectRequestUrl = requestUrls.city.replace(':id', `${id}`);
    const { response: carCityResponse, fetcher: fetchCarCity } = useGetCustomFetch<CityType, string>(adminCityObjectRequestUrl);
    const {
        fetcher: sendPayload
    } = usePostCustomFetch<any, any>(adminCityObjectRequestUrl, 'PATCH');
    const navigate = useNavigate();

    const [city, setCity] = useState<CityType>();
    const {
        fetcher: deleteEndpoint,
    } = usePostCustomFetch<any, any>(`${requestUrls.cities}/${id}`, 'DELETE');

    useEffect(() => {
        fetchCarCity(token);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (carCityResponse) {
            setCity(carCityResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carCityResponse]);

    const [name, setName] = useState<string>();
    const [county, setCounty] = useState<string>();
    const [imageFile, setImageFile] = useState<File | null>(null);

    const handleInputNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleInputCountyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCounty(event.target.value);
    };

    const handleInputFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.[0]) {
            setImageFile(event.target.files?.[0]);
        }
    };

    const onSendButtonClick = () => {
        const formData = new FormData();
        name && formData.append('Name', name);
        county && formData.append('County', county);
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
                        placeholder={city?.name}
                        onChange={handleInputNameChange}
                    />
                    <InputField
                        type="text"
                        placeholder={city?.county}
                        onChange={handleInputCountyChange}
                    />
                    <InputField
                        type="file"
                        isFileInput={true}
                        onChange={handleInputFileChange}
                    />
                    <FormButton onClick={onSendButtonClick}>Update City</FormButton>
                    <FormButton onClick={onDeleteButtonClick}>Delete City</FormButton>
                    <FormButton onClick={() => navigate(PageRoutes.ADMIN_DASHBOARD)} backgroundColor={Colors.darkBlue}>Go back</FormButton>
                </AdminFormContainer>
            </AdminFormDashboard>
        </ExtraFormContainer>
    )
};