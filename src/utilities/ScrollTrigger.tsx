import { useEffect, useState } from "react";
import short from "short-uuid";

const ScrollTrigger = ({
  initialClassName,
  triggerClassName,
  initialStyles,
  triggerStyles,
  triggerOnce = false,
  children,
}: {
  initialClassName?: string;
  triggerClassName?: string;
  initialStyles?: any;
  triggerStyles?: any;
  triggerOnce?: boolean;
  children?: any;
}) => {
  const [shouldShow, setShouldShow] = useState(false);
  const [randomId, setRandomId] = useState("temp");
  const [triggeredOnce, setTriggeredOnce] = useState(false);

  useEffect(() => {
    setRandomId(short().new());
  }, []);

  useEffect(() => {
    if (!(triggerOnce && triggeredOnce)) {
      const observer: IntersectionObserver = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting !== shouldShow) {
              setShouldShow(entry.isIntersecting);

              if (triggerOnce) {
                setTriggeredOnce(true);
                observer.unobserve(entry.target);
              }
            }
          });
        },
        { threshold: 0.5 }
      );

      const observedElement: HTMLElement | null = document.getElementById(
        `${randomId}`
      );
      if (observedElement) {
        observer.observe(observedElement);
      }
    }
  }, [shouldShow, randomId]);

  return (
    <div
      id={randomId}
      className={
        initialClassName +
        (shouldShow && triggerClassName ? ` ${triggerClassName}` : "")
      }
      style={
        shouldShow && triggerStyles
          ? { ...initialStyles, ...triggerStyles }
          : { ...initialStyles }
      }
    >
      {children}
    </div>
  );
};

export default ScrollTrigger;
