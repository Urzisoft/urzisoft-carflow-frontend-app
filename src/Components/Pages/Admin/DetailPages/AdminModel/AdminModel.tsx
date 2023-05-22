import { useNavigate, useParams } from "react-router-dom";
import useValidateUser from "../../../../../Hooks/useValidateUser";
import { requestUrls } from "../../../../../Backend/requestUrls";
import useGetCustomFetch from "../../../../../Hooks/useGetCustomFetch";
import { ModelType } from "../../../../../Utils/Types";
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

export const AdminModel = () => {
    const { id } = useParams();
    const { token } = useValidateUser();
    const modelObjectRequestUrl = requestUrls.model.replace(':id', `${id}`);
    const { response: modelResponse, fetcher: fetchModel } = useGetCustomFetch<ModelType, string>(modelObjectRequestUrl);
    const navigate = useNavigate();
    const {
        fetcher: sendPayload
    } = usePostCustomFetch<any, any>(modelObjectRequestUrl, 'PATCH');

    const [name, setName] = useState<string>();
    const [model, setModel] = useState<ModelType>();
    const {
        fetcher: deleteEndpoint,
    } = usePostCustomFetch<any, any>(`${requestUrls.models}/${id}`, 'DELETE');

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

    const handleInputNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const onSendButtonClick = () => {
        const payload = {
            Name: name
        };

        sendPayload(payload, token);
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
                        placeholder={model?.name}
                        onChange={handleInputNameChange}
                    />
                    <FormButton onClick={onSendButtonClick}>Update Model</FormButton>
                    <FormButton onClick={onDeleteButtonClick}>Delete Model</FormButton>
                    <FormButton onClick={() => navigate(PageRoutes.ADMIN_DASHBOARD)} backgroundColor={Colors.darkBlue}>Go back</FormButton>
                </AdminFormContainer>
            </AdminFormDashboard>
        </ExtraFormContainer>
    )
};