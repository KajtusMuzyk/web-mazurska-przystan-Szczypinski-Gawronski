import { useState } from 'react';

export const useBookingLogic = () => {

    const [name, setName] = useState("");
    const [boat, setBoat] = useState("kajak");
    const [hours, setHours] = useState(1);
    const [extra, setExtra] = useState(false);
    const [payment, setPayment] = useState("cash");
    const [terms, setTerms] = useState(false);


    const handleNameChange = (val: string) => setName(val);
    const handleBoatChange = (val: string) => setBoat(val);
    const handleHoursChange = (val: number) => setHours(val);
    const toggleExtra = () => setExtra(!extra);
    const handlePaymentChange = (val: string) => setPayment(val);
    const toggleTerms = () => setTerms(!terms);


    return {
        state: { name, boat, hours, extra, payment, terms },
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