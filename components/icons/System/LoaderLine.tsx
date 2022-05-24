import { SVGAttributes } from 'react';

const SvgLoaderLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2a1 1 0 011 1v3a1 1 0 01-2 0V3a1 1 0 011-1zm0 15a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1zm8.66-10a1 1 0 01-.366 1.366l-2.598 1.5a1 1 0 11-1-1.732l2.598-1.5A1 1 0 0120.66 7zM7.67 14.5a1 1 0 01-.366 1.366l-2.598 1.5a1 1 0 11-1-1.732l2.598-1.5a1 1 0 011.366.366zM20.66 17a1 1 0 01-1.366.366l-2.598-1.5a1 1 0 011-1.732l2.598 1.5A1 1 0 0120.66 17zM7.67 9.5a1 1 0 01-1.366.366l-2.598-1.5a1 1 0 111-1.732l2.598 1.5A1 1 0 017.67 9.5z" />
  </svg>
);

export default SvgLoaderLine;
