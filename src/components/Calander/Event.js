import React from "react";
import moment from "moment";

const Event = ({ event, changeEvent }) => {
    const { titel, start, kleur, locatie } = event;
    moment.locale("nl");
    const timeStart = moment(moment.unix(start.seconds)).format("DD/MM/YYYY");

    return (
        <>
            <li
                style={{
                    padding: 8,
                    paddingBottom: 0,
                    display: "flex",
                    alignContent: "center",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 300
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        <div
                            style={{
                                maxWidth: "65%",
                                height: "100%",
                                display: "flex",
                                alignContent: "start",
                                margin: 0,
                                alignItems: "center",
                            }}
                        >
                            <span
                                style={{
                                    width: 12,
                                    height: 12,
                                    minWidth: 12,
                                    minHeight: 12,
                                    background: `${kleur}`,
                                    display: "inline-block",
                                    borderRadius: 100,
                                    marginRight: 6,
                                }}
                            ></span>
                            <span style={{ textAlign: "left", fontSize: "18px" }}>{titel}</span>
                        </div>
                        <div
                            style={{
                                height: "100%",
                                display: "inline-block",
                                textAlign: "right",
                            }}
                        >
                            <span style={{ display: "block", fontWeight: 600 }}>
                                {timeStart}
                            </span>
                            <span style={{ display: "block" }}>{locatie}</span>
                        </div>
                    </div>
                    <button
                        style={{
                            background:
                                "linear-gradient(90deg,#14b09c,#14b0b4)",
                            border: "none",
                            borderRadius: "3px",
                            padding: "0px 5px",
                            color: "white",
                            marginLeft: 16,
                            marginTop: 7,
                            height: 36
                        }}
                        onClick={() => changeEvent(event)}
                    >
                        Bijwerken
                    </button>
                </div>
            </li>
            <div
                style={{
                    margin: "auto",
                    marginTop: "16px",
                    height: 3,
                    border: "none",
                    background: "#37375c",
                    width: "95%",
                    opacity: 0.05,
                }}
            />
        </>
    );
};

export default Event;
