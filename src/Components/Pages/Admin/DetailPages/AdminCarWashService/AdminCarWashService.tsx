import { useNavigate, useParams } from "react-router-dom";
import useValidateUser from "../../../../../Hooks/useValidateUser";
import { requestUrls } from "../../../../../Backend/requestUrls";
import useGetCustomFetch from "../../../../../Hooks/useGetCustomFetch";
import { CarWashStationType } from "../../../../../Utils/Types";
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

export const AdminCarWashService = () => {
    const { id } = useParams();
    const { token } = useValidateUser();
    const carWashObjectRequestUrl = requestUrls.carWashStation.replace(':id', `${id}`);
    const { response: carWashResponse, fetcher: fetchCarWash } = useGetCustomFetch<CarWashStationType, string>(carWashObjectRequestUrl);
    const {
        fetcher: sendPayload
    } = usePostCustomFetch<any, any>(carWashObjectRequestUrl, 'PATCH');
    const navigate = useNavigate();
    const {
        fetcher: deleteEndpoint,
    } = usePostCustomFetch<any, any>(`${requestUrls.carWashStations }/${id}`, 'DELETE');

    const [carWash, setCarWash] = useState<CarWashStationType>();

    useEffect(() => {
        fetchCarWash(token);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (carWashResponse) {
            setCarWash(carWashResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carWashResponse]);

    const [name, setName] = useState<string>();
    const [standardPrice, setStandardPrice] = useState<string>();
    const [premiumPrice, setPremiumPrice] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [cityId, setCityId] = useState<string>();
    const [rank, setRank] = useState<string>();
    const [isSelfWash, setIsSelfWash] = useState<string>();
    const [imageFile, setImageFile] = useState<File | null>(null);

    const handleInputNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleInputStandardPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStandardPrice(event.target.value);
    };

    const handleInputAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };

    const handleInputPremiumPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPremiumPrice(event.target.value);
    };

    const handleInputRankChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRank(event.target.value);
    };

    const handleInputCityIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCityId(event.target.value);
    };

    const handleInputSelfWashChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsSelfWash(event.target.value);
    };

    const handleInputFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.[0]) {
            setImageFile(event.target.files?.[0]);
        }
    };

    const onSendButtonClick = () => {
        if (name !== '' && standardPrice !== '') {
            const formData = new FormData();
            name && formData.append('Name', name);
            standardPrice && formData.append('Description', standardPrice);
            address && formData.append('Address', address);
            premiumPrice && formData.append('MainBrandId', premiumPrice);
            rank && formData.append('CarServiceCityId', rank);
            cityId && formData.append('CityId', cityId);
            isSelfWash && formData.append('IsSelfWash', isSelfWash);
            imageFile && formData.append('File', imageFile);

            sendPayload(formData, token, true);
        }
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
                        placeholder={carWash?.name}
                        onChange={handleInputNameChange}
                    />
                    <InputField
                        type="text"
                        placeholder={carWash?.standardPrice}
                        onChange={handleInputStandardPriceChange}
                    />
                    <InputField
                        type="text"
                        placeholder={carWash?.address}
                        onChange={handleInputAddressChange}
                    />
                    <InputField
                        type="text"
                        placeholder="Premium Price"
                        onChange={handleInputPremiumPriceChange}
                    />
                    <InputField
                        type="text"
                        placeholder="Rank"
                        onChange={handleInputRankChange}
                    />
                    <InputField
                        type="text"
                        placeholder="City ID"
                        onChange={handleInputCityIDChange}
                    />
                    <InputField
                        type="text"
                        placeholder="Is SelfWash"
                        onChange={handleInputSelfWashChange}
                    />
                    <InputField
                        type="file"
                        isFileInput={true}
                        onChange={handleInputFileChange}
                    />
                    <FormButton onClick={onSendButtonClick}>Update Car Wash Station</FormButton>
                    <FormButton onClick={onDeleteButtonClick}>Delete Car Wash Station</FormButton>
                    <FormButton onClick={() => navigate(PageRoutes.ADMIN_DASHBOARD)} backgroundColor={Colors.darkBlue}>Go back</FormButton>
                </AdminFormContainer>
            </AdminFormDashboard>
        </ExtraFormContainer>
    )
};