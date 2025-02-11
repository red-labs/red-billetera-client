import React from "react";

export function qr(fill = "#fff", width = 24, height = 24) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M3,11H5V13H3V11M11,5H13V9H11V5M9,11H13V15H11V13H9V11M15,11H17V13H19V11H21V13H19V15H21V19H19V21H17V19H13V21H11V17H15V15H17V13H15V11M19,19V15H17V19H19M15,3H21V9H15V3M17,5V7H19V5H17M3,3H9V9H3V3M5,5V7H7V5H5M3,15H9V21H3V15M5,17V19H7V17H5Z"
      />
    </svg>
  );
}

export function camera(fill = "#fff", width = 24, height = 24) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
    >
      <circle fill={fill} cx="24" cy="24" r="6.4" />
      <path
        fill={fill}
        d="M18 4l-3.66 4H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4h-6.34L30 4H18zm6 30c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z"
      />
    </svg>
  );
}

export function copy(fill = "#fff", width = 24, height = 24) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
    >
      <path
        fill={fill}
        d="M32 2H8C5.79 2 4 3.79 4 6v28h4V6h24V2zm6 8H16c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h22c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4zm0 32H16V14h22v28z"
      />
    </svg>
  );
}

export function upArrow(fill = "#fff", width = 24, height = 24) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
    >
      <path
        fill={fill}
        d="M8 24l2.83 2.83L22 15.66V40h4V15.66l11.17 11.17L40 24 24 8 8 24z"
      />
    </svg>
  );
}

export function downArrow(fill = "#F23C22", margin = 10, width =16, height = 16) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 1568 1568"
    >


            <path d="M1527.2,636.6 L1527.2,891.4 C1527.2,917.4 1506.2,938.4 1480.2,938.4 L945.1,938.4 C941.2,938.4 938.1,941.6 938.3,945.5 L938.4,947.7 L938.4,1480.1 C938.4,1506.1 917.4,1527.1 891.4,1527.1 L636.6,1527.1 C610.6,1527.1 589.6,1506.1 589.6,1480.1 L589.6,951.8 L589.6,945.3 C589.6,941.5 586.6,938.5 582.8,938.5 L47.8,938.5 C21.8,938.5 0.8,917.5 0.8,891.5 L0.8,636.6 C0.8,610.6 21.8,589.6 47.8,589.6 L582.8,589.6 C586.6,589.6 589.6,586.6 589.6,582.8 L589.6,581.8 L589.6,47.8 C589.6,21.8 610.6,0.8 636.6,0.8 L891.5,0.8 C917.5,0.8 938.5,21.8 938.5,47.8 L938.5,582.8 C938.5,584.7 939.3,586.4 940.5,587.6 C941.7,588.8 943.4,589.6 945.3,589.6 L1480.3,589.6 C1506.2,589.6 1527.2,610.6 1527.2,636.6 Z" id="Path" fill="#282829"></path>

    </svg>
  );
}

export function rightArrow(fill = "#fff", width = 24, height = 24) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
    >
      <path
        fill={fill}
        d="M24 8l-2.83 2.83L32.34 22H8v4h24.34L21.17 37.17 24 40l16-16z"
      />
    </svg>
  );
}

export function leftChevron(fill = "#fff", width = 24, height = 24) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
    >
      <path
        fill={fill}
        d="M30.83 14.83L28 12 16 24l12 12 2.83-2.83L21.66 24z"
      />
    </svg>
  );
}

export function whatsAppIcon(fill = "#25D366", width = 24, height = 24) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 50 48"
    >

     <path d="M4.84086276,37.2044729 C2.40934998,33.4474483 1,28.9830254 1,24.1935484 C1,10.8318199 11.969023,0 25.5,0 C39.030977,0 50,10.8318199 50,24.1935484 C50,37.5552769 39.030977,48.3870968 25.5,48.3870968 C21.0781679,48.3870968 16.9299367,47.2303251 13.3487089,45.2065145 C13.1284763,45.0820575 0.684786762,49.6770704 0.465516829,49.5091408 C0.0956068801,49.2258422 5.14982562,37.6818633 4.84086276,37.2044729 Z M9.61754032,35.5373784 C9.78300585,35.7628944 6.87186056,43.0528048 7.04410358,43.1803703 C7.18736404,43.2864709 14.4671467,40.2012153 14.9020934,40.4778156 C17.957653,42.4209702 21.5954975,43.5483871 25.5,43.5483871 C36.3247816,43.5483871 45.1,34.8829312 45.1,24.1935484 C45.1,13.5041656 36.3247816,4.83870968 25.5,4.83870968 C14.6752184,4.83870968 5.9,13.5041656 5.9,24.1935484 C5.9,28.430721 7.27881177,32.3498828 9.61754032,35.5373784 Z M19.8018921,14.7828644 C21.1368014,16.7131037 21.8519317,18.9258168 21.8519317,20.008634 C21.8519316,21.0914512 20.0879442,22.6450586 20.0879442,22.6450586 C20.0879442,22.6450586 20.4340425,25.0931675 23.866667,27.8237501 C27.2992916,30.5543326 28.8602065,30.1776998 28.8602065,30.1776998 C28.8602065,30.1776998 30.5288437,27.0234058 31.8160788,27.4193544 C33.1033139,27.8153031 35.1533515,28.7653288 36.9173389,29.7539892 C38.6813263,30.7426494 36.5836116,35.1209944 33.7230913,35.6388642 C30.862571,36.156734 26.2380637,35.591785 21.3275031,31.3546746 C16.4169425,27.1175642 14.9980716,24.3212289 14.3669031,21.7034787 C12.6982661,14.7828644 18.466983,12.8526249 19.8018921,14.7828644 Z" id="whatsapp_s" fill="#25D366" ></path>



    </svg>


  );
}
