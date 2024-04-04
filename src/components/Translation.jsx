import Glasses from "./Glasses";
import "../styles/Translation.css";

function Translation() {
    return (<Glasses bgUrl="translatebg.png">
        <div className="translation">
            <div className="target" id="t1">
                <div className="target-text">English text</div>
            </div>
            <div className="target" id="t2">
                <div className="target-text">English text</div>
            </div>
            <div className="target" id="t3">
                <div className="target-text">English text</div>
            </div>
        </div>
    </Glasses>);
}

export default Translation;
