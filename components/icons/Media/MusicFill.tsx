import { SVGAttributes } from 'react';

const SvgMusicFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 13.535V3h8v3h-6v11a4 4 0 11-2-3.465z" />
  </svg>
);

export default SvgMusicFill;
