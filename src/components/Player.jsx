import React, { useEffect, useState } from 'react'
import cl from '../styles/Player.module.css';
import InputRange from './UI/InputRange/InputRange';
import Like from './UI/Like/Like';

export default function Player() {
    const [active, setActive] = useState(false);
  return (
    <div className={cl.content}>
        <div className={cl.flex}>
            <div className={cl.block}>
                <div className={cl.info}>
                    <div className={cl.image}>
                        <img src="../assets/mus.jpg" alt="" />
                    </div>
                    <div>
                        <a className={cl.title}>Lorem ipsum dolor sit.</a>
                        <a className={cl.executor}>Lorem, ipsum dolor.</a>
                    </div>
                    <Like style={{marginLeft: 20}} active={active} onClick={() => setActive(!active)}/>
                </div>
            </div>
            <div className={[cl.block, cl.playerBlock].join(" ")}>
                <div className={cl.player}>
                    <div className={cl.player__controll}>

                    </div>
                    <div className={cl.range}>
                        <div className={cl.time}>0:06</div>
                            <InputRange position={3}/>
                        <div className={cl.time}>2:20</div>
                    </div>
                </div>
            </div>
            <div className={cl.block}></div>
        </div>
    </div>
  )
}
