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

export const AddModel = () => {
    const {
        fetcher: sendModelPayload
    } = usePostCustomFetch<any, any>(requestUrls.models);

    const [model, setModel] = useState<string>();
    const { token } = useValidateUser();

    const handleInputModelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModel(event.target.value);
    };

    const onSendButtonClick = () => {
      if (model !== '') {
          const payload = {
              Name: model
          };

          sendModelPayload(payload, token);
      }
    };

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
                                onChange={handleInputModelChange}
                            />
                            <FormButton onClick={onSendButtonClick}>Add a new model</FormButton>
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