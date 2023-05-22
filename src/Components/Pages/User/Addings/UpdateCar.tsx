import useGetCustomFetch from "../../../../Hooks/useGetCustomFetch";
import { BrandType, CarType, ModelType } from "../../../../Utils/Types";
import { requestUrls } from "../../../../Backend/requestUrls";
import useValidateUser from "../../../../Hooks/useValidateUser";
import { useRedirectDashboard } from "../../../../Hooks/useRedirectDashboard";
import usePostCustomFetch from "../../../../Hooks/usePostCustomFetch";
import React, { useEffect, useRef, useState } from "react";
import { Sidebar } from "../../../Common/Sidebar/Sidebar";
import {
    FormButton,
    FormGeneralBackgroundColor,
    FormGeneralBox,
    FormGeneralContainer, FormTitle, FormUserInputDetailsContainer
} from "../../../Common/Authentication/Authentication.css";
import { Colors } from "../../../../Utils/cssMedia";
import { InputField } from "../../../Common/InputField/InputField";
import { DropdownField } from "../../../Common/DropdownField/DropdownField";
import { SendButtonWrapper } from "./AddCar.css";
import { useParams } from "react-router-dom";

const FuelOptions = ["Diesel", "Petrol", "Gpl"];

export const UpdateCar = () => {
    const { id } = useParams();
    const { token, username } = useValidateUser();
    const { navigateHome } = useRedirectDashboard();
    const carObjectRequestUrl = requestUrls.car.replace(':id', `${id}`);
    const { response: carResponse, fetcher: fetchCar } = useGetCustomFetch<CarType, string>(carObjectRequestUrl);
    const {
        fetcher: sendCarPayload
    } = usePostCustomFetch<any, any>(carObjectRequestUrl, 'PATCH');

    const [car, setCar] = useState<CarType>();
    const [generation, setGeneration] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [mileage, setMileage] = useState<string>('');
    const [gearbox, setGearbox] = useState<string>('');
    const [power, setPower] = useState<string>('');
    const [engineSize, setEngineSize] = useState<string>('');
    const [driveWheel, setDriveWheel] = useState<string>('');
    const [licensePlate, setLicensePlate] = useState<string>('');
    const [imageFile, setImageFile] = useState<File | null>(null);

    useEffect(() => {
        fetchCar(token);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (carResponse) {
            setCar(carResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carResponse]);

    const handleInputGenerationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGeneration(event.target.value);
    };

    const handleInputYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setYear(event.target.value);
    };

    const handleInputMileageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMileage(event.target.value);
    };

    const handleInputGearboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGearbox(event.target.value);
    };

    const handleInputPowerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPower(event.target.value);
    };

    const handleInputEngineSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEngineSize(event.target.value);
    };

    const handleInputDriveWheelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDriveWheel(event.target.value);
    };

    const handleInputLicensePlateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLicensePlate(event.target.value);
    };

    const handleInputFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.[0]) {
            setImageFile(event.target.files?.[0]);
        }
    };

    const onSendButtonClick = () => {
        const formData = new FormData();
        generation && formData.append('Generation', generation);
        year && formData.append('Year', year);
        mileage && formData.append('Mileage', mileage);
        gearbox && formData.append('Gearbox', gearbox);
        power && formData.append('Power', power);
        engineSize && formData.append('EngineSize', engineSize);
        driveWheel && formData.append('DriveWheel', driveWheel);
        licensePlate && formData.append('LicensePlate', licensePlate);
        imageFile && formData.append('File', imageFile);
        username && formData.append('Username', username);
        formData.append('BrandId', String(car?.brand.id) ?? '');
        formData.append('ModelId', String(car?.model.id) ?? '');

        sendCarPayload(formData, token, true);
    };

    return (
        <>
            <Sidebar />
            <FormGeneralBox>
                <FormGeneralBackgroundColor backgroundColor={Colors.darkBlue} shouldNotHaveClipPath={true} isNotAuthScreen={true}>
                    <FormGeneralContainer maxWidth={35} isNotAuthScreen={true}>
                        <FormTitle>Add a car</FormTitle>
                        <FormUserInputDetailsContainer>
                            <InputField
                                type="text"
                                placeholder={`${car?.generation}`}
                                onChange={handleInputGenerationChange}
                            />
                            <InputField
                                type="text"
                                placeholder={`${car?.year}`}
                                onChange={handleInputYearChange}
                            />
                            <InputField
                                type="text"
                                placeholder={`${car?.mileage}`}
                                onChange={handleInputMileageChange}
                            />
                            <InputField
                                type="text"
                                placeholder={`${car?.gearbox}`}
                                onChange={handleInputGearboxChange}
                            />
                            <InputField
                                type="text"
                                placeholder={`Power ${car?.power}`}
                                onChange={handleInputPowerChange}
                            />
                            <InputField
                                type="text"
                                placeholder={`Engine Size ${car?.engineSize}`}
                                onChange={handleInputEngineSizeChange}
                            />
                            <InputField
                                type="text"
                                placeholder={`${car?.driveWheel}`}
                                onChange={handleInputDriveWheelChange}
                            />
                            <InputField
                                type="text"
                                placeholder={`${car?.licensePlate}`}
                                onChange={handleInputLicensePlateChange}
                            />
                            <InputField
                                type="file"
                                onChange={handleInputFileChange}
                                isFileInput={true}
                            />
                            <SendButtonWrapper>
                                <FormButton onClick={onSendButtonClick}>Update Car</FormButton>
                            </SendButtonWrapper>
                        </FormUserInputDetailsContainer>
                    </FormGeneralContainer>
                </FormGeneralBackgroundColor>
            </FormGeneralBox>
        </>
    )
}