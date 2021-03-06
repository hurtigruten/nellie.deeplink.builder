import { SVGAttributes } from 'react';

const SvgWaterFlashLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 3.1L7.05 8.05a7 7 0 109.9 0L12 3.1zm0-2.828l6.364 6.364a9 9 0 11-12.728 0L12 .272zM13 11h2.5L11 17.5V13H8.5L13 6.5V11z" />
  </svg>
);

export default SvgWaterFlashLine;
