import { InputField } from "../../Common/InputField/InputField";
import React from "react";
import { AddCarContainer, AddCarFormContainer, SendButtonWrapper } from "./AddCar.css";
import { DropdownField } from "../../Common/DropdownField/DropdownField";
import { Sidebar } from "../../Common/Sidebar/Sidebar";
import { AuthenticationButton } from "../../Common/Authentication/Authentication.css";

const FuelOptions = ["Diesel", "Petrol", "Gpl"];

export const AddCar = () => {
    return (
       <>
           <Sidebar />
           <AddCarContainer>
               <AddCarFormContainer>
                   <h2>Add a car</h2>
                   <InputField
                       type="text"
                       placeholder="Generation"
                   />
                   <InputField
                       type="text"
                       placeholder="Year"
                   />
                   <InputField
                       type="text"
                       placeholder="Mileage"
                   />
                   <InputField
                       type="text"
                       placeholder="Gearbox"
                   />
                   <InputField
                       type="text"
                       placeholder="Power"
                   />
                   <InputField
                       type="text"
                       placeholder="EngineSize"
                   />
                   <InputField
                       type="text"
                       placeholder="DriveWheel"
                   />
                   <InputField
                       type="text"
                       placeholder="LicensePlate"
                   />
                   <InputField
                       type="file"
                   />
                   <DropdownField options={FuelOptions} />
                   <SendButtonWrapper>
                       <AuthenticationButton>Add car</AuthenticationButton>
                   </SendButtonWrapper>
               </AddCarFormContainer>
           </AddCarContainer>
       </>
    )
};