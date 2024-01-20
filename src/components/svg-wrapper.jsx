"use client";
import styled from "styled-components";
import { shapes } from "./svgs";
import { useEffect, useRef, useState } from "react";

function SvgElement(props) {
  const ref = useRef();

  useEffect(() => {
    if (!props.isBeingClicked) {
      return;
    }
    if (!props.mouseClicked) {
      return;
    }
    const pos = props.cursorPos;
    const elementWrapper = props.elementWrapper;

    if (elementWrapper) {
      const bounds = elementWrapper.getBoundingClientRect();
      pos.x = pos.x - bounds.left;
      pos.y = pos.y - bounds.top;
    }

    const currentElement = ref.current;
    currentElement.style.top = pos.y - currentElement.offsetHeight / 2 + "px";
    currentElement.style.left = pos.x - currentElement.offsetWidth / 2 + "px";
  }, [props.cursorPos]);

  useEffect(() => {
    if (!props.isBeingClicked) {
      return;
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
  const [currentElement, setCurrentElement] = useState(null);
  const wrapperRef = useRef(null);
  const mainWrapperRef = useRef(null);

  const setPos = (e) => {
    if (e.type == "touchmove") {
      e = e.touches[0];
    }
    var x = e.clientX;
    var y = e.clientY;

    setMousePos({ x, y });
  };
  useEffect(() => {
    if (elementClicked) {
      window.addEventListener("mousemove", setPos, true);
      window.addEventListener("touchmove", setPos, true);
    }
  }, [elementClicked]);

  useEffect(() => {
    const mouseUp = () => {
      setElementClicked(false);
      window.removeEventListener("mousemove", setPos, true);
      window.removeEventListener("touchmove", setPos, true);
    };
    if (window !== "undefined") {
      window.addEventListener("mouseup", mouseUp, false);
      window.addEventListener("touchend", mouseUp, false);
    }
    return () => {
      window.removeEventListener("mouseup", mouseUp);
      window.removeEventListener("touchend", mouseUp);
    };
  });

  const getElementCommonProps = (svg, index, fixed) => {
    return {
      mouseClicked: elementClicked,
      cursorPos: mousePos,
      setClick: () => {
        setElementClicked(true);
        setCurrentElement(svg);
      },
      key: index + svg + fixed,
      name: fixed ? svg.substring(1) : svg,
      isBeingClicked: svg === currentElement,
      isFixed: fixed,
      elementWrapper: fixed ? mainWrapperRef.current : wrapperRef.current,
    };
  };
  return (
    <Wrapper className="main-svg-wrapper" ref={mainWrapperRef}>
      {svgs.map((svg, i) => {
        if (svg.startsWith("$")) {
          const Svg = shapes[svg.substring(1)];
          return (
            <SvgElement {...getElementCommonProps(svg, i, true)}>
              <Svg />
            </SvgElement>
          );
        }
      })}
      <div className={`${page} svg-wrapper`} ref={wrapperRef}>
        {svgs.map((svg, i) => {
          if (!svg.startsWith("$")) {
            const Svg = shapes[svg];
            return (
              <SvgElement {...getElementCommonProps(svg, i, false)}>
                <Svg />
              </SvgElement>
            );
          }
        })}
      </div>
    </Wrapper>
  );
}

const ShapeWrapper = styled.div`
  position: absolute;
  cursor: pointer;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: inset(0 0 0 0);
`;
