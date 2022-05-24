import { SVGAttributes } from 'react';

const SvgSpeakerLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5 4v16h14V4H5zM4 2h16a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1zm8 15a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 2a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0-10.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
  </svg>
);

export default SvgSpeakerLine;
