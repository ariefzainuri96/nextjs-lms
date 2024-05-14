interface IconProps {
  fill?: string;
  stroke?: string;
  width?: string;
  height?: string;
}

export const IcArrowUp = ({ width, height, fill, stroke }: IconProps) => {
  return (
    <svg
      width={`${width ?? 24}px`}
      height={`${height ?? 24}px`}
      viewBox="0 0 24 24"
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 15L12 9L18 15"
        stroke={stroke ?? "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IcEdit = ({ width, height, fill, stroke }: IconProps) => {
  return (
    <svg
      width={`${width ?? 24}px`}
      height={`${height ?? 24}px`}
      viewBox="0 0 24 24"
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.4998 5.49994L18.3282 8.32837M3 20.9997L3.04745 20.6675C3.21536 19.4922 3.29932 18.9045 3.49029 18.3558C3.65975 17.8689 3.89124 17.4059 4.17906 16.9783C4.50341 16.4963 4.92319 16.0765 5.76274 15.237L17.4107 3.58896C18.1918 2.80791 19.4581 2.80791 20.2392 3.58896C21.0202 4.37001 21.0202 5.63634 20.2392 6.41739L8.37744 18.2791C7.61579 19.0408 7.23497 19.4216 6.8012 19.7244C6.41618 19.9932 6.00093 20.2159 5.56398 20.3879C5.07171 20.5817 4.54375 20.6882 3.48793 20.9012L3 20.9997Z"
        stroke={stroke ?? "#000000"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const IcClose = ({ width, height, fill, stroke }: IconProps) => {
  return (
    <svg
      width={`${width ?? 24}px`}
      height={`${height ?? 24}px`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.2983 5.70998C18.2058 5.61728 18.0959 5.54373 17.9749 5.49355C17.8539 5.44337 17.7242 5.41754 17.5933 5.41754C17.4623 5.41754 17.3326 5.44337 17.2116 5.49355C17.0907 5.54373 16.9808 5.61728 16.8883 5.70998L11.9983 10.59L7.10827 5.69998C7.01569 5.6074 6.90578 5.53396 6.78481 5.48385C6.66385 5.43375 6.5342 5.40796 6.40327 5.40796C6.27234 5.40796 6.14269 5.43375 6.02173 5.48385C5.90076 5.53396 5.79085 5.6074 5.69827 5.69998C5.60569 5.79256 5.53225 5.90247 5.48214 6.02344C5.43204 6.1444 5.40625 6.27405 5.40625 6.40498C5.40625 6.53591 5.43204 6.66556 5.48214 6.78652C5.53225 6.90749 5.60569 7.0174 5.69827 7.10998L10.5883 12L5.69827 16.89C5.60569 16.9826 5.53225 17.0925 5.48214 17.2134C5.43204 17.3344 5.40625 17.464 5.40625 17.595C5.40625 17.7259 5.43204 17.8556 5.48214 17.9765C5.53225 18.0975 5.60569 18.2074 5.69827 18.3C5.79085 18.3926 5.90076 18.466 6.02173 18.5161C6.14269 18.5662 6.27234 18.592 6.40327 18.592C6.5342 18.592 6.66385 18.5662 6.78481 18.5161C6.90578 18.466 7.01569 18.3926 7.10827 18.3L11.9983 13.41L16.8883 18.3C16.9809 18.3926 17.0908 18.466 17.2117 18.5161C17.3327 18.5662 17.4623 18.592 17.5933 18.592C17.7242 18.592 17.8538 18.5662 17.9748 18.5161C18.0958 18.466 18.2057 18.3926 18.2983 18.3C18.3909 18.2074 18.4643 18.0975 18.5144 17.9765C18.5645 17.8556 18.5903 17.7259 18.5903 17.595C18.5903 17.464 18.5645 17.3344 18.5144 17.2134C18.4643 17.0925 18.3909 16.9826 18.2983 16.89L13.4083 12L18.2983 7.10998C18.6783 6.72998 18.6783 6.08998 18.2983 5.70998Z"
        fill={fill ?? "black"}
      />
    </svg>
  );
};

export const IcWarning = ({ width, height, fill, stroke }: IconProps) => {
  return (
    <svg
      width={`${width ?? 57}px`}
      height={`${height ?? 57}px`}
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4.83594"
        y="4.06006"
        width="48"
        height="48"
        rx="24"
        fill="#FEE4E2"
      />
      <rect
        x="4.83594"
        y="4.06006"
        width="48"
        height="48"
        rx="24"
        stroke="#FEF3F2"
        stroke-width="8"
      />
      <path
        d="M28.8359 24.0601V28.0601M28.8359 32.0601H28.8459M38.8359 28.0601C38.8359 33.5829 34.3588 38.0601 28.8359 38.0601C23.3131 38.0601 18.8359 33.5829 18.8359 28.0601C18.8359 22.5372 23.3131 18.0601 28.8359 18.0601C34.3588 18.0601 38.8359 22.5372 38.8359 28.0601Z"
        stroke="#D92D20"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const IcUpload = ({ width, height, fill, stroke }: IconProps) => {
  return (
    <svg
      width={`${width ?? 24}px`}
      height={`${height ?? 24}px`}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.83203 17.8003V19.8003C4.83203 20.3307 5.04274 20.8394 5.41782 21.2145C5.79289 21.5896 6.3016 21.8003 6.83203 21.8003H18.832C19.3625 21.8003 19.8712 21.5896 20.2462 21.2145C20.6213 20.8394 20.832 20.3307 20.832 19.8003V17.8003M7.83203 9.80029L12.832 4.80029M12.832 4.80029L17.832 9.80029M12.832 4.80029V16.8003"
        stroke={stroke ?? "#344054"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const IcEye = ({ width, height, fill, stroke }: IconProps) => {
  return (
    <svg
      width={`${width ?? 24}px`}
      height={`${height ?? 24}px`}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0273 12.8003C10.0273 12.2036 10.2644 11.6313 10.6864 11.2093C11.1083 10.7873 11.6806 10.5503 12.2773 10.5503C12.8741 10.5503 13.4464 10.7873 13.8683 11.2093C14.2903 11.6313 14.5273 12.2036 14.5273 12.8003C14.5273 13.397 14.2903 13.9693 13.8683 14.3913C13.4464 14.8132 12.8741 15.0503 12.2773 15.0503C11.6806 15.0503 11.1083 14.8132 10.6864 14.3913C10.2644 13.9693 10.0273 13.397 10.0273 12.8003Z"
        fill={fill ?? "#6ED8BA"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.27734 12.8003C2.27734 14.4403 2.70234 14.9913 3.55234 16.0963C5.24934 18.3003 8.09534 20.8003 12.2773 20.8003C16.4593 20.8003 19.3053 18.3003 21.0023 16.0963C21.8523 14.9923 22.2773 14.4393 22.2773 12.8003C22.2773 11.1603 21.8523 10.6093 21.0023 9.50429C19.3053 7.30029 16.4593 4.80029 12.2773 4.80029C8.09534 4.80029 5.24934 7.30029 3.55234 9.50429C2.70234 10.6103 2.27734 11.1613 2.27734 12.8003ZM12.2773 9.05029C11.2828 9.05029 10.329 9.44538 9.62569 10.1486C8.92243 10.8519 8.52734 11.8057 8.52734 12.8003C8.52734 13.7949 8.92243 14.7487 9.62569 15.4519C10.329 16.1552 11.2828 16.5503 12.2773 16.5503C13.2719 16.5503 14.2257 16.1552 14.929 15.4519C15.6323 14.7487 16.0273 13.7949 16.0273 12.8003C16.0273 11.8057 15.6323 10.8519 14.929 10.1486C14.2257 9.44538 13.2719 9.05029 12.2773 9.05029Z"
        fill={fill ?? "#33C199"}
      />
    </svg>
  );
};

export const IcSearch = ({ width, height, fill, stroke }: IconProps) => {
  return (
    <svg
      width={`${width ?? 24}px`}
      height={`${height ?? 24}px`}
      viewBox="0 0 24 24"
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
        stroke={stroke ?? "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IcTrash = ({ width, height, fill, stroke }: IconProps) => {
  return (
    <svg
      width={`${width ?? 20}px`}
      height={`${height ?? 21}px`}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 5.82766H4.16667M4.16667 5.82766H17.5M4.16667 5.82766V17.4943C4.16667 17.9364 4.34226 18.3603 4.65482 18.6728C4.96738 18.9854 5.39131 19.161 5.83333 19.161H14.1667C14.6087 19.161 15.0326 18.9854 15.3452 18.6728C15.6577 18.3603 15.8333 17.9364 15.8333 17.4943V5.82766H4.16667ZM6.66667 5.82766V4.16099C6.66667 3.71896 6.84226 3.29504 7.15482 2.98248C7.46738 2.66992 7.89131 2.49432 8.33333 2.49432H11.6667C12.1087 2.49432 12.5326 2.66992 12.8452 2.98248C13.1577 3.29504 13.3333 3.71896 13.3333 4.16099V5.82766M8.33333 9.99432V14.9943M11.6667 9.99432V14.9943"
        stroke={stroke ?? "#E24955"}
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const IcAdd = ({ width, height, fill, stroke }: IconProps) => {
  return (
    <svg
      width={`${width ?? 24}px`}
      height={`${height ?? 24}px`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12H20M12 4V20"
        stroke={stroke ?? "#000000"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const IcMenu = ({ width, height, fill, stroke }: IconProps) => {
  return (
    <svg
      width={`${width ?? 24}px`}
      height={`${height ?? 24}px`}
      viewBox="0 0 24 24"
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6H20M4 12H14M4 18H9"
        stroke={stroke ?? "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IcLogout = ({ fill, stroke }: IconProps) => {
  return (
    <svg
      width="36"
      height="37"
      viewBox="0 0 36 37"
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 26.3276H12.1667C11.7246 26.3276 11.3007 26.152 10.9882 25.8395C10.6756 25.5269 10.5 25.103 10.5 24.661V12.9943C10.5 12.5523 10.6756 12.1284 10.9882 11.8158C11.3007 11.5032 11.7246 11.3276 12.1667 11.3276H15.5M21.3333 22.9943L25.5 18.8276M25.5 18.8276L21.3333 14.661M25.5 18.8276H15.5"
        stroke={stroke ?? "#667085"}
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IcBlogging = ({ fill, stroke }: IconProps) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 3H5V21H9M15 21H19V3H15"
        stroke={stroke ?? "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IcMasterData = ({ fill, stroke }: IconProps) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 12H21M9 4L9 20M6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.0799 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.07989 3 7.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20Z"
        stroke={stroke ?? "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IcTournament = ({ fill, stroke }: IconProps) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 9H19M8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V6.2C19 5.0799 19 4.51984 18.782 4.09202C18.5903 3.71569 18.2843 3.40973 17.908 3.21799C17.4802 3 16.9201 3 15.8 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.07989 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.07989 21 8.2 21ZM15 15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15Z"
        stroke={stroke ?? "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
