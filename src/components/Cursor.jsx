import React, { useEffect, useRef } from 'react';

const lerp = (a, b, n) => (1 - n) * a + n * b;

const Cursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const requestRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const lastMousePos = useRef({
    dot: { x: 0, y: 0 },
    circle: { x: 0, y: 0 },
  });
  const scale = useRef(1);
  const opacity = useRef(1);

  const handleMouseMove = (event) => {
    mousePos.current.x = event.pageX;
    mousePos.current.y = event.pageY;

    const target = event.target;
    if (target.classList.contains('hover-target')) {
      scale.current = 2.7;
    } else {
      scale.current = 1;
    }
  };

  const handleMouseEnter = () => {
    scale.current = 2.7;
  };

  const handleMouseLeave = () => {
    scale.current = 1;
  };

  const handleClick = () => {
    scale.current = 1;
    opacity.current = 0;
    setTimeout(() => (opacity.current = 1), 150);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('.hover-target').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
      el.addEventListener('click', handleClick);
    });

    const render = () => {
      lastMousePos.current.dot.x = lerp(lastMousePos.current.dot.x, mousePos.current.x - 4, 1);
      lastMousePos.current.dot.y = lerp(lastMousePos.current.dot.y, mousePos.current.y - 4, 1);
      lastMousePos.current.circle.x = lerp(lastMousePos.current.circle.x, mousePos.current.x - 10, 0.15);
      lastMousePos.current.circle.y = lerp(lastMousePos.current.circle.y, mousePos.current.y - 10, 0.15);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${lastMousePos.current.dot.x}px, ${lastMousePos.current.dot.y}px, 0)`;
      }
      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${lastMousePos.current.circle.x}px, ${lastMousePos.current.circle.y}px, 0) scale(${scale.current})`;
        circleRef.current.style.opacity = opacity.current;
      }

      requestRef.current = requestAnimationFrame(render);
    };

    requestRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('.hover-target').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.removeEventListener('click', handleClick);
      });
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="cursor">
      <div className="cursor-inner cursor-inner--circle" ref={circleRef} />
      <div className="cursor-inner cursor-inner--dot" ref={dotRef} />
    </div>
  );
};

export default Cursor;
