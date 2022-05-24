import { SVGAttributes } from 'react';

const SvgLayout3Fill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M8 10v11H4a1 1 0 01-1-1V10h5zm13 0v10a1 1 0 01-1 1H10V10h11zm-1-7a1 1 0 011 1v4H3V4a1 1 0 011-1h16z" />
  </svg>
);

export default SvgLayout3Fill;
