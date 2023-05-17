import { useNavigate, useParams } from "react-router-dom";
import useValidateUser from "../../../../../Hooks/useValidateUser";
import { requestUrls } from "../../../../../Backend/requestUrls";
import useGetCustomFetch from "../../../../../Hooks/useGetCustomFetch";
import { FuelType } from "../../../../../Utils/Types";
import React, { useEffect, useState } from "react";
import {
    AdminFormContainer,
    AdminFormDashboard,
    ExtraFormContainer
} from "../../AdminDashboard/AdminDashboard.css";
import { InputField } from "../../../../Common/InputField/InputField";
import { FormButton } from "../../../../Common/Authentication/Authentication.css";
import { PageRoutes } from "../../../../../Utils/Routes";
import { Colors } from "../../../../../Utils/cssMedia";
import usePostCustomFetch from "../../../../../Hooks/usePostCustomFetch";

export const AdminFuel = () => {
    const { id } = useParams();
    const { token } = useValidateUser();
    const adminFuelObjectRequestUrl = requestUrls.fuel.replace(':id', `${id}`);
    const { response: carFuelResponse, fetcher: fetchCarFuel } = useGetCustomFetch<FuelType, string>(adminFuelObjectRequestUrl);
    const {
        fetcher: sendPayload
    } = usePostCustomFetch<any, any>(adminFuelObjectRequestUrl, 'PATCH');

    const [fuel, setFuel] = useState<FuelType>();
    const navigate = useNavigate();

    const [name, setName] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [type, setType] = useState<string>();
    const [quality, setQuality] = useState<string>();

    const handleInputNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleInputDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleInputTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value);
    }

    const handleInputQualityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuality(event.target.value);
    }

    const onSendButtonClick = () => {
        if (name !== '' && description !== '' && type !== '' && quality !== '') {
            const payload = {
                Name: name,
                Description: description,
                Type: type,
                Quality: quality
            };

            sendPayload(payload, token);
        }
    };

    useEffect(() => {
        fetchCarFuel(token);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (carFuelResponse) {
            setFuel(carFuelResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carFuelResponse]);

    return (
        <ExtraFormContainer>
            <AdminFormDashboard>
                <AdminFormContainer>
                    <InputField
                        type="text"
                        placeholder={fuel?.name}
                        onChange={handleInputNameChange}
                    />
                    <InputField
                        type="text"
                        placeholder={fuel?.description}
                        onChange={handleInputDescriptionChange}
                    />
                    <InputField
                        type="text"
                        placeholder={fuel?.type}
                        onChange={handleInputTypeChange}
                    />
                    <InputField
                        type="text"
                        placeholder={fuel?.quality}
                        onChange={handleInputQualityChange}
                    />
                    <FormButton onClick={onSendButtonClick}>Update fuel</FormButton>
                    <FormButton onClick={() => navigate(PageRoutes.ADMIN_DASHBOARD)} backgroundColor={Colors.darkBlue}>Go back</FormButton>
                </AdminFormContainer>
            </AdminFormDashboard>
        </ExtraFormContainer>
    )
};