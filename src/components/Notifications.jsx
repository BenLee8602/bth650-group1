import React from "react";
import Glasses from "./Glasses.jsx";
import "../style/Notifications.css";
import { DirectionPopup } from "./sub/directionPop";
import { NotificationPopup } from "./sub/msgPop";

function Notifications() {
    return (
        <Glasses bgUrl="./src/assets/images/italy.jpg">
            <div className={'baseContainer'}>
                <div className={'column'}>
                    <DirectionPopup property1="default" className="class" />
                    <NotificationPopup />
                </div>
            </div>
        </Glasses>
    );
}

export default Notifications;

