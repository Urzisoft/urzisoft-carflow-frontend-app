import { commonPasswords } from "./commonPasswords";
import { commonDomains } from "./commonDomains";

export const isNotParamEmpty = (param: string): boolean => {
    return param !== "";
};

export const validateUsername = (username: string): string => {
    const usernameIsNotAlphanumeric = !/^[a-z0-9]+$/i.test(username);

    if (username === "") {
        return "";
    }
    if (usernameIsNotAlphanumeric) {
        return "Username must be alphanumeric.";
    }
    if (username.length < 7) {
        return "Username must be at least 7 characters long.";
    }
    if (username.length > 15) {
        return "Username is too long.";
    }
    return "";
};

export const validatePassword = (password: string): string => {
    if (password === "") {
        return "";
    }
    if (password.length < 8) {
        return "Password must be at least 8 characters long.";
    }
    if (commonPasswords.includes(password)) {
        return "The password is too common. Please choose a different one.";
    }

    return "";
};

export const validateEmail = (email: string): string => {
    const atIndex = email.indexOf("@");
    const dotIndex = email.lastIndexOf(".");
    const localPart = email.substring(0, atIndex);
    const domain = email.substring(atIndex + 1);
    const isEmailGenerallyNotValid = localPart.startsWith(".") || localPart.endsWith(".") || localPart.includes("..");
    const domainParts = domain.split(".");
    const emailNotHyphenValidated = domainParts.some((part) =>
            part.startsWith("-") ||
            part.endsWith("-") ||
            part.includes("--")
    );
    const emailDotIndexNotValid = dotIndex === -1 || dotIndex < atIndex;
    const isDomainInvalid = commonDomains && !commonDomains.includes(domain);

    if (email === "") {
        return "";
    }

    if (atIndex === -1) {
        return "Email address should contain '@'.";
    }

    if (localPart.length === 0) {
        return "Email address local part is missing.";
    }

    if (domain.length === 0) {
        return "Email address domain part is missing.";
    }

    if (isEmailGenerallyNotValid) {
        return "Email address local part should not start or end with a dot, or contain consecutive dots.";
    }

    if (emailNotHyphenValidated) {
        return "Email address domain part should not start or end with a hyphen, or contain consecutive hyphens.";
    }

    if (emailDotIndexNotValid) {
        return "Email address should contain a dot (.) after '@'.";
    }

    if (isDomainInvalid) {
        return "This domain does not exist.";
    }

    return "";
};

export const validateConfirmPassword = (password: string, confirmPassword: string): string => {
    if (password === "" || confirmPassword === "") {
        return "";
    }
    if (password !== confirmPassword) {
        return "The passwords do not match.";
    }
    return "";
};
