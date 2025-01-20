"use client";
import styled from "styled-components";
import { shapes } from "@/components/svgs/svg2025";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Draggable from "gsap/Draggable";

// Register the plugin
gsap.registerPlugin(MotionPathPlugin);
// Make sure to register Draggable OUTSIDE of the component
gsap.registerPlugin(Draggable);

function SvgElement(props) {
  const ref = useRef();
  const shakeAnimation = useRef(null);

  useEffect(() => {
    const radius = 3;

    // Create smooth circular motion
    const circularMotion = gsap.to(ref.current, {
      duration: 4,
      repeat: -1,
      ease: "none",
      x: radius * Math.cos(Math.PI / 2),
      y: radius * Math.sin(Math.PI / 2),
      modifiers: {
        x: function (x) {
          return Math.cos((this._tTime / 4) * Math.PI * 2) * radius + "px";
        },
        y: function (y) {
          return Math.sin((this._tTime / 4) * Math.PI * 2) * radius + "px";
        },
      },
    });

    // Breathing animation
    const breathingAnimation = gsap.to(ref.current, {
      scale: 1.1,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Make element draggable
    Draggable.create(ref.current, {
      type: "x,y",
      inertia: true,
      onDragStart: function () {
        // Pause animations while dragging
        circularMotion.pause();
        breathingAnimation.pause();
      },
      onDragEnd: function () {
        // Resume animations after dragging
        circularMotion.resume();
        breathingAnimation.resume();
      },
      bounds: window.document.body, // Optional: restrict dragging within the body
    });

    return () => {
      // Cleanup animations
      gsap.killTweensOf(ref.current);
      // Kill draggable instance
      Draggable.get(ref.current)?.kill();
    };
  }, []);

  return (
    <ShapeWrapper
      ref={ref}
      style={{
        cursor: "grab", // Change cursor to indicate draggable
        touchAction: "none", // Prevents touch scrolling while dragging
        userSelect: "none", // Prevents text selection while dragging
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
    if (typeof window !== "undefined") {
      window.addEventListener("mouseup", mouseUp, false);
      window.addEventListener("touchend", mouseUp, false);
    }
    return () => {
      window.removeEventListener("mouseup", mouseUp);
      window.removeEventListener("touchend", mouseUp);
    };
  }, []);

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
        return null;
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
          return null;
        })}
      </div>
    </Wrapper>
  );
}

const ShapeWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  will-change: transform;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: inset(0 0 0 0);
`;
