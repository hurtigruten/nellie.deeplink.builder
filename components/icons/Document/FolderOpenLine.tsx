import { SVGAttributes } from 'react';

const SvgFolderOpenLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 21a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2H20a1 1 0 011 1v3h-2V7h-7.414l-2-2H4v11.998L5.5 11h17l-2.31 9.243a1 1 0 01-.97.757H3zm16.938-8H7.062l-1.5 6h12.876l1.5-6z" />
  </svg>
);

export default SvgFolderOpenLine;
