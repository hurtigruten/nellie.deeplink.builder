import { SVGAttributes } from 'react';

const SvgPictureInPictureFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 3a1 1 0 011 1v7h-2V5H4v14h6v2H3a1 1 0 01-1-1V4a1 1 0 011-1h18zm0 10a1 1 0 011 1v6a1 1 0 01-1 1h-8a1 1 0 01-1-1v-6a1 1 0 011-1h8z" />
  </svg>
);

export default SvgPictureInPictureFill;
