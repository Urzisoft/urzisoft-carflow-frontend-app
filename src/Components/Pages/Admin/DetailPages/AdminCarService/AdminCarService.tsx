import { useNavigate, useParams } from "react-router-dom";
import useValidateUser from "../../../../../Hooks/useValidateUser";
import { requestUrls } from "../../../../../Backend/requestUrls";
import useGetCustomFetch from "../../../../../Hooks/useGetCustomFetch";
import { CarServicesType } from "../../../../../Utils/Types";
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

export const AdminCarService = () => {
    const { id } = useParams();
    const { token } = useValidateUser();
    const carServiceObjectRequestUrl = requestUrls.carService.replace(':id', `${id}`);
    const { response: carServiceResponse, fetcher: fetchCarService } = useGetCustomFetch<CarServicesType, string>(carServiceObjectRequestUrl);
    const {
        fetcher: sendPayload
    } = usePostCustomFetch<any, any>(carServiceObjectRequestUrl, 'PATCH');
    const navigate = useNavigate();

    const [carService, setCarService] = useState<CarServicesType>();
    const [name, setName] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [mainBrandId, setMainBrandId] = useState<string>();
    const [carServiceCityId, setCarServiceCityId] = useState<string>();
    const [imageFile, setImageFile] = useState<File | null>(null);

    useEffect(() => {
        fetchCarService(token);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (carServiceResponse) {
            setCarService(carServiceResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carServiceResponse]);

    const handleInputNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleInputDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleInputAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };

    const handleInputMainBrandIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMainBrandId(event.target.value);
    };

    const handleInputCarServiceCityIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCarServiceCityId(event.target.value);
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
        address && formData.append('Address', address);
        mainBrandId && formData.append('MainBrandId', mainBrandId);
        carServiceCityId && formData.append('CarServiceCityId', carServiceCityId);
        imageFile && formData.append('File', imageFile);

        sendPayload(formData, token, true);
    };

    return (
        <ExtraFormContainer>
            <AdminFormDashboard>
                <AdminFormContainer>
                    <InputField
                        type="text"
                        placeholder={carService?.name}
                        onChange={handleInputNameChange}
                    />
                    <InputField
                        type="text"
                        placeholder={carService?.description}
                        onChange={handleInputDescriptionChange}
                    />
                    <InputField
                        type="text"
                        placeholder={carService?.address}
                        onChange={handleInputAddressChange}
                    />
                    <InputField
                        type="text"
                        placeholder={carService?.mainBrandId}
                        onChange={handleInputMainBrandIDChange}
                    />
                    <InputField
                        type="text"
                        placeholder={carService?.carServiceCityId}
                        onChange={handleInputCarServiceCityIDChange}
                    />
                    <InputField
                        type="file"
                        isFileInput={true}
                        onChange={handleInputFileChange}
                    />
                    <FormButton onClick={onSendButtonClick}>Add a new Car Service</FormButton>
                    <FormButton onClick={() => navigate(PageRoutes.ADMIN_DASHBOARD)} backgroundColor={Colors.darkBlue}>Go back</FormButton>
                </AdminFormContainer>
            </AdminFormDashboard>
        </ExtraFormContainer>
    )
};