import { useState } from 'react';

const PRICES: { [key: string]: number } = {
    kajak: 20,
    rower: 35,
    omega: 150,
    kapok: 5,
    instructor: 50
};

export const useBookingLogic = () => {
    const [name, setName] = useState("");
    const [boat, setBoat] = useState("kajak");
    const [hours, setHours] = useState(1);
    const [extra, setExtra] = useState(false); // To teraz Instruktor
    const [kapok, setKapok] = useState(false); // Nowy dodatek: Kapok
    const [payment, setPayment] = useState("card");
    const [terms, setTerms] = useState(false);

    const basePrice = PRICES[boat] || 0;

    // Logika wg briefu:
    // (Cena łodzi * godziny) + (Instruktor * godziny) + (Kapok jednorazowo)
    const totalPrice = (basePrice * hours) +
        (extra ? PRICES.instructor * hours : 0) +
        (kapok ? PRICES.kapok : 0);

    const isLicenseRequired = boat === "omega";
    const isFormValid = name.trim().length > 0 && terms === true;

    const errorMessage = isLicenseRequired
        ? "Uwaga: Do wynajęcia Omegi wymagany jest patent żeglarski!"
        : "";

    const handleNameChange = (val: string) => setName(val);
    const handleBoatChange = (val: string) => setBoat(val);
    const handleHoursChange = (val: number) => setHours(val);
    const toggleExtra = () => setExtra(!extra);
    const toggleKapok = () => setKapok(!kapok);
    const handlePaymentChange = (val: string) => setPayment(val);
    const toggleTerms = () => setTerms(!terms);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

        alert(`Potwierdzenie kalkulacji dla: ${name}\nSprzęt: ${boat}\nCzas: ${hours}h\nPłatność: ${payment}\nŁączny koszt: ${totalPrice} PLN`);

        setName("");
        setBoat("kajak");
        setHours(1);
        setExtra(false);
        setKapok(false);
        setTerms(false);
    };

    return {
        state: {
            name, boat, hours, extra, kapok, payment, terms,
            totalPrice, isLicenseRequired, isFormValid, errorMessage
        },
        actions: {
            handleNameChange, handleBoatChange, handleHoursChange,
            toggleExtra, toggleKapok, handlePaymentChange, toggleTerms, handleSubmit
        }
    };
};