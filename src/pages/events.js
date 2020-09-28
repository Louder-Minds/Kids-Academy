import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const JSONDATA = {
    events: [
        {
            start: '25-08-2020',
            end: '30-08-2020',
            event: 'Cito training',
            eventColor: '#1e1e1e',
            location: 'Amsterdam',
            locationColor: '#1e1e1e',
        },
    ],
};

// moment("25-08-2020", "MM-DD-YYYY")

class index extends Component {
    state = {
        events: [
            {
                start: moment().toDate(),
                end: moment().add(1, 'days').toDate(),
                title: 'Cito training',
            },
        ],
    };

    render() {
        return (
            <Calendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                events={this.state.events}
                style={{
                    height: '50vh',
                    width: '50vw',
                    margin: 'auto',
                    marginTop: '25vh',
                }}
            />
        );
    }
}

export default index;

/*
import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const JSONDATA = {
    locations: ['Amsterdam', 'Haarlem'],
    events: [
        {
            start: '22-08-2020',
            end: '29-08-2020',
            event: 'Cito training',
            color: '#1e1e1e',
            location: 'Amsterdam',
            locationColor: '#1e1e1e',
        },
        {
            start: '21-08-2020',
            end: '23-08-2020',
            event: 'Life training',
            color: '#1e1e1e',
            location: 'Haarlem',
            locationColor: '#1e1e1e',
        },
    ],
};

// moment("25-08-2020", "MM-DD-YYYY")

class index extends Component {
    state = {
        options: JSONDATA.locations,
        selectedLocation: JSONDATA.locations[0],
    };
    parseData() {
        const events = JSONDATA.events.map(({ start, end, event, color, location }) => {
            if (location === this.state.selectedLocation) {
                const format = 'DD-MM-YYYY';
                return {
                    start: moment(start, format),
                    end: moment(end, format),
                    title: event,
                    color: color,
                };
            }
        });

        return events;
    }

    getEventColors(event) {
        const style = { backgroundColor: event.color };
        return { style };
    }

    render() {
        return (
            <div>
                <select onChange={(e) => this.setState({ selectedLocation: e.target.value })}>
                    {this.state.options.map((item, i) => (
                        <option key={i}>{item}</option>
                    ))}
                </select>

                <Calendar
                    startAccessor="start"
                    endAccessor="end"
                    localizer={localizer}
                    defaultDate={new Date()}
                    defaultView="month"
                    events={this.parseData()}
                    style={{
                        height: '50vh',
                        width: '50vw',
                        margin: 'auto',
                        marginTop: '25vh',
                    }}
                    // eventPropGetter={this.getEventColors}
                />
            </div>
        );
    }
}

export default index;
*/
