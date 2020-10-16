import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import firebase from '../util/firebase';
import React, { useState, useEffect } from 'react';
import '../util/calendar.css';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import 'moment/locale/nl';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
    const [events, setEvents] = useState([]);
    const [locations, setLocations] = useState([]);
    const [activeLocation, setActiveLocation] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            firebase
                .firestore()
                .collection('events')
                .orderBy('start', 'asc')
                .onSnapshot((data) => {
                    const eventsFormatted = data.docs.map((doc) => {
                        const { titel, descriptie, start, eind, kleur, locatie } = doc.data();
                        return {
                            titel,
                            descriptie,
                            start: moment(moment.unix(start.seconds))._d,
                            eind: moment(moment.unix(eind.seconds))._d,
                            kleur,
                            locatie,
                        };
                    });
                    setEvents(eventsFormatted);
                });
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            firebase
                .firestore()
                .collection('locaties')
                .onSnapshot((data) => {
                    setLocations(data.docs.map((doc) => doc.data().naam));
                    setActiveLocation(locations[0]);
                });
        };
        fetchData();
        // eslint-disable-next-line
    }, []);

    const eventStyleGetter = (event) => ({
        style: { backgroundColor: event.kleur },
    });

    const getEvents = () => {
        const returnEvents = events.filter((e) => e.locatie === activeLocation);
        return returnEvents;
    };

    return (
        <Layout>
            <SEO siteTitle="Events" />

            <div
                style={{
                    padding: 16,
                    background: 'white',
                    borderRadius: '7px',
                    boxShadow: '0px 5px 15px rgba(0,0,0,0.1)',
                }}
            >
                <span
                    style={{
                        display: 'block',
                        margin: 'auto',
                        marginBottom: 8,
                        width: 'fit-content',
                        fontSize: '1.2em',
                        fontWeight: 900,
                    }}
                >
                    Selecteer een locatie
                </span>
                <select
                    style={{
                        display: 'block',
                        height: 30,
                        margin: 'auto',
                        marginBottom: 16,
                        border: ' 2px solid rgb(20, 176, 156)',
                        borderRadius: '3px',
                        padding: '3px',
                    }}
                    onChange={(e) => {
                        setActiveLocation(e.target.value);
                    }}
                    value={activeLocation}
                >
                    {locations.map((naam) => (
                        <option key={naam} value={naam}>
                            {naam}
                        </option>
                    ))}
                </select>
                <Calendar
                    localizer={localizer}
                    events={getEvents()}
                    startAccessor="start"
                    endAccessor="eind"
                    titleAccessor="titel"
                    eventPropGetter={eventStyleGetter}
                    style={{
                        height: '65vh',
                        maxWidth: 1000,
                        margin: 'auto',
                        maxHeight: '500px',
                        boxSizing: 'border-box',
                    }}
                    messages={{
                        next: 'Volgende',
                        previous: 'Vorige',
                        today: 'Vandaag',
                        month: 'Maand',
                        week: 'Week',
                        day: 'Dag',
                    }}
                    onSelectEvent={(e) => console.log(e)}
                />
            </div>
        </Layout>
    );
};

export default MyCalendar;
