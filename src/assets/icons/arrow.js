import React from 'react';

const Arrow = ({ variant }) => {
    if (variant === "2") {
        return (
            <svg width="34" height="69" viewBox="0 0 34 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.0717 26.8966L33.4482 13.4841L20 0L20.0717 26.8966Z" fill="white" />
                <path d="M9 42L8.98684 25H0L0.0131654 41.9976L9 42Z" fill="white" />
                <path d="M0 9V25H9V17H21V9H9H0Z" fill="white" />
                <path d="M0.0690918 67H9.02116H0.0690918Z" fill="#D4D4D4" fill-opacity="0.4" />
                <path d="M0.0690918 67H9.02116" stroke="#D4D4D4" stroke-opacity="0.4" stroke-width="3" />
                <path d="M0.0690918 58.0345H9.02116H0.0690918Z" fill="white" />
                <path d="M0.0690918 58.0345H9.02116" stroke="#9E9E9E" stroke-width="3" />
                <path d="M0.0690918 49.069H9.02116H0.0690918Z" fill="white" />
                <path d="M0.0690918 49.069H9.02116" stroke="#F6F6F6" stroke-width="3" />
            </svg>
        );
    } else {
        return (
            <svg width="27" height="67" viewBox="0 0 27 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.8966 13.3766L13.4841 0L0 13.4483L26.8966 13.3766Z" fill="white" />
                <path d="M17.2409 40.3269L17.2274 8.56207H8.04675L8.0602 40.3224L17.2409 40.3269Z" fill="white" />
                <path d="M8.06909 65H17.0212H8.06909Z" fill="white" />
                <path d="M8.06909 65H17.0212" stroke="#D4D4D4" stroke-opacity="0.4" stroke-width="3" />
                <path d="M8.06909 56.0345H17.0212H8.06909Z" fill="white" />
                <path d="M8.06909 56.0345H17.0212" stroke="#9E9E9E" stroke-width="3" />
                <path d="M8.06909 47.069H17.0212H8.06909Z" fill="white" />
                <path d="M8.06909 47.069H17.0212" stroke="#F6F6F6" stroke-width="3" />
            </svg>
        );
    }
};

export default Arrow;