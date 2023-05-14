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

export const AddModel = () => {

    const [model, setModel] = useState<string>();

    return (
        <>
            <Sidebar />
            <FormGeneralBox>
                <FormGeneralBackgroundColor backgroundColor={Colors.darkBlue}>
                    <FormGeneralContainer maxWidth={20} >
                        <FormTitle>Add Model</FormTitle>
                        <FormUserInputDetailsContainer>
                            <InputField
                                type="text"
                                placeholder="Model"
                            />
                            <FormButton>Add a new model</FormButton>
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