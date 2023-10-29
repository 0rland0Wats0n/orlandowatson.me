import { useEffect, useMemo, useState } from 'react';

/**
 * Checks whether the given element is in the viewport
 * @param ref Reference to the element being observed
 * @returns True if is intersecting viewport
 */
export const useIsInViewport = (ref: React.RefObject<HTMLDivElement>, threshold: number = 0.5) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useMemo(() => {
    return new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      root: null,
      threshold 
    })
  }, [threshold]);

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current)

      return () => {
        observer.disconnect();
      };
    }
  }, [ref, observer])

  return isIntersecting
}

/**
 * Determines if scrolling in the given DOM element
 * @param ref Reference to the element
 * @returns True if scrolling in the element
 */
export const isScrollingInElement = (ref: React.RefObject<HTMLDivElement>): boolean => {
  if (!ref.current) {
    return false;
  }

  const { current } = ref;
  const itemOffset = current.offsetTop;
  const scrollTop = window.scrollY;
  const itemHeight = current.offsetHeight;
  const itemOffsetScrollTopDiff = scrollTop-itemOffset;
  return scrollTop >= itemOffset && itemOffsetScrollTopDiff < itemHeight;
}

/**
 * Checks if window has scrolled the given ratio of an element
 * @param ref Reference to the element
 * @param ratio Ratio of element to check if has been scrolled
 * @returns True if the window has scrolled the given ratio of more
 */
export const hasScrolled = (ref: React.RefObject<HTMLDivElement>, ratio: number): boolean => {
  if (
    !ref.current ||
    (0 <= ratio && ratio >= 1) || 
    !isScrollingInElement(ref)) {
    return false;
  }

  const { current } = ref;
  const itemOffset = current.offsetTop;
  const scrollTop = window.scrollY;
  const itemHeight = current.offsetHeight;
  const itemOffsetScrollTopDiff = scrollTop-itemOffset;
  return itemOffsetScrollTopDiff >= itemHeight*ratio;
}

/**
 * Calculates the percentage of an element that has been scrolled
 * @param ref Reference to the element
 * @returns Percentage of element scrolled
 */
export const percentageScrolled = (ref: React.RefObject<HTMLDivElement>): number => {
  if (!ref.current) {
    return -1;
  }

  const { current } = ref;
  const itemOffset = current.offsetTop;
  const scrollTop = window.scrollY;
  const itemHeight = current.offsetHeight;
  const itemOffsetScrollTopDiff = scrollTop-itemOffset;
  return itemOffsetScrollTopDiff/itemHeight*100;  
}