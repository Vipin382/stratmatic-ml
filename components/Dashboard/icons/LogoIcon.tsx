import React from "react";

interface LofgoInterface {
  collapsed: () => void;
}

const LogoIcon: React.FC<LofgoInterface> = ({ collapsed }) => {
  return (
    <div
      onClick={() => {
        collapsed();
      }}
    >
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 6.18V13.83C0 14.48 0.459999 15.26 1.03 15.58L8.03 19.47C8.56 19.77 9.44 19.77 9.97 19.47L16.97 15.58C17.54 15.27 18 14.48 18 13.83V6.18C18 5.53 17.54 4.75 16.97 4.43L9.97 0.540002C9.44 0.240002 8.56 0.240002 8.03 0.540002L1.03 4.43C0.459999 4.74 0 5.53 0 6.18Z"
          fill="#E8E8E8"
        />
      </svg>
    </div>
  );
};

export default LogoIcon;
