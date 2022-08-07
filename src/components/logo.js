import { Link } from "gatsby"
import * as React from "react"

const Logo = () => (
  <Link to="/" className="inline-block z-30">
    <div className="w-[150px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        clipRule="evenodd"
        viewBox="0 0 392 88"
        className="w-full"
      >
        <path
          d="M761.53 1128.98h-20v87.18h20v-87.18zm89.666 87.18v-56.05l-29.833 48.96h-3l-30.167-49.5v56.59h63zm54.886 0h-27.886v-27.09h12.334l15.552 27.09zm20.084-38.57a40.312 40.312 0 01-9.803 6.98l18.32 31.59h14.725c-12.584-8.92-21.025-22.55-23.242-38.57zm158.544 38.57h-37.01v-52.09l37.01 52.09zm27.99-87.18v87.18h20v-87.18h-20zm-91.67 63.97v-47.77l-7.78 4.34c-5.17-8.66-15.167-13.79-27-13.79-20.667 0-34 13.3-34 33.34 0 20.03 13.333 33.33 34 33.33 11.833 0 22-5.13 27-13.78l7.78 4.33zm65-18.88l-32.03-45.09h32.03v45.09zm-207.834-38.34h19.667c7.333 0 13.333 6.5 13.333 15s-6 15-13.333 15h-19.667v-30zm-58.333 26.84l-20.519-33.59h41.038l-20.519 33.59zm121.417-33.59h-9.803a39.965 39.965 0 013.786 7.48 56.062 56.062 0 016.017-7.48z"
          transform="translate(-741.53 -1128.98)"
        ></path>
      </svg>
    </div>
  </Link>
)

export default Logo
