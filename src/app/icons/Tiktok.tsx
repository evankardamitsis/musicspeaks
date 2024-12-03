import * as React from "react"
const Tiktok = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={29}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="#000"
                d="M20.901 5.987a6.875 6.875 0 0 1-2.954-4.495 6.972 6.972 0 0 1-.115-1.25h-4.844l-.008 19.75c-.082 2.212-1.87 3.988-4.064 3.988a3.985 3.985 0 0 1-1.89-.476 4.155 4.155 0 0 1-2.182-3.667c0-2.285 1.827-4.143 4.072-4.143.419 0 .82.07 1.201.191v-5.031a8.731 8.731 0 0 0-1.201-.089C4 10.765 0 14.835 0 19.837a9.112 9.112 0 0 0 3.806 7.427 8.761 8.761 0 0 0 5.11 1.644c4.916 0 8.916-4.07 8.916-9.071V9.82a11.386 11.386 0 0 0 6.74 2.205V7.098a6.614 6.614 0 0 1-3.67-1.11Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 .241h24.571v28.667H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default Tiktok
