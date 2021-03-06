import { SVGAttributes } from 'react';

const SvgBankCard2Line = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm17 9H4v7h16v-7zm0-4V5H4v3h16z" />
  </svg>
);

export default SvgBankCard2Line;
