import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import firebase from '../util/firebase';
import React, { useState, useEffect } from 'react';
import '../util/calander.css';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import 'moment/locale/nl';

const localizer = momentLocalizer(moment);

const Event = ({ event }) => {
    const { titel, start, kleur, locatie, descriptie } = event;
    moment.locale('nl');
    const timeStart = moment(moment.unix(start.seconds)).format('DD/MM/YYYY');

    return (
        <>
            <li
                style={{
                    padding: 8,
                    paddingBottom: 0,
                    display: 'flex',
                    alignContent: 'center',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 300,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}
                    >
                        <div
                            style={{
                                maxWidth: '65%',
                                height: '100%',
                                display: 'flex',
                                alignContent: 'start',
                                margin: 0,
                                alignItems: 'center',
                            }}
                        >
                            {/* <span
                                style={{
                                    width: 12,
                                    height: 12,
                                    minWidth: 12,
                                    minHeight: 12,
                                    background: `${kleur}`,
                                    display: 'inline-block',
                                    borderRadius: 100,
                                    marginRight: 6,
                                }}
                            ></span> */}
                            <span style={{ textAlign: 'left', fontSize: '18px', fontWeight: 500 }}>
                                {titel}
                            </span>
                        </div>
                        <div
                            style={{
                                height: '100%',
                                display: 'inline-block',
                                textAlign: 'right',
                            }}
                        >
                            <span style={{ display: 'block', fontWeight: 600 }}>{timeStart}</span>
                            <span style={{ display: 'block' }}>{locatie}</span>
                        </div>
                    </div>
                </div>
            </li>
            <div style={{ padding: 8 }}>{descriptie}</div>
            <div
                style={{
                    margin: 'auto',
                    marginTop: '8px',
                    marginBottom: '8px',
                    height: 3,
                    border: 'none',
                    background: '#37375c',
                    width: '95%',
                    opacity: 0.05,
                }}
            />
        </>
    );
};

function EventsList({ location }) {
    const [events, setEvents] = useState([]);

    const getEvents = () => {
        let returnEvents = [];
        if (location === undefined) {
            returnEvents = events.filter((e) => e.locatie === 'Amsterdam');
        } else {
            returnEvents = events.filter((e) => e.locatie === location);
        }

        return returnEvents.map((event, i) => <Event key={i} event={event} />);
    };

    useEffect(() => {
        const fetchData = async () => {
            firebase
                .firestore()
                .collection('events')
                .orderBy('start', 'asc')
                .onSnapshot((data) => {
                    const reversedData = data.docs
                        .map((doc) => ({ ...doc.data(), id: doc.id }))
                        .reverse();
                    setEvents(reversedData);
                });
        };
        fetchData();
    }, []);

    getEvents();
    return (
        <div
            style={{
                background: 'white',
                padding: 16,
                borderRadius: '7px',
                boxShadow: '0px 5px 15px rgba(0,0,0,0.1)',
            }}
        >
            <ul
                style={{
                    listStyleType: 'none',
                    padding: '0',
                    overflow: 'hidden',
                    overflowY: 'scroll',
                    background: 'white',
                    height: '100%',
                    maxHeight: '100%',
                    boxSizing: 'border-box',
                }}
            >
                {getEvents()}
            </ul>
        </div>
    );
}

const MyCalendar = () => {
    const [events, setEvents] = useState([]);
    const [locations, setLocations] = useState([]);
    const [activeLocation, setActiveLocation] = useState('Amsterdam');

    useEffect(() => {
        const fetchData = async () => {
            firebase
                .firestore()
                .collection('locaties')
                .onSnapshot((data) => {
                    setLocations(data.docs.map((doc) => doc.data().naam));
                    setActiveLocation(locations[0]);
                });

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
                            eind: moment(moment.unix(eind.seconds)).add(1, 'days')._d,
                            kleur,
                            locatie,
                        };
                    });
                    setEvents(eventsFormatted);
                });
        };
        fetchData();
        // eslint-disable-next-line
    }, []);

    const eventStyleGetter = (event) => ({
        style: { backgroundColor: event.kleur },
    });

    const getEvents = () => {
        // if (activeLocation === undefined) {
        //     const returnEvents = events.filter((e) => e.locatie === 'Amsterdam');
        //     return returnEvents;
        // } else {
        //     const returnEvents = events.filter((e) => e.locatie === activeLocation);

        //     return returnEvents;
        // }
        return events;
    };

    return (
        <Layout showNewsLetter={false}>
            <SEO siteTitle="Events" />

            <div
                style={{
                    padding: '2.5%',
                    background: 'white',
                    borderRadius: '7px',
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
                <div className="calander-big">
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
                        views={['month']}
                        messages={{
                            next: 'Volgende maand',
                            previous: 'Vorige maand',
                            today: 'Vandaag',
                        }}
                    />
                </div>
                {/* <div>
                    {}
                </div> */}
                <div className="calander-small">
                    <EventsList location={activeLocation} />
                </div>
            </div>
        </Layout>
    );
};

export default MyCalendar;
