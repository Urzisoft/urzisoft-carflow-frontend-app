import { InputField } from "../../Common/InputField/InputField";
import React, { useEffect, useRef, useState } from "react";
import { AddCarContainer, AddCarFormContainer, SendButtonWrapper } from "./AddCar.css";
import { DropdownField } from "../../Common/DropdownField/DropdownField";
import { Sidebar } from "../../Common/Sidebar/Sidebar";
import { AuthenticationButton } from "../../Common/Authentication/Authentication.css";
import useGetCustomFetch from "../../../Hooks/useGetCustomFetch";
import { BrandType, ModelType } from "../../../Utils/Types";
import { requestUrls } from "../../../Backend/requestUrls";
import useValidateUser from "../../../Hooks/useValidateUser";

const FuelOptions = ["Diesel", "Petrol", "Gpl"];

export const AddCar = () => {
    const { response: brandsResponse, fetcher: fetchBrands } = useGetCustomFetch<BrandType[], string>(requestUrls.brands);
    const { response: modelsResponse, fetcher: fetchModels } = useGetCustomFetch<ModelType[], string>(requestUrls.models);
    const { token } = useValidateUser();

    const [brands, setBrands] = useState<BrandType[]>();
    const [models, setModels] = useState<ModelType[]>();
    const [generation, setGeneration] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [mileage, setMileage] = useState<string>('');
    const [gearbox, setGearbox] = useState<string>('');
    const [power, setPower] = useState<string>('');
    const [engineSize, setEngineSize] = useState<string>('');
    const [driveWheel, setDriveWheel] = useState<string>('');
    const [licensePlate, setLicensePlate] = useState<string>('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [fuelOption, setFuelOption] = useState<string>('');
    const [brandOption, setBrandOption] = useState<string>('');
    const [modelOption, setModelOption] = useState<string>('');

    const brandsDropdown = useRef<string[]>();
    const brandsDropdownSet = new Set<string>();
    const modelsDropdown = useRef<string[]>();
    const modelsDropdownSet = new Set<string>();

    useEffect(() => {
        fetchBrands(token);
        fetchModels(token);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (brandsResponse) {
            setBrands(brandsResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [brandsResponse]);

    useEffect(() => {
        if (modelsResponse) {
            setModels(modelsResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modelsResponse]);

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
        setGeneration(event.target.value);
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

    const handleInputFuelDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFuelOption(event.target.value);
    };

    const handleInputBrandDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setBrandOption(event.target.value);
    };

    const handleInputModelDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setModelOption(event.target.value);
    };

    useEffect(() => {
        brands?.forEach((brand) => {
            brandsDropdownSet.add(`${brand.id}-${brand.name}`);
            brandsDropdown.current = Array.from(brandsDropdownSet);
        })
    }, [brands]);

    useEffect(() => {
        models?.forEach((model) => {
            modelsDropdownSet.add(`${model.id}-${model.name}`);
            modelsDropdown.current = Array.from(modelsDropdownSet);
        })
    }, [models]);

    console.log(brandOption);
    console.log(modelOption);

    return (
       <>
           <Sidebar />
           <AddCarContainer>
               <AddCarFormContainer>
                   <h2>Add a car</h2>
                   <InputField
                       type="text"
                       placeholder="Generation"
                       onChange={handleInputGenerationChange}
                   />
                   <InputField
                       type="text"
                       placeholder="Year"
                       onChange={handleInputYearChange}
                   />
                   <InputField
                       type="text"
                       placeholder="Mileage"
                       onChange={handleInputMileageChange}
                   />
                   <InputField
                       type="text"
                       placeholder="Gearbox"
                       onChange={handleInputGearboxChange}
                   />
                   <InputField
                       type="text"
                       placeholder="Power"
                       onChange={handleInputPowerChange}
                   />
                   <InputField
                       type="text"
                       placeholder="EngineSize"
                       onChange={handleInputEngineSizeChange}
                   />
                   <InputField
                       type="text"
                       placeholder="DriveWheel"
                       onChange={handleInputDriveWheelChange}
                   />
                   <InputField
                       type="text"
                       placeholder="LicensePlate"
                       onChange={handleInputLicensePlateChange}
                   />
                   <InputField
                       type="file"
                       onChange={handleInputFileChange}
                   />
                   <DropdownField options={FuelOptions} splitById={false} handleDropdownChange={handleInputFuelDropdownChange} />
                   <div>&nbsp;</div>
                   <DropdownField options={brandsDropdown.current} splitById={true} handleDropdownChange={handleInputBrandDropdownChange} />
                   <div>&nbsp;</div>
                   <DropdownField options={modelsDropdown.current} splitById={true} handleDropdownChange={handleInputModelDropdownChange} />
                   <SendButtonWrapper>
                       <AuthenticationButton>Add car</AuthenticationButton>
                   </SendButtonWrapper>
               </AddCarFormContainer>
           </AddCarContainer>
       </>
    )
};