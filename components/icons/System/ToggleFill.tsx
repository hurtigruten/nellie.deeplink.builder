import { SVGAttributes } from 'react';

const SvgToggleFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M8 5h8a7 7 0 010 14H8A7 7 0 018 5zm8 10a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
);

export default SvgToggleFill;
