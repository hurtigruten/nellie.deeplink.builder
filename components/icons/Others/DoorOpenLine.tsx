import { SVGAttributes } from 'react';

const SvgDoorOpenLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M2 21v-2h2V4.835a1 1 0 01.821-.984l9.472-1.722a.599.599 0 01.707.59v1.28L19 4a1 1 0 011 1v14h2v2h-4V6h-3v15H2zM13 4.396L6 5.67V19h7V4.396zM12 11v2h-2v-2h2z" />
  </svg>
);

export default SvgDoorOpenLine;
