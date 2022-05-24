import { SVGAttributes } from 'react';

const SvgCameraSwitchFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M9 3h6l2 2h4a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1h4l2-2zm5.684 15.368l-.895-1.79A4 4 0 018 13h2.001L7.839 8.677a6 6 0 006.845 9.69zM9.316 7.632l.895 1.79A4 4 0 0116 13h-2.001l2.161 4.323a6 6 0 00-6.845-9.69z" />
  </svg>
);

export default SvgCameraSwitchFill;
