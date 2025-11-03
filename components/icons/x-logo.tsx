import * as React from 'react';

export type XLogoProps = React.SVGProps<SVGSVGElement>;

export function XLogo(props: XLogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M17.472 2H20.5L14.114 9.257 21.625 20H15.66L11.14 13.91 5.982 20H2.95L9.733 12.16 2.5 2h6.091l4.07 5.532L17.472 2zm-1.07 16.63h1.669L8.443 3.295H6.66l9.742 15.335z" />
    </svg>
  );
}

export default XLogo;
