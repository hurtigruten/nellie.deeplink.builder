import { SVGAttributes } from 'react';

const SvgOpenArmFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 12a5 5 0 110-10 5 5 0 010 10zm6 5v5h-2v-5c0-4.451 2.644-8.285 6.447-10.016l.828 1.82A9.002 9.002 0 0018 17zM8 17v5H6v-5A9.002 9.002 0 00.725 8.805l.828-1.821A11.002 11.002 0 018 17z" />
  </svg>
);

export default SvgOpenArmFill;
