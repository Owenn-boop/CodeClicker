import { Overlay } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";

function LocBalance({ currentLOC }) {
    const target = useRef(null);
    /*const useEffect(() => {
        document.querySelector('#loc_balance').innerHTML = balance;
    }, [balance]);*/

    return (
        <>
            <h2 id="loc_balance" ref={target}>
                {currentLOC != -1 ? currentLOC : "Not logged in!"}
            </h2>
            {/*
            <Overlay target={target.current} show={show} placement="bottom">
                {({
                    placement: _placement,
                    arrowProps: _arrowProps,
                    show: _show,
                    popper: _popper,
                    hasDoneInitialMeasure: _hasDoneInitialMeasure,
                    ...props
                    }) => (
                    <div
                        {...props}
                        style={{
                        position: 'absolute',
                        backgroundColor: 'rgba(255, 100, 100, 0.15)',
                        padding: '2px 10px',
                        color: 'white',
                        borderRadius: 3,
                        ...props.style,
                        }}
                    >
                        +1
                    </div>
                )}
            </Overlay>
                    */}
        </>
    );
}
export default LocBalance;
