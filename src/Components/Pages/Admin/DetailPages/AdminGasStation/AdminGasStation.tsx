import { useNavigate, useParams } from "react-router-dom";
import useValidateUser from "../../../../../Hooks/useValidateUser";
import { requestUrls } from "../../../../../Backend/requestUrls";
import useGetCustomFetch from "../../../../../Hooks/useGetCustomFetch";
import { FuelType, GasStationsType } from "../../../../../Utils/Types";
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

export const AdminGasStation = () => {
    const { id } = useParams();
    const { token } = useValidateUser();
    const adminGasStationObjectRequestUrl = requestUrls.gasStation.replace(':id', `${id}`);
    const { response: carGasStationResponse, fetcher: fetchCarGasStation } = useGetCustomFetch<GasStationsType, string>(adminGasStationObjectRequestUrl);
    const {
        fetcher: sendPayload
    } = usePostCustomFetch<any, any>(adminGasStationObjectRequestUrl, 'PATCH');
    const {
        fetcher: deleteEndpoint,
    } = usePostCustomFetch<any, any>(`${requestUrls.gasStations}/${id}`, 'DELETE');

    const navigate = useNavigate();

    const [name, setName] = useState<string>();
    const [fuelId, setFuelId] = useState<string>();
    const [cityId, setCityId] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [rank, setRank] = useState<string>();
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [gasStation, setGasStation] = useState<GasStationsType>();

    useEffect(() => {
        fetchCarGasStation(token);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (carGasStationResponse) {
            setGasStation(carGasStationResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carGasStationResponse]);

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
        const formData = new FormData();
        name && formData.append('Name', name);
        fuelId && formData.append('FuelId', fuelId);
        cityId && formData.append('CityId', cityId);
        address && formData.append('Address', address);
        rank && formData.append('Rank', rank);
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
                        placeholder={gasStation?.name}
                        onChange={handleInputNameChange}
                    />
                    <InputField
                        type="text"
                        placeholder={String(gasStation?.fuel.id)}
                        onChange={handleInputFuelIdChange}
                    />
                    <InputField
                        type="text"
                        placeholder={String(gasStation?.city.id)}
                        onChange={handleInputCityIdChange}
                    />
                    <InputField
                        type="text"
                        placeholder={gasStation?.address}
                        onChange={handleInputAddressChange}
                    />
                    <InputField
                        type="text"
                        placeholder={gasStation?.rank}
                        onChange={handleInputRankChange}
                    />
                    <InputField
                        type="file"
                        isFileInput={true}
                        onChange={handleInputFileChange}
                    />
                    <FormButton onClick={onSendButtonClick}>Update GasStation</FormButton>
                    <FormButton onClick={onDeleteButtonClick}>Delete brand</FormButton>
                    <FormButton onClick={() => navigate(PageRoutes.ADMIN_DASHBOARD)} backgroundColor={Colors.darkBlue}>Go back</FormButton>
                </AdminFormContainer>
            </AdminFormDashboard>
        </ExtraFormContainer>
    )
};