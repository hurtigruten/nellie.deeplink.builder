import { SVGAttributes } from 'react';

const SvgMailSettingsLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 7.238l-7.928 7.1L4 7.216V19h10v2H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v9h-2V7.238zM19.501 5H4.511l7.55 6.662L19.502 5zM17.05 19.548a3.017 3.017 0 010-1.096l-1.014-.586 1-1.732 1.014.586c.278-.238.599-.425.95-.55V15h2v1.17c.351.125.672.312.95.55l1.014-.586 1 1.732-1.014.586a3.017 3.017 0 010 1.096l1.014.586-1 1.732-1.014-.586a2.997 2.997 0 01-.95.55V23h-2v-1.17a2.997 2.997 0 01-.95-.55l-1.014.586-1-1.732 1.014-.586zM20 20a1 1 0 100-2 1 1 0 000 2z" />
  </svg>
);

export default SvgMailSettingsLine;
