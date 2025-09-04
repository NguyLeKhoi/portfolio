import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const LogoLoop = ({ 
  logos, 
  speed = 120, 
  direction = 'left', 
  logoHeight = 48, 
  gap = 40, 
  pauseOnHover = false, 
  scaleOnHover = false, 
  fadeOut = false, 
  fadeOutColor = '#ffffff',
  ariaLabel = 'Logo loop'
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(true);

  // Create more duplicates for smoother looping
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  // Animation controls
  useEffect(() => {
    if (isPaused) return;
    
    const startAnimation = async () => {
      // Set initial position
      await controls.set({ x: '0%' });
      
      // Start the animation
      await controls.start({
        x: '-100%',
        transition: {
          duration: speed * 2, // Longer duration for smoother loop
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 0,
        },
      });
    };
    
    startAnimation();
    
    return () => controls.stop();
  }, [isPaused, speed, controls]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      controls.stop();
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  const handleLogoHover = (index) => scaleOnHover && setHoveredIndex(index);
  const handleLogoLeave = () => scaleOnHover && setHoveredIndex(null);

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: `${logoHeight}px`,
      }}
      aria-label={ariaLabel}
    >
      <motion.div
        ref={containerRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: `${gap}px`,
          height: '100%',
          width: 'max-content',
          willChange: 'transform',
        }}
        animate={controls}
        initial={{ x: '0%' }}
      >
        {duplicatedLogos.map((logo, index) => (
          <motion.a
            key={`${logo.title || logo.alt}-${index}`}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              minWidth: 'max-content',
              textDecoration: 'none',
              color: 'inherit',
            }}
            onMouseEnter={() => handleLogoHover(index)}
            onMouseLeave={handleLogoLeave}
            whileHover={scaleOnHover ? { scale: 1.1 } : {}}
            transition={{ duration: 0.2 }}
            aria-label={logo.title || logo.alt}
          >
            {logo.node ? (
              <div 
                style={{ 
                  fontSize: `${logoHeight * 0.6}px`,
                  color: 'currentColor',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {logo.node}
              </div>
            ) : (
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  height: '100%',
                  width: 'auto',
                  objectFit: 'contain',
                }}
                loading="lazy"
              />
            )}
          </motion.a>
        ))}
      </motion.div>
      
      {fadeOut && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: '60px',
              background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '60px',
              background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />
        </>
      )}
    </div>
  );
};

export default LogoLoop;
