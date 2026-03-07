import './App.css'
import {useBookingLogic} from "./hooks/useBookingLogic.ts";

function App() {
    const { state, actions } = useBookingLogic();

  return (
    <>
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                background: "#ffffff",
                color: "black",
                padding: "16px"
            }}
        >
            <form
                onSubmit={actions.handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    width: "100%",
                    maxWidth: "1000px",
                    background: "#f4f4f4",
                    padding: "24px",
                    borderRadius: "10px",
                    border: "1px solid #ccc",
                    boxSizing: "border-box"
                }}
            >
                <h1 style={{ color: "#2c3e50", textAlign: "center" }}>
                    Mazurska Przystań ⚓
                </h1>

                <label>Imię</label>
                <input
                    type="text"
                    value={state.name}
                    onChange={(e) => actions.handleNameChange(e.target.value)}
                    placeholder="Wpisz swoje imię"
                />

                <label>Sprzęt</label>
                <select
                    value={state.boat}
                    onChange={(e) => actions.handleBoatChange(e.target.value)}
                >
                    <option value="kajak">Kajak (20 zł/h)</option>
                    <option value="rower">Rower wodny (35 zł/h)</option>
                    <option value="omega">Omega (150 zł/h)</option>
                </select>

                {state.errorMessage && (
                    <p style={{ color: "red" }}>{state.errorMessage}</p>
                )}

                <label>Godziny: {state.hours}</label>
                <input
                    type="range"
                    min={1}
                    max={8}
                    value={state.hours}
                    onChange={(e) => actions.handleHoursChange(Number(e.target.value))}
                />

                <label>
                    <input
                        type="checkbox"
                        checked={state.kapok}
                        onChange={actions.toggleKapok}
                    />
                    Kapok dla dziecka (+5 zł jednorazowo)
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={state.extra}
                        onChange={actions.toggleExtra}
                    />
                    Instruktor (+50 zł za godzinę)
                </label>

                <label>Metoda płatności</label>
                <select
                    value={state.payment}
                    onChange={(e) => actions.handlePaymentChange(e.target.value)}
                >
                    <option value="card">Karta</option>
                    <option value="blik">Blik</option>
                </select>

                <label>
                    <input
                        type="checkbox"
                        checked={state.terms}
                        onChange={actions.toggleTerms}
                    />
                    Akceptuję regulamin
                </label>

                <div style={{ fontSize: "18px", marginTop: "10px" }}>
                    Cena: <strong>{state.totalPrice} zł</strong>
                </div>

                <button
                    type="submit"
                    disabled={!state.isFormValid}
                    style={{
                        padding: "12px",
                        background: state.isFormValid ? "#0077be" : "gray",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: state.isFormValid ? "pointer" : "not-allowed"
                    }}
                >
                    Zarezerwuj
                </button>
            </form>
        </div>
    </>
  )
}

export default App
