import React, { useRef, useState, useCallback, Fragment, CSSProperties, useLayoutEffect, useEffect } from 'react';
import { MOUSE_EVENTS } from './constants/MouseEvents';
import useEventListener from './hooks/useEventListener';
import './custom-cursor.css'

export type CustomCursorProps = {
  /**
   * Array of DOM elements selectors which the cursor will react to
   */
   elementSelectors?: string[]
  /**
   * Cursor color
   */
   color?: string,
  /**
   * Cursor width in px
   */
   width?: number,
  /**
   * Cursor height in px
   */
   height?: number,
};



export function CustomCursor({ elementSelectors, color = '#f44336', width = 30, height = 30 }: CustomCursorProps) {
  const customCursorRef = useRef<HTMLDivElement>(null!);
  const [isMoved, setIsMoved] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const initialStyles = {
    '--muc-custom-cursor-visible': isMoved ? 'visible' : 'hidden',
    '--muc-custom-cursor-color': color,
    '--muc-custom-cursor-width': `${width}px`,
    '--muc-custom-cursor-height': `${height}px`
  } as CSSProperties;

  const cursorPosition = {
    '--muc-custom-cursor-x': `${coords.x}px`,
    '--muc-custom-cursor-y': `${coords.y}px`,
  } as CSSProperties;

  const MouseMoveHandler = useCallback(({ clientX, clientY, target }) => {
    if(!isMoved) setIsMoved(true);
    setCoords({ x: clientX, y: clientY });
  }, []);

  useEventListener(MOUSE_EVENTS.MOVE, MouseMoveHandler);

  return (
    <div style={initialStyles}>
      <div className="muc__custom-cursor" style={cursorPosition} ref={customCursorRef} />
    </div>
  );
}
