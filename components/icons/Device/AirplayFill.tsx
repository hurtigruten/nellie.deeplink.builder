import { SVGAttributes } from 'react';

const SvgAirplayFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12.4 13.533l5 6.667a.5.5 0 01-.4.8H7a.5.5 0 01-.4-.8l5-6.667a.5.5 0 01.8 0zM18 19v-2h2V5H4v12h2v2H2.992A.994.994 0 012 18V4c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H18z" />
  </svg>
);

export default SvgAirplayFill;
