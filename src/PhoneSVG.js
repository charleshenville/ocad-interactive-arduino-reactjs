import React from "react";
import styles from "./image.module.css"

const PhoneSVG = ({width, height}) => {
    return (

        <svg width={width} height={height} viewBox="0 0 509 1022" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_88_263)" filter="url(#filter0_dddd_88_263)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M88.4218 0H420.578C458.175 0 488.653 30.4715 488.653 68.0598V214.941C490.02 215.424 491 216.728 491 218.261V315.657C491 317.189 490.02 318.493 488.653 318.977V912.94C488.653 950.529 458.175 981 420.578 981H88.4218C50.8254 981 20.3474 950.529 20.3474 912.94V334.232C18.9798 333.748 18 332.444 18 330.911V274.586C18 273.053 18.9798 271.749 20.3474 271.266V249.743C18.9798 249.26 18 247.956 18 246.423V190.098C18 188.565 18.9798 187.261 20.3474 186.778V158.215C18.9798 157.732 18 156.428 18 154.895V125.559C18 124.026 18.9798 122.722 20.3474 122.239V68.0598C20.3474 30.4715 50.8254 0 88.4218 0Z"
                    fill="#3C4045" />
                <mask id="mask0_88_263" className={styles.phone} maskUnits="userSpaceOnUse" x="34" y="14" width="441" height="953">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M34.505 65.2215C34.4563 66.1614 34.4316 67.1077 34.4316 68.0598V912.94C34.4316 942.751 58.6038 966.919 88.4217 966.919H420.578C450.396 966.919 474.568 942.751 474.568 912.94V68.0598C474.568 67.9433 474.568 67.827 474.567 67.7107C474.379 38.0599 450.279 14.0813 420.578 14.0813H353.579C349.534 15.5043 346.635 19.3578 346.635 23.888C346.635 38.2383 334.999 49.8714 320.646 49.8714H188.354C174 49.8714 162.365 38.2383 162.365 23.888C162.365 19.3578 159.465 15.5043 155.421 14.0813H88.4217C74.9682 14.0813 62.664 19.001 53.2108 27.1391C49.5691 30.2742 46.3505 33.8869 43.6523 37.8799C38.3266 45.7613 35.0282 55.1244 34.505 65.2215Z"
                        fill="#F1F1F1" />
                </mask>
                <g mask="url(#mask0_88_263)">
                    <rect width="440.136" height="952.837" transform="translate(34.4316 14.0813)" fill="white" />
                </g>
            </g>
            <defs>
                <filter id="filter0_dddd_88_263" x="0.130953" y="0" width="508.738" height="1021.21" filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha" />
                    <feOffset dy="2.76726" />
                    <feGaussianBlur stdDeviation="1.1069" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.030926 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_88_263" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha" />
                    <feOffset dy="6.6501" />
                    <feGaussianBlur stdDeviation="2.66004" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0444282 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_88_263" result="effect2_dropShadow_88_263" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha" />
                    <feOffset dy="12.5216" />
                    <feGaussianBlur stdDeviation="5.00862" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.055 0" />
                    <feBlend mode="normal" in2="effect2_dropShadow_88_263" result="effect3_dropShadow_88_263" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha" />
                    <feOffset dy="22.3363" />
                    <feGaussianBlur stdDeviation="8.93452" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0655718 0" />
                    <feBlend mode="normal" in2="effect3_dropShadow_88_263" result="effect4_dropShadow_88_263" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_88_263" result="shape" />
                </filter>
                <clipPath id="clip0_88_263">
                    <rect width="473" height="981" fill="white" transform="translate(18)" />
                </clipPath>
            </defs>
        </svg>

    );
};

export default PhoneSVG;