import { SVGAttributes } from 'react';

const SvgRunFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M9.83 8.79L8 9.456V13H6V8.05h.015l5.268-1.918c.244-.093.51-.14.782-.131a2.616 2.616 0 012.427 1.82c.186.583.356.977.51 1.182A4.992 4.992 0 0019 11v2a6.986 6.986 0 01-5.402-2.547l-.581 3.297L15 15.67V23h-2v-5.986l-2.05-1.987-.947 4.298-6.894-1.215.348-1.97 4.924.868L9.83 8.79zM13.5 5.5a2 2 0 110-4 2 2 0 010 4z" />
  </svg>
);

export default SvgRunFill;
