import { SVGAttributes } from 'react';

const SvgCloudyFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M9 20.986a8.5 8.5 0 117.715-12.983A6.5 6.5 0 0117 20.981V21H9v-.014z" />
  </svg>
);

export default SvgCloudyFill;
