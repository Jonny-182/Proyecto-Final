import React, { useState } from "react";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Seleccione la fecha:</label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)}
                            type= 'date' required/>
                        </div>

                        <div>
                            <label htmlFor='book-time'>Busque la hora:</label>
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value="">Seleccione la hora</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {return <option key= {availableTimes}>{availableTimes}</option>})
                                }
                            </select>
                        </div>

                        <div>
                            <label htmLFor='book-guests'>Número de comensales:</label>
                            <input id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.value)}/>
                        </div>

                        <div>
                        <label htmLFor='book-occasion'>Ocasión:</label>
                        <select id='book-occasion' key={occasion} value={occasion} onChange={e => setOccasion (e.target.value)}>
                                <option>Cumpleaños</option>
                                <option>Aniversario</option>
                                <option>Compromiso</option>
                        </select>
                        </div>

                        <div className="btnReceive">
                            <input aria-label='On Click' type='submit' value={"Haz tu reserva"}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
);
};

export default BookingForm;