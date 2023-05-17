import { AdminFormContainer, AdminFormDashboard, ExtraFormContainer } from "../../AdminDashboard/AdminDashboard.css";
import { InputField } from "../../../../Common/InputField/InputField";
import React, { useState } from "react";
import usePostCustomFetch from "../../../../../Hooks/usePostCustomFetch";
import { requestUrls } from "../../../../../Backend/requestUrls";
import useValidateUser from "../../../../../Hooks/useValidateUser";
import { FormButton } from "../../../../Common/Authentication/Authentication.css";
import { PageRoutes } from "../../../../../Utils/Routes";
import { useNavigate } from "react-router-dom";
import { Colors } from "../../../../../Utils/cssMedia";

export const AddAdminGasStation = () => {
    const {
        fetcher: setPayload
    } = usePostCustomFetch<any, any>(requestUrls.gasStations);
    const { token } = useValidateUser();
    const navigate = useNavigate();

    const [name, setName] = useState<string>();
    const [fuelId, setFuelId] = useState<string>();
    const [cityId, setCityId] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [rank, setRank] = useState<string>();
    const [imageFile, setImageFile] = useState<File | null>(null);

    const handleInputNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleInputFuelIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFuelId(event.target.value);
    };

    const handleInputCityIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCityId(event.target.value);
    };

    const handleInputAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };

    const handleInputRankChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRank(event.target.value);
    };

    const handleInputFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.[0]) {
            setImageFile(event.target.files?.[0]);
        }
    };

    const onSendButtonClick = () => {
        if (name !== '' && fuelId !== '') {
            const formData = new FormData();
            name && formData.append('Name', name);
            fuelId && formData.append('FuelId', fuelId);
            cityId && formData.append('CityId', cityId);
            address && formData.append('Address', address);
            rank && formData.append('Rank', rank);
            imageFile && formData.append('File', imageFile);

            setPayload(formData, token, true);
        }
    };

    return (
        <ExtraFormContainer>
            <AdminFormDashboard>
                <AdminFormContainer>
                    <InputField
                        type="text"
                        placeholder="Name"
                        onChange={handleInputNameChange}
                    />
                    <InputField
                        type="text"
                        placeholder="FuelId"
                        onChange={handleInputFuelIdChange}
                    />
                    <InputField
                        type="text"
                        placeholder="CityId"
                        onChange={handleInputCityIdChange}
                    />
                    <InputField
                        type="text"
                        placeholder="Address"
                        onChange={handleInputAddressChange}
                    />
                    <InputField
                        type="text"
                        placeholder="Rank"
                        onChange={handleInputRankChange}
                    />
                    <InputField
                        type="file"
                        isFileInput={true}
                        onChange={handleInputFileChange}
                    />
                    <FormButton onClick={onSendButtonClick}>Add a new City</FormButton>
                    <FormButton onClick={() => navigate(PageRoutes.ADMIN_DASHBOARD)} backgroundColor={Colors.darkBlue}>Go back</FormButton>
                </AdminFormContainer>
            </AdminFormDashboard>
        </ExtraFormContainer>
    )
}