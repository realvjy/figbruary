

export const Shape1 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    fill="none"
    viewBox="1 1 200 250"
    {...props}
  >
    <g>
      <path
        fill="#F24E1E"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth={1.5}
        d="M14 1C6.82 1 1 6.82 1 14v118c0 7.18 5.82 13 13 13h118c7.18 0 13-5.82 13-13V14c0-7.18-5.82-13-13-13H14Zm92 39H40v66h66V40Z"
        clipRule="evenodd"
      />
      <animateMotion
        dur="10s"
        path="M56.5517 1.67869C41.4867 -3.15334 26.1375 19.3021 17.3259 22.1443C-7.00548 22.1443 -1.71852 67.9079 17.3259 62.5072L67.9215 42.3257C76.4489 38.9149 74.1637 7.32765 56.5517 1.67869Z"
        repeatCount="indefinite"
      />
    </g>
  </svg>
);

export const Shape2 =  (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={250}
    height={250}
    fill="none"
    viewBox="1 1 350 300"
    {...props}
  >
    <g>
      <path
        fill="#F4C8C6"
        fillRule="evenodd"
        stroke="#000"
        d="m130.5 3 22.444 65L218.5 40.5l-33.814 59.316L249 120.5l-64.314 20.684 35.97 62.401-67.712-33.149L130.5 238l-22.444-65L28.5 211l47.814-69.816L3 120.5l73.314-20.684-35.97-62.401 67.712 33.15L130.5 3Z"
        clipRule="evenodd"
      />
      <animateMotion
        dur="20s"
        path="M3.71373 43.3712C11.3053 57.2517 38 62.5006 46.2459 55.5578C58 28.5 73.1019 38.099 74.051 26.2997C75 14.5004 61 10.0004 51.5 3.00037C42 -3.99963 37.9456 11.846 23.4728 6.07465C9 0.303267 -5.16136 27.1439 3.71373 43.3712Z"
        repeatCount="indefinite"
      />
    </g>
  </svg>
);

const Shape3 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={150}
    height={150}
    fill="none"
    viewBox="1 1 350 300"
    {...props}
  >
    <g>
      <path
        fill="#C7B9FF"
        stroke="#000"
        d="M162.442 209.552c15.017 5.096 31.921 4.781 47.57-2.157 33.064-14.66 48.004-53.333 33.37-86.38-6.927-15.641-19.237-27.219-33.788-33.521 5.109-15.019 4.808-31.92-2.119-47.56C192.841 6.886 154.174-8.02 121.11 6.639c-15.649 6.938-27.238 19.255-33.553 33.809-15.017-5.096-31.92-4.78-47.57 2.157-33.063 14.66-48.003 53.333-33.369 86.38 6.927 15.641 19.236 27.218 33.787 33.52-5.11 15.019-4.808 31.921 2.119 47.561 14.634 33.048 53.301 47.954 86.365 33.295 15.649-6.938 27.238-19.255 33.553-33.809Z"
      />
      <animateMotion
        dur="10s"
        path="M57.681 43.0382C58.1133 27.2232 42.2925 27.7268 40.334 16.1385C40.9239 -14.5743 -3.50001 6.49996 1.57726 27.4114C1.57726 27.4114 3.5 35.5 10.5 43.0382C15.1903 48.0892 24.0126 54.3933 24.0126 54.3933C31.5 59.5 57.1756 61.527 57.681 43.0382Z"
        repeatCount="indefinite"
      />
    </g>
  </svg>
);


const Shape4 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    fill="none"
    viewBox="-150 -90 400 300"
    {...props}
  >
    <g>
      <path
        fill="#C7B9FF"
        stroke="#000"
        d="M50.339 1.19 1.969 157.761 129.72 55.128 50.339 1.19Z"
      />
      <animateMotion
        dur="30s"
        path="M39 51.4999C52.9958 44.1229 60.6388 32.4449 53.8238 24.0931C26.9501 11.9238 37.2833 2.1306 25.5 0.999999C13.7167 -0.1306 11.1413 8.10897 3.99583 17.5001C-3.14961 26.8912 5.5 25.9999 3.99583 35.4999C2.49167 44.9999 22.638 60.124 39 51.4999Z"
        repeatCount="indefinite"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        attributeType="xml"
        dur="120s"
        from="360 8.4 9.5"
        repeatCount="indefinite"
        to="0 8.4 9.5"
        type="rotate"
      />
    </g>
  </svg>
)

const Shape5 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    fill="none"
    viewBox="-20 -20 200 200"
    {...props}
  >
    <g>
      <path
        fill="#CD97E9"
        stroke="#000"

        d="M99.5 50c0 27.338-22.162 49.5-49.5 49.5S.5 77.338.5 50 22.662.5 50 .5 99.5 22.662 99.5 50Zm-50 34.5c18.778 0 34-15.222 34-34s-15.222-34-34-34-34 15.222-34 34 15.222 34 34 34Z"
      />
      <animateMotion
        dur="20s"
        path="M32.3434 1.63493C17.1697 6.11405 22.5406 21.0038 12.1259 26.4496C-17.2642 35.3854 16.5137 71.1157 34.8304 59.8212C34.8304 59.8212 41.928 55.4916 46.9324 46.5037C50.2855 40.4815 53.5526 30.1422 53.5526 30.1422C56.0939 21.4427 50.0824 -3.60146 32.3434 1.63493Z"
        repeatCount="indefinite"
      />
    </g>
  </svg>
);


