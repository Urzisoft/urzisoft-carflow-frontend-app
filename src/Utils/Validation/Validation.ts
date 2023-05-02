import { commonPasswords } from "./commonPasswords";
import { commonDomains } from "./commonDomains";

export const validateUsername = (username: string): string => {
    if (username === "") {
        return "";
    }
    if (!/^[a-z0-9]+$/i.test(username)) {
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
    if (
        !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(
            password
        )
    ) {
        return "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }

    return "";
};

export const validateEmail = (email: string): string => {
    const atIndex = email.indexOf("@");
    const dotIndex = email.lastIndexOf(".");

    if (email === "") {
        return "";
    }
    if (atIndex === -1) {
        return "Email address should contain '@'.";
    }

    const localPart = email.substring(0, atIndex);
    const domain = email.substring(atIndex + 1);

    if (localPart.length === 0) {
        return "Email address local part is missing.";
    }

    if (domain.length === 0) {
        return "Email address domain part is missing.";
    }

    if (
        localPart.startsWith(".") ||
        localPart.endsWith(".") ||
        localPart.includes("..")
    ) {
        return "Email address local part should not start or end with a dot, or contain consecutive dots.";
    }

    const domainParts = domain.split(".");
    if (
        domainParts.some(
            (part) =>
                part.startsWith("-") ||
                part.endsWith("-") ||
                part.includes("--")
        )
    ) {
        return "Email address domain part should not start or end with a hyphen, or contain consecutive hyphens.";
    }

    if (dotIndex === -1 || dotIndex < atIndex) {
        return "Email address should contain a dot (.) after '@'.";
    }

    if (commonDomains && !commonDomains.includes(domain)) {
        return "This domain does not exist.";
    }

    return "";
};

export const validateName = (name: string): string => {
    if (name === "") {
        return "";
    }
    if (!/^[A-Za-z]+$/.test(name)) {
        return "Wrong name format.";
    }

    return "";
};

export const validateConfirmPassword = (
    password: string,
    confirmPassword: string
): string => {
    if (password === "" || confirmPassword === "") {
        return "";
    }
    if (password !== confirmPassword) {
        return "The passwords do not match.";
    }
    return "";
};
