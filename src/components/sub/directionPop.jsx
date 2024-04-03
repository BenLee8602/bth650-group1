import PropTypes from "prop-types";
import React, {useReducer} from "react";
import Arrow from "../../assets/icons/arrow";
import "../../style/Notifications.css";

export const DirectionPopup = ({ property1, className }) => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`direction-popup ${className}`}
            onClick={() => {
                dispatch("click");
            }}
        >
            <div className="element">
                {state.property1 === "default" && <>5/10</>}

                {state.property1 === "variant-2" && <>6/10</>}
            </div>
            <div className={`element-m ${state.property1}`}>
                {state.property1 === "default" && <>50M</>}

                {state.property1 === "variant-2" && <>100M</>}
            </div>
            {state.property1 === "variant-2" ?
                <Arrow key="2" variant="2" /> :
                <Arrow key="1" variant="1" />
            }
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

DirectionPopup.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
};
