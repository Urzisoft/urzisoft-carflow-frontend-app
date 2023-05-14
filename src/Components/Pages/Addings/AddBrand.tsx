import { Sidebar } from "../../Common/Sidebar/Sidebar";
import {
    AuthenticationBackgroundImage,
    FormButton,
    FormGeneralBackgroundColor,
    FormGeneralBox,
    FormGeneralContainer,
    FormTitle,
    FormUserInputDetailsContainer
} from "../../Common/Authentication/Authentication.css";
import { Colors } from "../../../Utils/cssMedia";
import { InputField } from "../../Common/InputField/InputField";
import React, { useState } from "react";
import loginBackgroundImage from "../../../Assets/Images/BlueCarLoginBackground.png";
import usePostCustomFetch from "../../../Hooks/usePostCustomFetch";
import { requestUrls } from "../../../Backend/requestUrls";
import useValidateUser from "../../../Hooks/useValidateUser";

export const AddBrand = () => {
    const {
        fetcher: sendBrandPayload
    } = usePostCustomFetch<any, any>(requestUrls.brands);

    const [name, setName] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [imageFile, setImageFile] = useState<File | null>(null);

    const { token } = useValidateUser();

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
        if (name !== '' && description !== '') {
            const formData = new FormData();
            name && formData.append('Name', name);
            description && formData.append('Description', description);
            imageFile && formData.append('File', imageFile);

            sendBrandPayload(formData, token, true);
        }
    };

    return (
        <>
            <Sidebar />
            <FormGeneralBox>
                <FormGeneralBackgroundColor backgroundColor={Colors.darkBlue}>
                    <FormGeneralContainer maxWidth={20} >
                        <FormTitle>Add Brand</FormTitle>
                        <FormUserInputDetailsContainer>
                            <InputField
                                type="text"
                                placeholder="Name"
                                onChange={handleInputNameChange}
                            />
                            <InputField
                                type="text"
                                placeholder="Description"
                                onChange={handleInputDescriptionChange}
                            />
                            <InputField
                                type="file"
                                isFileInput={true}
                                onChange={handleInputFileChange}
                            />
                            <FormButton onClick={onSendButtonClick}>Add a new brand</FormButton>
                        </FormUserInputDetailsContainer>
                    </FormGeneralContainer>
                </FormGeneralBackgroundColor>
                <AuthenticationBackgroundImage
                    backgroundImg={loginBackgroundImage}
                />
            </FormGeneralBox>
        </>
    )
};