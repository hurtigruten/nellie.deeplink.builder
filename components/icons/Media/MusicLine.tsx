import { SVGAttributes } from 'react';

const SvgMusicLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 13.535V3h8v2h-6v12a4 4 0 11-2-3.465zM10 19a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);

export default SvgMusicLine;
