import { SVGAttributes } from 'react';

const SvgFolderHistoryLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10.414 3l2 2H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414zm-.828 2H4v14h16V7h-8.414l-2-2zM13 9v4h3v2h-5V9h2z" />
  </svg>
);

export default SvgFolderHistoryLine;
