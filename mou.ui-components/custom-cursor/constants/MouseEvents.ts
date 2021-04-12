export enum MOUSE_EVENTS {
    DOWN = 'mousedown',        // A pointing device button is pressed on an element.
    ENTER = 'mouseenter',      // A pointing device is moved onto the element that has the listener attached.
    LEAVE = 'mouseleave',      // A pointing device is moved off the element that has the listener attached.
    MOVE = 'mousemove',        // A pointing device is moved over an element (fired continuously as the mouse moves).
    OVER = 'mouseover',        // A pointing device is moved onto the element that has the listener attached or onto one of its children.
    OUT = 'mouseout',          // A pointing device is moved off the element that has the listener attached or off one of its children.
    UP = 'mouseup'             // A pointing device button is released over an element.
}