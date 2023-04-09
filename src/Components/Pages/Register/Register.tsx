import {
    RegisterContainer,
    RegisterTitle,
    UserDetailsContainer,
    BackgroundColor,
    BackgroundImage,
    RegisterButton,
    Container,
} from "./Register.css";

import { FC } from "react";
import { InputField } from "../../Common/Input Field/InputField";

export const Register: FC = () => {
    return (
        <Container>
            <BackgroundColor>
                <RegisterContainer>
                    <RegisterTitle>Register</RegisterTitle>
                    <UserDetailsContainer>
                        <InputField type="text" placeholder="Full Name" />
                        <InputField type="text" placeholder="Username" />
                        <InputField type="text" placeholder="Email" />
                        <InputField type="password" placeholder="Password" />
                        <InputField
                            type="password"
                            placeholder="Confirm Password"
                        />

                        <RegisterButton>Create Account</RegisterButton>
                    </UserDetailsContainer>
                </RegisterContainer>
            </BackgroundColor>
            <BackgroundImage> </BackgroundImage>
        </Container>
    );
};
