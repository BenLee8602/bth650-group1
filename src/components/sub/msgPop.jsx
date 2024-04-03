import React, { useReducer } from "react";
import PropTypes from "prop-types";
import Communication from "../../assets/icons/communication";
import "../../style/Notifications.css";

export const NotificationPopup = ({ property1, className }) => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });
    return (
        <div className="notification-popup" onClick={() => {
            dispatch("click");
        }}>
            <div className="overlap-group">
                {state.property1 === "variant-2"  ? <Communication variant="2" /> : <Communication variant="1" />}
                <div className="overlap">
                    {state.property1 === "variant-2" ? <div className="text-wrapper">To David</div> : <div className="text-wrapper">David</div>}
                    {state.property1 === "variant-2" ? <p className="paragraph">Be there in...</p> : <p className="paragraph">Hey man, how&nbsp;close are you?</p>}
                </div>
            </div>
        </div>
    );
};

function reducer(state, action) {
    if (state.property1 === "default") {
        switch (action) {
            case "click":
                return {
                    property1: "variant-2",
                };
        }
    }

    if (state.property1 === "variant-2") {
        switch (action) {
            case "click":
                return {
                    property1: "default",
                };
        }
    }

    return state;
}

NotificationPopup.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
};
