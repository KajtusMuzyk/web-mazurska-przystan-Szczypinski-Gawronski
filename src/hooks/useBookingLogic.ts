import { useState } from 'react';

const PRICES: { [key: string]: number } = {
    kajak: 25,
    rower: 40,
    omega: 30,
    instructor: 150
};

export const useBookingLogic = () => {
    const [name, setName] = useState("");
    const [boat, setBoat] = useState("kajak");
    const [hours, setHours] = useState(1);
    const [extra, setExtra] = useState(false);
    const [payment, setPayment] = useState("cash");
    const [terms, setTerms] = useState(false);

    const basePrice = PRICES[boat] || 0;
    const totalPrice = (basePrice * hours) + (extra ? PRICES.instructor : 0);

    const isLicenseRequired = boat === "omega";
    const isFormValid = name.trim().length > 0 && terms === true;

    const errorMessage = (isLicenseRequired && !extra)
        ? "Uwaga: Wynajęcie Omegi bez instruktora wymaga posiadania patentu żeglarskiego."
        : "";

    const handleNameChange = (val: string) => setName(val);
    const handleBoatChange = (val: string) => setBoat(val);
    const handleHoursChange = (val: number) => setHours(val);
    const toggleExtra = () => setExtra(!extra);
    const handlePaymentChange = (val: string) => setPayment(val);
    const toggleTerms = () => setTerms(!terms);

    return {
        state: {
            name,
            boat,
            hours,
            extra,
            payment,
            terms,
            totalPrice,
            isLicenseRequired,
            isFormValid,
            errorMessage
        },
        actions: {
            handleNameChange,
            handleBoatChange,
            handleHoursChange,
            toggleExtra,
            handlePaymentChange,
            toggleTerms
        }
    };
};