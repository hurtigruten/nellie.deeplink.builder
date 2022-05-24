import { SVGAttributes } from 'react';

const SvgWechatPayLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19.145 8.993l-9.799 5.608-.07.046a.646.646 0 01-.3.068.655.655 0 01-.58-.344l-.046-.092-1.83-3.95c-.024-.046-.024-.092-.024-.138 0-.184.139-.321.324-.321.07 0 .14.023.209.069l2.155 1.515c.162.092.348.161.556.161a.937.937 0 00.348-.069l8.275-3.648C16.934 6.273 14.634 5.2 12 5.2c-4.42 0-7.9 3.022-7.9 6.6 0 1.366.5 2.673 1.432 3.781.048.057.12.137.214.235a4 4 0 011.101 3.102l-.025.297.716-.436a4 4 0 012.705-.536c.212.033.386.059.52.076.406.054.82.081 1.237.081 4.42 0 7.9-3.022 7.9-6.6 0-.996-.27-1.95-.755-2.807zM6.192 21.943a1 1 0 01-1.526-.932l.188-2.259a2 2 0 00-.55-1.551A6.993 6.993 0 014 16.868c-1.194-1.421-1.9-3.173-1.9-5.068 0-4.75 4.432-8.6 9.9-8.6s9.9 3.85 9.9 8.6-4.432 8.6-9.9 8.6c-.51 0-1.01-.033-1.499-.098a23.61 23.61 0 01-.569-.084 2 2 0 00-1.353.268l-2.387 1.456z" />
  </svg>
);

export default SvgWechatPayLine;
