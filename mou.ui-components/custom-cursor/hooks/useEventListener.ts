import { useRef, useEffect } from "react";

export default function useEventListener(eventName: string, handler: Function, element?: Element | null) {
  const savedHandler = useRef<Function>();

  useEffect(() => {
    const targetElement: Element | Window = element || window;

    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }

    if (savedHandler.current !== handler) {
      savedHandler.current = handler;
    }

    const eventListener = (event: Event) => {
      if (!!savedHandler?.current) {
        savedHandler.current(event);
      }
    };

    targetElement.addEventListener(eventName, eventListener);

    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
    
  }, [eventName, element, handler]);
}
