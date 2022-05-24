import { SVGAttributes } from 'react';

const SvgVideoFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 01-.993.993H3.993A.994.994 0 013 20.007V3.993zm7.622 4.422a.4.4 0 00-.622.332v6.506a.4.4 0 00.622.332l4.879-3.252a.4.4 0 000-.666l-4.88-3.252z" />
  </svg>
);

export default SvgVideoFill;