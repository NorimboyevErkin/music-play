export function Play({ color = "white", width = "25", height = "25" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      className="bi bi-play-fill"
      viewBox="0 0 16 16"
    >
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
    </svg>
  );
}
export function Pause({ color = "white", width = "28", height = "28" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" y="7" width="4" height="14" rx="1" fill={color} />
      <rect x="16" y="7" width="4" height="14" rx="1" fill={color} />
    </svg>
  );
}
export function Next({ color = "white", width = "28", height = "28" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.8"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 7C24.5523 7 25 7.44772 25 8V24C25 24.5523 24.5523 25 24 25H22C21.4477 25 21 24.5523 21 24V18.1512L8.5 24.8738C7.83333 25.2323 7 24.7842 7 24.0671V7.9329C7 7.21582 7.83333 6.76765 8.5 7.12619L21 13.8488V8C21 7.44772 21.4477 7 22 7H24Z"
        fill={color}
      />
    </svg>
  );
}
export function Prev({ color = "white", width = "28", height = "28" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.8"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 7C7.44772 7 7 7.44772 7 8V24C7 24.5523 7.44772 25 8 25H10C10.5523 25 11 24.5523 11 24V18.1512L23.5 24.8738C24.1667 25.2323 25 24.7842 25 24.0671V7.9329C25 7.21582 24.1667 6.76765 23.5 7.12619L11 13.8488V8C11 7.44772 10.5523 7 10 7H8Z"
        fill={color}
      />
    </svg>
  );
}
export function FullScreen({ color = "white", width = "32", height = "32" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.5 7H23.9058H23.8979H20.0909C19.4884 7 19 7.48842 19 8.09091C19 8.6934 19.4884 9.18182 20.0909 9.18182H21.2652L18.3216 12.1253C17.8928 12.5542 17.8928 13.2495 18.3216 13.6784C18.7505 14.1072 19.4458 14.1072 19.8746 13.6784L22.8182 10.7348V11.9091C22.8182 12.5116 23.3066 13 23.9091 13C24.5116 13 25 12.5116 25 11.9091V8.0982V8.09807V7.5C25 7.22386 24.7761 7 24.5 7ZM7.5 25H8.09417H8.10212H11.9091C12.5116 25 13 24.5116 13 23.9091C13 23.3066 12.5116 22.8182 11.9091 22.8182H10.7348L13.6784 19.8746C14.1072 19.4458 14.1072 18.7505 13.6784 18.3216C13.2495 17.8928 12.5542 17.8928 12.1254 18.3216L9.18182 21.2652V20.0909C9.18182 19.4884 8.6934 19 8.09091 19C7.48842 19 7 19.4884 7 20.0909V23.9018V23.9019V24.5C7 24.7761 7.22386 25 7.5 25Z"
        fill={color}
      />
    </svg>
  );
}
export function Repeat({ color = "#BABABA", width = "32", height = "32" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 8H10C8.89543 8 8 8.89543 8 10V18C8 19.1046 8.89543 20 10 20H12V22H10C7.79086 22 6 20.2091 6 18V10C6 7.79086 7.79086 6 10 6H22C24.2091 6 26 7.79086 26 10V18C26 20.2091 24.2091 22 22 22H18.843L20.0141 23.1711C20.4401 23.5971 20.4401 24.2879 20.0141 24.7139C19.588 25.1399 18.8973 25.1399 18.4713 24.7139L15.3536 21.5962C15.1583 21.4009 15.1583 21.0843 15.3536 20.8891L18.4713 17.7714C18.8973 17.3454 19.588 17.3454 20.0141 17.7714C20.4401 18.1974 20.4401 18.8881 20.0141 19.3142L19.3282 20H22C23.1046 20 24 19.1046 24 18V10C24 8.89543 23.1046 8 22 8Z"
        fill={color}
      />
    </svg>
  );
}
export function Shuffle({ color = "#BABABA", width = "32", height = "32" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.4708 7.31952C21.0448 7.74555 21.0448 8.43627 21.4708 8.8623L22.1566 9.54813H19.8151C18.3733 9.54813 17.0016 10.215 16.0522 11.3776L7.94266 21.3076C7.37299 22.0052 6.55001 22.4053 5.68493 22.4053H5V24.5481H5.68493C7.12674 24.5481 8.49837 23.8813 9.44781 22.7187L17.5573 12.7887C18.127 12.0911 18.95 11.691 19.8151 11.691H22.4991L21.4708 12.7192C21.0448 13.1453 21.0448 13.836 21.4708 14.262C21.8968 14.688 22.5876 14.688 23.0136 14.262L26.1313 11.1443C26.3265 10.9491 26.3265 10.6325 26.1313 10.4372L23.0136 7.31952C22.5876 6.89349 21.8968 6.89349 21.4708 7.31952ZM6.36879 8.54813C7.76049 8.54813 9.08446 9.19407 10.0009 10.3202L12.4531 13.1728L11 14.5481L8.54806 11.687C7.9982 11.0113 7.20381 10.6238 6.36879 10.6238H5.00043V8.54813H6.36879ZM16.3284 20.7761C17.2449 21.9022 18.5688 22.5481 19.9605 22.5481H22.6419L21.4708 23.7192C21.0448 24.1453 21.0448 24.836 21.4708 25.262C21.8968 25.688 22.5876 25.688 23.0136 25.262L26.1313 22.1443C26.3265 21.9491 26.3265 21.6325 26.1313 21.4372L23.0136 18.3195C22.5876 17.8935 21.8968 17.8935 21.4708 18.3195C21.0448 18.7455 21.0448 19.4363 21.4708 19.8623L22.081 20.4725H19.9605C19.1255 20.4725 18.3311 20.0849 17.7813 19.4093L16 17.0481L14.5 18.5481L16.3284 20.7761Z"
        fill={color}
      />
    </svg>
  );
}
export function UserPlus({ color = "#BABABA", width = "32", height = "32" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4165 11.1494C11.4165 8.32115 13.6928 6.75 15.5552 6.75C18.0175 6.75 20.0018 8.72612 20.0018 11.1494C20.0018 12.1948 19.3886 13.6903 18.4846 14.8923C18.0185 15.5121 17.796 16.3324 17.8302 17.0964C17.8643 17.8585 18.1656 18.6949 18.9085 19.1938L22.6582 21.7122C22.7647 21.8051 22.9197 21.993 23.0532 22.2299C23.2024 22.4949 23.2497 22.688 23.2497 22.7539V23.9167H15.5552V25.4167H24.7497V22.7539C24.7497 22.3039 24.5547 21.8393 24.3601 21.4937C24.1582 21.1354 23.8792 20.7687 23.5788 20.5269L23.5536 20.5066L19.7448 17.9486C19.5197 17.7974 19.3492 17.4857 19.3287 17.0293C19.3084 16.5748 19.4486 16.1061 19.6834 15.7939C20.6941 14.45 21.5018 12.6419 21.5018 11.1494C21.5018 7.88483 18.833 5.25 15.5552 5.25C12.9735 5.25 9.9165 7.38767 9.9165 11.1494C9.9165 12.994 10.5304 14.1883 11.1941 15.1293C11.355 15.3575 11.5186 15.5705 11.6697 15.7663L11.702 15.8081L11.7021 15.8082C11.8434 15.9913 11.9714 16.1571 12.0901 16.3225C12.3442 16.677 12.5193 16.9823 12.6133 17.3039L14.0531 16.8833C13.8899 16.3247 13.6032 15.8588 13.3092 15.4486C13.1742 15.2604 13.0303 15.0739 12.8926 14.8956L12.8572 14.8499C12.7059 14.6538 12.5602 14.4637 12.4199 14.2648C11.8788 13.4976 11.4165 12.5999 11.4165 11.1494ZM10.5833 26L10.5833 23.4166H8V21.9166H10.5833L10.5833 19.3333H12.0833L12.0833 21.9166H14.6665V23.4166H12.0833L12.0833 26L10.5833 26Z"
        fill={color}
      />
    </svg>
  );
}
export function Close({ color = "#BABABA", width = "32", height = "32" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.29142 23.2446C6.88943 23.6597 6.90528 24.3172 7.32682 24.713C7.74836 25.1089 8.41595 25.0933 8.81793 24.6782L16.0001 17.2614L23.1822 24.6782C23.5842 25.0933 24.2518 25.1089 24.6734 24.713C25.0949 24.3172 25.1107 23.6597 24.7088 23.2446L17.4574 15.7564L24.237 8.75538C24.639 8.34026 24.6231 7.68284 24.2016 7.28698C23.78 6.89112 23.1125 6.90673 22.7105 7.32184L16.0001 14.2514L9.2897 7.32184C8.88772 6.90673 8.22012 6.89112 7.79859 7.28698C7.37705 7.68284 7.3612 8.34026 7.76318 8.75538L14.5427 15.7564L7.29142 23.2446Z"
        fill={color}
      />
    </svg>
  );
}
export function Queue({ color = "white", width = "32", height = "32" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.7"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 9H10C9.44772 9 9 9.44772 9 10V11C9 11.5523 9.44772 12 10 12H22C22.5523 12 23 11.5523 23 11V10C23 9.44772 22.5523 9 22 9ZM10 7C8.34315 7 7 8.34315 7 10V11C7 12.6569 8.34315 14 10 14H22C23.6569 14 25 12.6569 25 11V10C25 8.34315 23.6569 7 22 7H10ZM7 17H25V19.5H7V17ZM25 23H7V25.5H25V23Z"
        fill={color}
      />
    </svg>
  );
}
export function Devices({ color = "white", width = "32", height = "32" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.7"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.2 9C7.53726 9 7 9.53892 7 10.2037V16.8398C7 17.5 7.5 18 8.2 18H11V20H8C5.74668 20 5 18.1677 5 15.9074V10.6111C5 8.61675 6.21177 7 8.2 7H11V9H8.2ZM24 9H16C15.4477 9 15 9.44772 15 10V23C15 23.5523 15.4477 24 16 24H24C24.5523 24 25 23.5523 25 23V10C25 9.44772 24.5523 9 24 9ZM16 7C14.3431 7 13 8.34315 13 10V23C13 24.6569 14.3431 26 16 26H24C25.6569 26 27 24.6569 27 23V10C27 8.34315 25.6569 7 24 7H16ZM20 22C21.6569 22 23 20.6569 23 19C23 17.3431 21.6569 16 20 16C18.3431 16 17 17.3431 17 19C17 20.6569 18.3431 22 20 22ZM21 13C21 13.5523 20.5523 14 20 14C19.4477 14 19 13.5523 19 13C19 12.4477 19.4477 12 20 12C20.5523 12 21 12.4477 21 13ZM11 23H8V25H11V23Z"
        fill={color}
      />
    </svg>
  );
}
export function Volume({ color = "white", width = "32", height = "32" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.7"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.1388 9.74994L9.47913 13.6672C7.50696 14.8271 7.50696 17.6789 9.47913 18.8388L16.1388 22.7563V9.74994ZM8.46497 11.9433C5.17834 13.8766 5.17834 18.6296 8.46497 20.5627L16.6315 25.3666C17.298 25.7587 18.1388 25.278 18.1388 24.5046V8.0014C18.1388 7.22796 17.298 6.74749 16.6315 7.13958L8.46497 11.9433ZM19.1388 9.25311C20.1237 9.25311 21.0988 9.4472 22.0089 9.82391C22.9191 10.2009 23.7457 10.7534 24.442 11.4499C25.1383 12.1462 25.691 12.9731 26.068 13.883C26.4449 14.7929 26.6388 15.7682 26.6388 16.7531C26.6388 17.738 26.4449 18.7133 26.068 19.6232C25.691 20.5331 25.1383 21.36 24.442 22.0563C23.7457 22.7529 22.9191 23.3054 22.0089 23.6823C21.0988 24.059 20.1237 24.2531 19.1388 24.2531V22.2443C19.86 22.2443 20.5739 22.1022 21.2404 21.8261C21.9064 21.5502 22.5118 21.1457 23.0216 20.6359C23.5314 20.1259 23.9362 19.5207 24.212 18.8544C24.2789 18.6923 24.338 18.5275 24.3893 18.3605C24.549 17.8405 24.63 17.2988 24.63 16.7531C24.63 16.0319 24.4879 15.3181 24.212 14.6518C23.9362 13.9855 23.5314 13.3803 23.0216 12.8703C22.5118 12.3605 21.9064 11.956 21.2404 11.6801C20.5739 11.404 19.86 11.2619 19.1388 11.2619V9.25311ZM21.3312 14.5361C20.7999 13.8954 20.0533 13.4431 19.213 13.2531L19.1388 20.2531C19.9825 20.079 20.7389 19.6408 21.2838 19.0102C21.6237 18.6166 21.8688 18.163 22.0074 17.6799C22.0909 17.3886 22.1354 17.0866 22.1388 16.7809C22.1471 15.9684 21.8624 15.1769 21.3312 14.5361Z"
        fill={color}
      />
    </svg>
  );
}
export function Home({ color = "white", width = "25", height = "25" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.9167 27.9136V10.3487L16.5036 4.25261L6.08333 10.3948V27.9136H11.6389V21.0368C11.6389 19.3084 13.038 17.9072 14.7639 17.9072H18.2361C19.962 17.9072 21.3611 19.3084 21.3611 21.0368V27.9136H26.9167ZM27.9583 30C28.5336 30 29 29.5329 29 28.9568V9.75018C29 9.37949 28.8036 9.03665 28.484 8.84957L17.0275 2.14259C16.7018 1.95191 16.2986 1.95251 15.9734 2.14417L4.51329 8.89932C4.19525 9.08679 4 9.42878 4 9.79835V28.9568C4 29.5329 4.46637 30 5.04167 30H12.6805C13.2558 30 13.7222 29.5329 13.7222 28.9568V21.0368C13.7222 20.4606 14.1886 19.9936 14.7639 19.9936H18.2361C18.8114 19.9936 19.2778 20.4606 19.2778 21.0368V28.9568C19.2778 29.5329 19.7442 30 20.3195 30H27.9583Z"
        fill={color}
      />
    </svg>
  );
}
export function HomeFill({ color = "white", width = "25", height = "25" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29 29C29 29.5523 28.5523 30 28 30H20.2778C19.7255 30 19.2778 29.5523 19.2778 29V21.0526C19.2778 20.5003 18.8301 20.0526 18.2778 20.0526H14.7222C14.1699 20.0526 13.7222 20.5003 13.7222 21.0526V29C13.7222 29.5523 13.2745 30 12.7222 30H5C4.44772 30 4 29.5523 4 29V9.89769C4 9.54272 4.18817 9.21436 4.49443 9.0349L15.9962 2.29524C16.3075 2.11283 16.6929 2.11225 17.0047 2.29373L28.503 8.98543C28.8107 9.16451 29 9.49369 29 9.84972V29Z"
        fill={color}
      />
    </svg>
  );
}
export function Search({ color = "black", width = "25", height = "25" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.7747 22.3561L29.5924 28.4934C30.1511 29.0828 30.1332 30.0268 29.5524 30.5933C28.9808 31.1511 28.078 31.1329 27.5282 30.5526L21.7061 24.4083C19.7272 25.93 17.4956 26.7673 15.0114 26.9203C13.3514 27.0226 11.7438 26.792 10.1886 26.2288C8.63335 25.6655 7.2766 24.8625 6.11833 23.8199C4.96006 22.7772 4.01249 21.5057 3.27561 20.0055C2.53874 18.5053 2.12096 16.9125 2.02229 15.2271C1.92361 13.5418 2.15262 11.9092 2.70933 10.3292C3.26604 8.74932 4.05852 7.37069 5.08678 6.19334C6.11504 5.01599 7.36839 4.05225 8.84685 3.30212C10.3253 2.55198 11.8945 2.1258 13.5543 2.02356C15.2142 1.92132 16.8218 2.15183 18.3771 2.7151C19.9324 3.27837 21.2892 4.08134 22.4474 5.12402C23.6055 6.16669 24.5531 7.43815 25.2901 8.93838C26.027 10.4386 26.4448 12.0314 26.5434 13.7168C26.606 14.7861 26.5356 15.8403 26.3321 16.8793C26.1287 17.9184 25.8096 18.8946 25.3747 19.8079C24.9399 20.7212 24.4066 21.5706 23.7747 22.3561ZM14.84 23.9912C16.1107 23.9129 17.3094 23.5854 18.436 23.0085C19.5626 22.4317 20.519 21.6933 21.305 20.7934C22.091 19.8934 22.6986 18.8412 23.1279 17.6365C23.5572 16.4319 23.7341 15.1845 23.6586 13.8944C23.5831 12.6042 23.262 11.3875 22.6953 10.2442C22.1286 9.10096 21.4026 8.13081 20.5173 7.33378C19.632 6.53674 18.5964 5.92105 17.4106 5.48669C16.2247 5.05232 14.9965 4.87428 13.7258 4.95255C12.4551 5.03081 11.2565 5.35835 10.1298 5.93514C9.00317 6.51194 8.04682 7.25035 7.26078 8.15038C6.47473 9.0504 5.86709 10.1027 5.43783 11.3072C5.00858 12.5117 4.83171 13.7591 4.90721 15.0494C4.98272 16.3396 5.3038 17.5563 5.87045 18.6995C6.4371 19.8427 7.16312 20.8128 8.04853 21.6099C8.93394 22.407 9.96951 23.0227 11.1552 23.457C12.341 23.8913 13.5692 24.0694 14.84 23.9912Z"
        fill={color}
      />
    </svg>
  );
}
export function SearchFill({ color = "white", width = "25", height = "25" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.5924 28.4934L23.7747 22.3561C24.4066 21.5706 24.9399 20.7212 25.3747 19.8079C25.8096 18.8946 26.1287 17.9184 26.3321 16.8793C26.5356 15.8403 26.606 14.7861 26.5434 13.7168C26.4448 12.0314 26.027 10.4386 25.2901 8.93838C24.5531 7.43815 23.6055 6.16669 22.4474 5.12401C21.2892 4.08134 19.9324 3.27837 18.3771 2.7151C16.8218 2.15183 15.2142 1.92132 13.5543 2.02356C11.8945 2.1258 10.3253 2.55198 8.84685 3.30212C7.36839 4.05225 6.11504 5.01599 5.08678 6.19334C4.05852 7.37069 3.26604 8.74932 2.70933 10.3292C2.15262 11.9092 1.92361 13.5418 2.02229 15.2271C2.12096 16.9125 2.53874 18.5053 3.27561 20.0055C4.01249 21.5057 4.96006 22.7772 6.11833 23.8199C7.2766 24.8625 8.63335 25.6655 10.1886 26.2288C11.7438 26.792 13.3514 27.0226 15.0114 26.9203C17.4956 26.7673 19.7272 25.93 21.7061 24.4083L27.5282 30.5526C28.078 31.1329 28.9808 31.1511 29.5524 30.5933C30.1332 30.0268 30.1511 29.0828 29.5924 28.4934ZM18.436 23.0085C17.3094 23.5854 16.1107 23.9129 14.84 23.9912C13.5692 24.0694 12.341 23.8913 11.1552 23.457C9.96951 23.0227 8.93394 22.407 8.04853 21.6099C7.16312 20.8128 6.4371 19.8427 5.87045 18.6995C5.3038 17.5563 4.98272 16.3396 4.90721 15.0494C4.83171 13.7591 5.00858 12.5117 5.43783 11.3072C5.86709 10.1027 6.47473 9.0504 7.26078 8.15038C8.04682 7.25035 9.00317 6.51194 10.1298 5.93514C11.2565 5.35835 12.4551 5.03081 13.7258 4.95255C14.9965 4.87428 16.2247 5.05232 17.4106 5.48669C18.5964 5.92105 19.632 6.53674 20.5173 7.33378C21.4026 8.13081 22.1286 9.10096 22.6953 10.2442C23.262 11.3875 23.5831 12.6042 23.6586 13.8944C23.7341 15.1845 23.5572 16.4319 23.1279 17.6365C22.6986 18.8412 22.091 19.8934 21.305 20.7934C20.519 21.6933 19.5626 22.4317 18.436 23.0085ZM14.5 22C18.6421 22 22 18.6421 22 14.5C22 10.3579 18.6421 7 14.5 7C10.3579 7 7 10.3579 7 14.5C7 18.6421 10.3579 22 14.5 22Z"
        fill={color}
      />
    </svg>
  );
}
export function Library({ color = "white", width = "25", height = "25" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="3" height="26" rx="1.5" fill={color} />
      <rect x="11" y="3" width="3" height="26" rx="1.5" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5 6.67524V26.5191H26.5V9.76681L21.5 6.67524ZM20.5288 3.1517C19.8627 2.73984 19 3.21512 19 3.99394V28.0076C19 28.5557 19.4477 29 20 29H28C28.5523 29 29 28.5557 29 28.0076V8.94045C29 8.59781 28.8219 8.2794 28.5288 8.09821L20.5288 3.1517Z"
        fill={color}
      />
    </svg>
  );
}
export function LibraryFill({ color = "white", width = "25", height = "25" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="3" height="26" rx="1.5" fill={color} />
      <rect x="11" y="3" width="3" height="26" rx="1.5" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5288 3.1517C19.8627 2.73984 19 3.21512 19 3.99394V28.0076C19 28.5557 19.4477 29 20 29H28C28.5523 29 29 28.5557 29 28.0076V8.94045C29 8.59781 28.8219 8.2794 28.5288 8.09821L20.5288 3.1517Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5 6.67524V26.5191H26.5V9.76681L21.5 6.67524ZM20.5288 3.1517C19.8627 2.73984 19 3.21512 19 3.99394V28.0076C19 28.5557 19.4477 29 20 29H28C28.5523 29 29 28.5557 29 28.0076V8.94045C29 8.59781 28.8219 8.2794 28.5288 8.09821L20.5288 3.1517Z"
        fill={color}
      />
    </svg>
  );
}
export function LibraryPlus({ color = "white", width = "25", height = "25" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 0C0.895431 0 0 0.895431 0 2V30C0 31.1046 0.895431 32 2 32H30C31.1046 32 32 31.1046 32 30V2C32 0.895431 31.1046 0 30 0H2ZM15 9H17V15H23V17H17V23H15V17H9V15H15V9Z"
        fill={color}
      />
    </svg>
  );
}
export function LikedSongsIcon({
  color = "white",
  width = "25",
  height = "25",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="2" fill="url(#paint0_linear_107_1022)" />
      <path
        d="M16.0006 10.158C17.6448 8.56071 20.1858 8.61373 21.7699 10.3307C23.3532 12.0484 23.4078 14.784 21.9351 16.5684L15.9992 23L10.0647 16.5684C8.59191 14.784 8.64721 12.0439 10.2299 10.3307C11.8154 8.616 14.3514 8.55844 16.0006 10.158Z"
        fill={color}
      />
      <defs>
        <linearGradient
          id="paint0_linear_107_1022"
          x1="1"
          y1="1"
          x2="32"
          y2="30.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3822EA" />
          <stop offset="1" stopColor="#C7E9D7" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export function HeartFill({ color = "white", width = "25", height = "25" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0009 6.03963C16.4673 3.74352 20.2787 3.81973 22.6548 6.28786C25.0299 8.75708 25.1118 12.6895 22.9026 15.2546L13.9988 24.5L5.09703 15.2546C2.88787 12.6895 2.97082 8.75055 5.34482 6.28786C7.72303 3.823 11.5271 3.74025 14.0009 6.03963Z"
        fill={color}
      />
    </svg>
  );
}
export function Heart({ color = "white", width = "25", height = "25" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0013 7.06396L13.4902 6.58897C11.3153 4.56735 7.97855 4.63857 5.88479 6.80838C3.78656 8.98499 3.70712 12.4754 5.65217 14.7498L13.9988 23.4187L22.3475 14.7498C24.2922 12.4757 24.2145 8.99156 22.1145 6.80802L14.0013 7.06396ZM14.0013 7.06396L14.5119 6.58858M14.0013 7.06396L14.5119 6.58858M14.5119 6.58858C16.68 4.57015 20.0233 4.63612 22.1143 6.80779L14.5119 6.58858Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
}
export function PlayFill({ color = "white", width = "48", height = "48" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44ZM18.5 15.1262L33.5 23.1933C34.1667 23.5518 34.1667 24.4482 33.5 24.8067L18.5 32.8738C17.8333 33.2323 17 32.7842 17 32.0671V15.9329C17 15.2158 17.8333 14.7677 18.5 15.1262Z"
        fill={color}
      />
    </svg>
  );
}
export function PlayFillGreen({
  color = "#65D36E",
  width = "94",
  height = "94",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 94 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_142_2386)">
        <circle cx="47" cy="43" r="31" fill="#65D36E" />
        <path
          d="M58.4412 43.4412C59.1863 43.0229 59.1863 41.9771 58.4412 41.5588L41.6765 32.1472C40.9314 31.7289 40 32.2518 40 33.0884V51.9116C40 52.7482 40.9314 53.2711 41.6765 52.8528L58.4412 43.4412Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_142_2386"
          x="0"
          y="0"
          width="92"
          height="92"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_142_2386"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_142_2386"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
export function PauseFillGreen({
  color = "#65D36E",
  width = "62",
  height = "62",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 94 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_142_2538)">
        <circle cx="47" cy="43" r="31" fill={color} />
        <rect x="39" y="33" width="5.5" height="19.8" rx="1" fill="black" />
        <rect
          x="48.9004"
          y="33"
          width="5.5"
          height="19.8"
          rx="1"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_142_2538"
          x="0"
          y="0"
          width="94"
          height="94"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_142_2538"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_142_2538"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
export function OptionsIcon({ color = "white", width = "28", height = "28" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 14C8 15.1046 7.10457 16 6 16C4.89543 16 4 15.1046 4 14C4 12.8954 4.89543 12 6 12C7.10457 12 8 12.8954 8 14ZM16 14C16 15.1046 15.1046 16 14 16C12.8954 16 12 15.1046 12 14C12 12.8954 12.8954 12 14 12C15.1046 12 16 12.8954 16 14ZM22 16C23.1046 16 24 15.1046 24 14C24 12.8954 23.1046 12 22 12C20.8954 12 20 12.8954 20 14C20 15.1046 20.8954 16 22 16Z"
        fill={color}
      />
    </svg>
  );
}
export function OptionsVertical({
  color = "white",
  width = "28",
  height = "28",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 4 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.25 2.5C2.66421 2.5 3 2.16421 3 1.75C3 1.33579 2.66421 1 2.25 1C1.83579 1 1.5 1.33579 1.5 1.75C1.5 2.16421 1.83579 2.5 2.25 2.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.25 8C2.66421 8 3 7.66421 3 7.25C3 6.83579 2.66421 6.5 2.25 6.5C1.83579 6.5 1.5 6.83579 1.5 7.25C1.5 7.66421 1.83579 8 2.25 8Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.25 13.5C2.66421 13.5 3 13.1642 3 12.75C3 12.3358 2.66421 12 2.25 12C1.83579 12 1.5 12.3358 1.5 12.75C1.5 13.1642 1.83579 13.5 2.25 13.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function Back({ color = "white", width = "40", height = "40" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.5" cx="20" cy="20" r="20" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5429 19.302C12.1385 19.7064 12.155 20.3669 12.5791 20.7506L23.274 30.4269C23.7859 30.8901 24.5764 30.8506 25.0395 30.3386C25.5027 29.8267 25.4632 29.0362 24.9513 28.5731L15.4257 19.9547L24.9965 10.3839C25.4847 9.89573 25.4847 9.10427 24.9965 8.61612C24.5083 8.12796 23.7169 8.12796 23.2287 8.61612L12.5429 19.302Z"
        fill={color}
      />
    </svg>
  );
}
export function Forward({ color = "white", width = "40", height = "40" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.5" cx="20" cy="20" r="20" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.0697 19.302C27.4741 19.7064 27.4576 20.3669 27.0335 20.7506L16.3387 30.4269C15.8267 30.8901 15.0363 30.8506 14.5731 30.3386C14.1099 29.8267 14.1494 29.0362 14.6614 28.5731L24.1869 19.9547L14.6161 10.3839C14.128 9.89573 14.128 9.10427 14.6161 8.61612C15.1043 8.12796 15.8957 8.12796 16.3839 8.61612L27.0697 19.302Z"
        fill={color}
      />
    </svg>
  );
}
export function PauseFill({ color = "white", width = "48", height = "48" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24ZM17 16C17 15.4477 17.4477 15 18 15H21C21.5523 15 22 15.4477 22 16V32C22 32.5523 21.5523 33 21 33H18C17.4477 33 17 32.5523 17 32V16ZM27 15C26.4477 15 26 15.4477 26 16V32C26 32.5523 26.4477 33 27 33H30C30.5523 33 31 32.5523 31 32V16C31 15.4477 30.5523 15 30 15H27Z"
        fill={color}
      />
    </svg>
  );
}
export function UserBlue({ color = "#B3B3B3", width = "64", height = "62" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.2" cx="31" cy="31" r="31" fill="white" />
      <circle
        cx="56"
        cy="10"
        r="6.75"
        fill="#4077CA"
        stroke="black"
        strokeWidth="1.5"
      />
      <path
        d="M35.4198 29.2808C34.6922 30.2174 34.4014 31.4723 34.4983 32.5997C34.5947 33.7217 35.1101 34.9892 36.3222 35.6517L41.9191 38.7108C42.0698 38.8492 42.2812 39.1047 42.4666 39.4254C42.5673 39.5994 42.644 39.7653 42.6932 39.9064C42.7174 39.9761 42.7325 40.0327 42.7411 40.0757C42.7493 40.1162 42.7499 40.1362 42.75 40.1379C42.75 40.138 42.75 40.138 42.75 40.1379V42.75H19.25V40.1379C19.25 40.138 19.25 40.138 19.25 40.1379C19.2501 40.1362 19.2508 40.1162 19.2589 40.0757C19.2675 40.0327 19.2826 39.9761 19.3068 39.9064C19.356 39.7653 19.4327 39.5994 19.5334 39.4254C19.7188 39.1047 19.9302 38.8492 20.0809 38.7108L25.6778 35.6517C26.8899 34.9892 27.4053 33.7217 27.5017 32.5997C27.5986 31.4723 27.3078 30.2174 26.5802 29.2808C25.1845 27.484 24.25 25.2544 24.25 23.7241C24.25 20.1896 27.2304 17.25 31 17.25C34.7696 17.25 37.75 20.1896 37.75 23.7241C37.75 25.2544 36.8155 27.484 35.4198 29.2808Z"
        stroke={color}
        strokeWidth="2.5"
      />
    </svg>
  );
}
export function Union({ color = "white", width = "26", height = "27" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.419 15.2347C19.127 13.9527 21 11.1951 21 8C21 3.58172 17.4183 0 13 0C8.58172 0 5 3.58172 5 8C5 11.1951 6.87303 13.9527 9.58097 15.2347L9.18597 15.7239L1.37195 20.4478C0.745831 20.9565 0 22.1983 0 23V27H26V23C26 22.1983 25.2542 20.9565 24.6281 20.4478L16.814 15.7239L16.419 15.2347Z"
        fill={color}
      />
    </svg>
  );
}
export function Clock({ color = "#B3B3B3", width = "28", height = "28" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 14C23 18.9706 18.9706 23 14 23C9.02944 23 5 18.9706 5 14C5 9.02944 9.02944 5 14 5C18.9706 5 23 9.02944 23 14ZM25 14C25 20.0751 20.0751 25 14 25C7.92487 25 3 20.0751 3 14C3 7.92487 7.92487 3 14 3C20.0751 3 25 7.92487 25 14ZM14.5 8.5H12.5V15.5H18V13.5H14.5V8.5Z"
        fill={color}
      />
    </svg>
  );
}
export function Download({ color = "white", width = "52", height = "52" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="26" cy="26" r="17.75" stroke="white" strokeWidth="2.5" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.839 28.9289L26.884 36.8839C26.3959 37.372 25.6044 37.372 25.1162 36.8839L17.1613 28.9289C16.6731 28.4408 16.6731 27.6493 17.1613 27.1612C17.6494 26.673 18.4409 26.673 18.9291 27.1612L24.7501 32.9822L24.7501 17C24.7501 16.3096 25.3098 15.75 26.0001 15.75C26.6905 15.75 27.2501 16.3096 27.2501 17L27.2501 32.9822L33.0712 27.1612C33.5594 26.673 34.3508 26.673 34.839 27.1612C35.3271 27.6493 35.3271 28.4408 34.839 28.9289Z"
        fill={color}
      />
    </svg>
  );
}
export function Spotify({ color = "white", width = "52", height = "52" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26 6C14.9606 6 6 14.9606 6 26C6 37.0633 14.9606 46 26 46C37.0633 46 46 37.0394 46 26C46 14.9606 37.0633 6 26 6ZM35.1517 34.865C34.8172 35.4624 34.0526 35.6296 33.4791 35.2712C28.7479 32.4038 22.8459 31.7587 15.8686 33.3596C15.1995 33.4791 14.5305 33.0729 14.3871 32.4038C14.3393 31.7348 14.7455 31.0657 15.3429 30.9223C22.9892 29.178 29.5842 29.9188 34.8411 33.1446C35.4624 33.503 35.6535 34.2676 35.2712 34.865H35.1517ZM37.6607 29.417C37.1828 30.1338 36.227 30.3728 35.5102 29.9427C30.1338 26.5974 21.9379 25.6416 15.5818 27.601C14.8172 27.8399 13.9092 27.362 13.6703 26.5735C13.4313 25.7849 13.9092 24.9008 14.7694 24.6619C22.0335 22.5114 31.0657 23.5866 37.2306 27.2903C37.9474 27.7682 38.1864 28.724 37.7085 29.4409L37.6607 29.417ZM37.8996 23.73C31.448 19.9068 20.7909 19.5484 14.626 21.4122C13.6703 21.7228 12.6667 21.1732 12.356 20.1697C12.0454 19.2139 12.595 18.1386 13.5986 17.828C20.6714 15.6774 32.4277 16.1075 39.8351 20.5042C40.7192 21.0299 41.0299 22.1768 40.4803 23.0609C40.0024 23.9689 38.8076 24.2557 37.9474 23.73H37.8996Z"
        fill={color}
      />
    </svg>
  );
}
export function Left({ color = "white", width = "14", height = "23" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0697 11.302C13.4741 11.7064 13.4576 12.3669 13.0335 12.7506L2.33865 22.4269C1.82673 22.8901 1.03626 22.8506 0.57309 22.3386C0.109921 21.8267 0.149445 21.0362 0.661369 20.5731L10.1869 11.9547L0.616126 2.38388C0.127971 1.89573 0.127971 1.10427 0.616126 0.616116C1.10428 0.127961 1.89574 0.127961 2.38389 0.616117L13.0697 11.302Z"
        fill={color}
      />
    </svg>
  );
}
export function Right({ color = "white", width = "14", height = "23" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0697 11.302C13.4741 11.7064 13.4576 12.3669 13.0335 12.7506L2.33865 22.4269C1.82673 22.8901 1.03626 22.8506 0.57309 22.3386C0.109921 21.8267 0.149445 21.0362 0.661369 20.5731L10.1869 11.9547L0.616126 2.38388C0.127971 1.89573 0.127971 1.10427 0.616126 0.616116C1.10428 0.127961 1.89574 0.127961 2.38389 0.616117L13.0697 11.302Z"
        fill={color}
      />
    </svg>
  );
}
export function Polygon({ color = "white", width = "14", height = "7" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 7L0 0L14 1.20127e-06L7 7Z" fill={color} />
    </svg>
  );
}
