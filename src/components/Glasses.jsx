import "../styles/Glasses.css";

function Glasses({ bgUrl, children }) {
    const bg = {
        backgroundImage: `url("${bgUrl}")`
    };

    return <div className="glasses" style={bg}>
        <div className="navbar">
            
            <div className="info-container">
                <div className="weather-container">
                    <img className="weather-icon" src="https://cdn.builder.io/api/v1/image/assets/TEMP/948594c97a01bf796612673df8e6b758ce6e51701f6e61595571baf4333ad026?apiKey=77f16f23deb04dc5b3ab38b97f10d79b&" alt="Weather Icon"/>
                    <div className="temperature">32F</div>
                </div>
                <div className="music-title">Now Playing: Phil Collins</div>
            </div>
            
            <div className="date-text">Wednesday 20 2024</div>
            <div className="icon-container">
                <img className="icon" src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa484be7a0f500c8fead82995fb037ccebdfc23b1679284e45a06e17754ed0cb?apiKey=77f16f23deb04dc5b3ab38b97f10d79b&" alt="Icon 1"/>
                <img className="icon" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c83fb8bc181b2c90c8b303ec7f7ed4b7f398e7bf76950110a4b89d70a765877b?apiKey=77f16f23deb04dc5b3ab38b97f10d79b&" alt="Icon 2"/>
                <img className="icon" src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b38a358a5e6fa0fb12b9d97765b367f0ec2389ade050930e98d9afc6bdd883?apiKey=77f16f23deb04dc5b3ab38b97f10d79b&" alt="Icon 3"/>
                <img className="icon" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6568a430c93dc6f2d23f408a21d68491777149e54950ce12d5c8136c837c9b44?apiKey=77f16f23deb04dc5b3ab38b97f10d79b&" alt="Icon 4"/>
            </div>

        </div>
        { children }
    </div>
}

export default Glasses;
