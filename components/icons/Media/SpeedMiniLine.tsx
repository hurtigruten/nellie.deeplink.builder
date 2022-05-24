import { SVGAttributes } from 'react';

const SvgSpeedMiniLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M9.032 12L6 9.86v4.28L9.032 12zm-4.244 5.444A.5.5 0 014 17.035V6.965a.5.5 0 01.788-.409l7.133 5.036a.5.5 0 010 .816l-7.133 5.036zM15 14.14L18.032 12 15 9.86v4.28zm-2-7.175a.5.5 0 01.788-.409l7.133 5.036a.5.5 0 010 .816l-7.133 5.036a.5.5 0 01-.788-.409V6.965z" />
  </svg>
);

export default SvgSpeedMiniLine;
