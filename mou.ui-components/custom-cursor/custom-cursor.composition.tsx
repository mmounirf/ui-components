import React, { useState } from 'react';
import { CustomCursor, CustomCursorProps } from './custom-cursor';
import './custom-cursor.composition.css';


type Props = CustomCursorProps;

export const BasicCustomCursor = () => {
  const [componentProps, setComponentProps] = useState<Props>({color: '#f44336', width: 30, height: 30});
  const { color, width, height } = componentProps;

  const onColorChange = (e) => setComponentProps({...componentProps, color: e.target.value});
  const onHeightChange = (e) => setComponentProps({...componentProps, height: e.target.value});
  const onWidthChange = (e) => setComponentProps({...componentProps, width: e.target.value});

  return (
    <div className="custom-cursor-example">
      <input type="color" id="favcolor" name="favcolor" value={color} onChange={onColorChange} />
      <input type="range" min="1" max="100" value={width} onChange={onWidthChange}></input>
      <input type="range" min="1" max="100" value={height} onChange={onHeightChange}></input>
      <CustomCursor elementSelectors={['a', '.link']} color={color} width={width} height={height} />
    </div>
  );
}
