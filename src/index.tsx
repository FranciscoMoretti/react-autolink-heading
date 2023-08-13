import React, {
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';
import { slug } from 'github-slugger';

import { cn } from 'mxcn';

interface AutolinkHeadingProps {
  children: ReactNode;
  className: string;
  linkClassName?: string;
  ariaLabel?: string;
  headingId?: string;
}

function isHeadingElement(element: ReactNode): element is ReactElement {
  return (
    isValidElement(element) &&
    typeof element.type === 'string' &&
    /^h[1-6]$/.test(element.type)
  );
}

export function AutolinkHeading({
  children,
  className,
  linkClassName = '',
  ariaLabel = 'Link to section',
  headingId = '',
}: AutolinkHeadingProps): JSX.Element | null {
  const firstChild = React.Children.toArray(children)[0];

  if (!isHeadingElement(firstChild)) {
    console.warn('AutoLinkHeader: The first child is not a heading element.');
    return null;
  }

  if (!firstChild) {
    console.warn(
      'AutoLinkHeader: The first child does not have the correct format.'
    );
    return null;
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const firstGrandChild = React.Children.toArray(firstChild.props.children)[0];

  if (firstGrandChild === undefined) {
    console.warn(
      'AutoLinkHeader: No text content found for the header element.'
    );
    return null;
  }

  const headerSlug = headingId || slug(firstGrandChild.toString());

  const clonedFirstChild = cloneElement(firstChild, {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    className: cn(firstChild.props.className, className),
    id: headerSlug,
    children: (
      <a
        href={`#${headerSlug}`}
        className={linkClassName}
        aria-label={ariaLabel}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
        {firstChild.props.children}
      </a>
    ),
  });
  return clonedFirstChild;
}
