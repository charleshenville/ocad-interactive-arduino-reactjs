import React, { useState, useEffect } from 'react';

function Vector({ demoVisible }) {
    if (demoVisible) {
        return (
            <svg width="61" height="30" viewBox="0 0 61 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60.4142 16.4142C61.1953 15.6332 61.1953 14.3668 60.4142 13.5858L47.6863 0.857864C46.9052 0.0768156 45.6389 0.0768156 44.8579 0.857864C44.0768 1.63891 44.0768 2.90524 44.8579 3.68629L56.1716 15L44.8579 26.3137C44.0768 27.0948 44.0768 28.3611 44.8579 29.1421C45.6389 29.9232 46.9052 29.9232 47.6863 29.1421L60.4142 16.4142ZM0 17H59V13H0V17Z" fill="#C1C1C1" />
            </svg>
        );
    }
    else {
        return null;
    }
}

export default Vector