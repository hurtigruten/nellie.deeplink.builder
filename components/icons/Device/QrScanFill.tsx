import { SVGAttributes } from 'react';

const SvgQrScanFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 15v5.007a.994.994 0 01-.993.993H3.993A.994.994 0 013 20.007V15h18zM2 11h20v2H2v-2zm19-2H3V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993V9z" />
  </svg>
);

export default SvgQrScanFill;