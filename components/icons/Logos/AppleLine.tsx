import { SVGAttributes } from 'react';

const SvgAppleLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15.729 8.208c-.473-.037-.981.076-1.759.373.066-.025-.742.29-.968.37-.502.175-.915.271-1.378.271-.458 0-.88-.092-1.366-.255a11.87 11.87 0 01-.505-.186c-.082-.032-.382-.152-.448-.177-.648-.254-1.013-.35-1.316-.342-1.152.015-2.243.68-2.876 1.782-1.292 2.244-.577 6.299 1.312 9.031 1.006 1.444 1.556 1.96 1.778 1.953.222-.01.385-.057.783-.225l.167-.071c1.005-.429 1.71-.618 2.771-.618 1.021 0 1.703.186 2.668.602l.168.072c.398.17.542.208.792.202.358-.005.799-.417 1.778-1.854.268-.391.505-.803.71-1.22a7.354 7.354 0 01-.392-.347c-1.289-1.228-2.086-2.884-2.108-4.93a6.625 6.625 0 011.41-4.181 4.124 4.124 0 00-1.221-.25zm.155-1.994c.708.048 2.736.264 4.056 2.196-.108.06-2.424 1.404-2.4 4.212.036 3.36 2.94 4.476 2.976 4.488-.024.084-.468 1.596-1.536 3.156-.924 1.356-1.884 2.7-3.396 2.724-1.488.036-1.968-.876-3.66-.876-1.704 0-2.232.852-3.636.912-1.464.048-2.568-1.464-3.504-2.808-1.908-2.76-3.36-7.776-1.404-11.172.972-1.692 2.7-2.76 4.584-2.784 1.428-.036 2.784.96 3.66.96.864 0 2.412-1.152 4.26-1.008zm-1.14-1.824c-.78.936-2.052 1.668-3.288 1.572-.168-1.272.456-2.604 1.176-3.432.804-.936 2.148-1.632 3.264-1.68.144 1.296-.372 2.604-1.152 3.54z" />
  </svg>
);

export default SvgAppleLine;
