import { SVGAttributes } from 'react';

const SvgChatCheckFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M6.455 19L2 22.5V4a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1H6.455zm4.838-6.879L8.818 9.646l-1.414 1.415 3.889 3.889 5.657-5.657-1.414-1.414-4.243 4.242z" />
  </svg>
);

export default SvgChatCheckFill;
