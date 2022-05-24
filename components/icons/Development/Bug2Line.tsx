import { SVGAttributes } from 'react';

const SvgBug2Line = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10.562 4.148a7.03 7.03 0 012.876 0l1.683-1.684 1.415 1.415-1.05 1.05A7.03 7.03 0 0118.326 8H21v2h-2.07c.046.327.07.66.07 1v1h2v2h-2v1c0 .34-.024.673-.07 1H21v2h-2.674a7 7 0 01-12.652 0H3v-2h2.07A7.06 7.06 0 015 15v-1H3v-2h2v-1c0-.34.024-.673.07-1H3V8h2.674a7.03 7.03 0 012.84-3.072l-1.05-1.05L8.88 2.465l1.683 1.684zM12 6a5 5 0 00-5 5v4a5 5 0 0010 0v-4a5 5 0 00-5-5zm-3 8h6v2H9v-2zm0-4h6v2H9v-2z" />
  </svg>
);

export default SvgBug2Line;
