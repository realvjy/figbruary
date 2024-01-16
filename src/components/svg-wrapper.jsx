"use client";
import styled from "styled-components";
import { Shape1, Shape2, shapes } from "./svgs";
import { useEffect, useRef, useState } from "react";

function SvgElement(props) {
  const ref = useRef();

  useEffect(() => {
    if (!props.isBeingClicked){
      return
    }
    if (!props.mouseClicked) {
      return;
    }
    const pos = props.cursorPos;
    const currentElement = ref.current;
    currentElement.style.top = pos.y - currentElement.offsetHeight / 2 + "px";
    currentElement.style.left = pos.x - currentElement.offsetWidth / 2 + "px";
  }, [props.cursorPos]);

  useEffect(() => {
    if (!props.isBeingClicked){
      return
    }
    if (props.mouseClicked) {
      ref.current.children[0].pauseAnimations();
      return;
    }
    ref.current.children[0].unpauseAnimations();
  }, [props.mouseClicked]);

  return (
    <ShapeWrapper
      ref={ref}
      onMouseDown={(event) => {
        props.setClick();
      }}
      onTouchStart={(event) => {
        props.setClick();
      }}
      className={"svg-element-wrap " + props.name}
    >
      {props.children}
    </ShapeWrapper>
  );
}
export default function SvgWrapper({ svgs, page }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [elementClicked, setElementClicked] = useState(false);
  const [currentElement,setCurrentElement] = useState(null);
  const setPos = (e) => {
    if (e.type == "touchmove"){
      e = e.touches[0];
    }
    setMousePos({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    if (elementClicked) {
      window.addEventListener("mousemove", setPos, true);
      window.addEventListener("touchmove",setPos,true);
    }
  }, [elementClicked]);

  useEffect(() => {
    const mouseUp = () => {
      setElementClicked(false);
      window.removeEventListener("mousemove", setPos, true);
      window.removeEventListener("touchmove",setPos,true)
    };
    if (window !== "undefined") {
      window.addEventListener("mouseup", mouseUp, false);
      window.addEventListener("touchend",mouseUp,false)
    }
    return () => {
      window.removeEventListener("mouseup", mouseUp);
      window.removeEventListener("touchend",mouseUp)
    };
  });
  return (
    <div className={`${page} svg-wrapper`}>
      {svgs.map((svg, i) => {
        const Svg = shapes[svg];
        return (
          <SvgElement
            mouseClicked={elementClicked}
            setClick={()=>{
              setElementClicked(true);
              setCurrentElement(svg);
            }}
            cursorPos={mousePos}
            key={i + svg}
            name={svg}
            isBeingClicked={ svg === currentElement}
          >
            <Svg />
          </SvgElement>
        );
      })}
    </div>
  );
}

const ShapeWrapper = styled.div`
  position: absolute;
  cursor: pointer;
`;