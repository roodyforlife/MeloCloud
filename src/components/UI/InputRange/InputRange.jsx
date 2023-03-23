import React, { useState } from 'react'
import cl from './InputRange.module.css';

export default function InputRange({position}) {
    const [pos, setPos] = useState(position);
  return (
    <div className={cl.range}>
        <input
        style={{
          background: `rgb(255,71,39)`,
          background: `-moz-linear-gradient(left,  rgba(255,71,39,1) 0%, rgba(255,71,39,1) ${pos}%, rgba(170,170,170,1) ${pos}%, rgba(170,170,170,1) 100%)`,
            background: `-webkit-linear-gradient(left,  rgba(255,71,39,1) 0%,rgba(255,71,39,1) ${pos}%,rgba(170,170,170,1) ${pos},rgba(170,170,170,1) 100%)`,
            background: `linear-gradient(to right,  rgba(255,71,39,1) 0%,rgba(255,71,39,1) ${pos}%,rgba(170,170,170,1) ${pos}%,rgba(170,170,170,1) 100%)`,
            filter: `progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff4727', endColorstr='#aaaaaa',GradientType=1 )`
        }}
        type="range"
        onChange={(e) => setPos(e.target.value)}
        value={pos} />
    </div>
  )
}
