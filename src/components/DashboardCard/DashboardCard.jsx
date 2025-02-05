import React from "react";
import "./DashboardCard.css";

const DashboardCard = ({ 
    number, 
    title, 
    waveColor = "rgba(25, 159, 177, 0.5)",
    textColor = "#333",
    wavePath
        }) => {
    const defaultWavePath = "M0,50 C150,150 350,0 500,50 L500,150 L0,150 Z";
    const path = wavePath || defaultWavePath;
    return (
        <div className="dashboard-card11">
            {/* Wave Background */}

            <div className="card-header">
                <span>{title}</span>
            </div>
            <div className="wave-bg">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path
                        d={wavePath}
                        style={{ stroke: "none", fill: waveColor }}
                    />
                </svg>
            </div>
            {/* Centered Number & Optional Title */}
            <div className="card-content"  style={{ color: textColor }}>
                <h3>{number}</h3>
                {/* {title && <p>{title}</p>} */}
            </div>
        </div>
    );
};

export default DashboardCard;
