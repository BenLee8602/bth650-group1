import React from "react";
import "../style/Notifications.css";
import { DirectionPopup } from "./sub/directionPop";
import { NotificationPopup } from "./sub/msgPop";

function Notifications() {
    return (
        <>
            <div className={'baseContainer'}>
                <div className={'column'}>
                    <DirectionPopup property1="default" className="class" />
                    <NotificationPopup />
                </div>
            </div>
        </>
    );
}

export default Notifications;

