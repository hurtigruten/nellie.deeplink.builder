import { SVGAttributes } from 'react';

const SvgSdCardMiniLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M8 4v5.793a2.5 2.5 0 01-.73 1.765L6 12.833V20h12V4H8zM7 2h12a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1v-8.58a1 1 0 01.292-.706l1.562-1.568A.5.5 0 006 9.793V3a1 1 0 011-1zm8 3h2v4h-2V5zm-3 0h2v4h-2V5zM9 5h2v4H9V5z" />
  </svg>
);

export default SvgSdCardMiniLine;