const Shape6 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    fill="none"
    viewBox="-30 -30 300 300"
    {...props}
  >
    <g>
      <path
        fill="#F2CB58"
        stroke="#000"
        d="M94.333 1H75.667v61.617L30.892 17.844 17.841 30.896l44.772 44.772H1v18.666h61.598l-44.791 44.791 13.059 13.06 44.8-44.801V169h18.667v-61.612l44.801 44.801 13.052-13.052-44.802-44.802H169V75.668h-61.617l44.771-44.771-13.059-13.06L94.333 62.6V1Z"
      />
      <animateMotion
        dur="20s"
        path="M36.5 4.5C22.0841 -2.01799 3.29393 0.629524 0.885779 11.1366C8.5 25.5001 -2.5 28.5001 2.5 41.0001C7.5 53.5001 9.70025 58.6259 21.5 58.5001C33.2998 58.3743 32.0604 48.1092 40.4825 43.4637C48.9046 38.8183 53.3531 12.12 36.5 4.5Z"
        repeatCount="indefinite"
      />
    </g>
  </svg>
);

const Shape7 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={149}
    height={221}
    fill="none"
    {...props}
  >
    <path
      fill="#5551FF"
      stroke="#000"
      d="M123.117 59.962C138.376 53.788 148 44.755 148 34.692 148 16.085 115.093 1 74.5 1S1 16.085 1 34.692c0 10.063 9.624 19.096 24.883 25.27C10.624 66.135 1 75.168 1 85.23c0 10.063 9.624 19.095 24.883 25.269C10.624 116.674 1 125.706 1 135.769c0 10.063 9.624 19.096 24.883 25.269C10.624 167.212 1 176.245 1 186.308 1 204.915 33.907 220 74.5 220s73.5-15.085 73.5-33.692c0-10.063-9.624-19.096-24.883-25.27C138.376 154.865 148 145.832 148 135.769c0-10.063-9.624-19.095-24.883-25.269C138.376 104.326 148 95.294 148 85.23c0-10.062-9.624-19.095-24.883-25.269Z"
    />
  </svg>
)

const Shape8 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    fill="none"
    viewBox="-30 -30 300 300"
    {...props}
  >
    <g>
      <path
        fill="#A1D99E"
        fillRule="evenodd"
        stroke="#000"
        d="M14 1C6.82 1 1 6.82 1 14v118c0 7.18 5.82 13 13 13h118c7.18 0 13-5.82 13-13V14c0-7.18-5.82-13-13-13H14Zm92 39H40v66h66V40Z"
        clipRule="evenodd"
      />
      <animateMotion
        dur="20s"
        path="M36.5 4.5C22.0841 -2.01799 3.29393 0.629524 0.885779 11.1366C8.5 25.5001 -2.5 28.5001 2.5 41.0001C7.5 53.5001 9.70025 58.6259 21.5 58.5001C33.2998 58.3743 32.0604 48.1092 40.4825 43.4637C48.9046 38.8183 53.3531 12.12 36.5 4.5Z"
        repeatCount="indefinite"
      />
    </g>
  </svg>
)

const Shape9 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={150}
    height={150}
    fill="none"
    viewBox="1 1 350 300"
    {...props}
  >
    <g>
      <circle
        cx={-10}
        cy={70}
        r={80}
        fill="#C7B9FF"
        stroke="#000"
        strokeWidth={1.5}
        transform="matrix(-1 0 0 1 99 1)"
      />
      <animateMotion
        dur="8s"
        path="M57.681 43.0382C58.1133 27.2232 42.2925 27.7268 40.334 16.1385C40.9239 -14.5743 -3.50001 6.49996 1.57726 27.4114C1.57726 27.4114 3.5 35.5 10.5 43.0382C15.1903 48.0892 24.0126 54.3933 24.0126 54.3933C31.5 59.5 57.1756 61.527 57.681 43.0382Z"
        repeatCount="indefinite"
      />
    </g>
  </svg>
)

const Figma = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={83}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#1ABCFE"
        d="M27.5 41.25a13.75 13.75 0 1 1 27.5 0 13.75 13.75 0 0 1-27.5 0Z"
      />
      <path
        fill="#0ACF83"
        d="M0 68.75A13.75 13.75 0 0 1 13.75 55H27.5v13.75a13.75 13.75 0 0 1-27.5 0Z"
      />
      <path
        fill="#FF7262"
        d="M27.5 0v27.5h13.75a13.75 13.75 0 0 0 0-27.5H27.5Z"
      />
      <path
        fill="#F24E1E"
        d="M0 13.75A13.75 13.75 0 0 0 13.75 27.5H27.5V0H13.75A13.75 13.75 0 0 0 0 13.75Z"
      />
      <path
        fill="#A259FF"
        d="M0 41.25A13.75 13.75 0 0 0 13.75 55H27.5V27.5H13.75A13.75 13.75 0 0 0 0 41.25Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h55v82.5H0z" />
      </clipPath>
    </defs>
  </svg>
)
export const shapes = {
  "shape1":Shape1,
  "shape2": Shape2,
  "shape3":Shape3,
  "shape4":Shape4,
  "shape5": Shape5,
  "shape6":Shape6,
  "shape7":Shape7,
  "shape8": Shape8,
  "shape9": Shape9,
  "figma": Figma
}