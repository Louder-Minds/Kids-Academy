import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import React, { Component } from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class MyCalendar extends React.Component {
    constructor() {
        super();
        this.state = {
            activeLocation: 'Amsterdam',
            events: [{
                title: 'Cito',
                start: moment('24-08-2020T12:00:00', 'DD MM YYYY hh:mm:ss')._d,
                end: moment('24-08-2020T16:00:00', 'DD MM YYYY hh:mm:ss')._d,
                location: 'Amsterdam',
            },
            {
                title: 'Rekenen',
                start: moment('25-08-2020T12:00:00', 'DD MM YYYY hh:mm:ss')._d,
                end: moment('25-08-2020T16:00:00', 'DD MM YYYY hh:mm:ss')._d,
                location: 'Haarlem',
            },
            {
                title: 'Taal',
                start: moment('26-08-2020T12:00:00', 'DD MM YYYY hh:mm:ss')._d,
                end: moment('26-08-2020T16:00:00', 'DD MM YYYY hh:mm:ss')._d,
                location: 'Maastricht',
            },
            {
                title: 'Biologie',
                start: moment('27-08-2020T12:00:00', 'DD MM YYYY hh:mm:ss')._d,
                end: moment('27-08-2020T16:00:00', 'DD MM YYYY hh:mm:ss')._d,
                location: 'Amsterdam',
            }],
            locations: ['Amsterdam', 'Haarlem', 'Maastricht'],
        };

        this.getEvents = this.getEvents.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    getEvents() {
        const events = this.state.events.filter(event => event.location === this.state.activeLocation);
        return events;
    }

    handleChange(event) {
        this.setState({activeLocation: event.target.value});
    }

    render() {
        return (
            <div>
                <select onChange={this.handleChange} value={this.state.activeLocation}>
                    {this.state.locations.map((l) => (
                        <option key={l} value={l}>{l}</option>
                    ))}
                </select>
                <Calendar
                    localizer={localizer}
                    events={this.getEvents()}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: '75vh', width: '90vw', margin: 'auto', marginTop: '12.5vh' }}
                />
            </div>
        );
    }
}

export default MyCalendar;
