import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const ParticleEffect = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 100; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 5 + 1, // Particle size
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="particles-container">
      {particles.map((particle) => (
        <Particle key={particle.id} particle={particle} />
      ))}
    </div>
  );
};

const Particle = ({ particle }) => {
  const style = useSpring({
    to: {
      transform: `translate(${Math.random() * 500}px, ${Math.random() * 500}px)`, // Move particles randomly
    },
    from: { transform: `translate(${particle.x}px, ${particle.y}px)` },
    reset: true,
    reverse: true,
    config: { tension: 120, friction: 30 },
    loop: true,
  });

  return (
    <animated.div
      style={{
        ...style,
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        backgroundColor: "white",
        borderRadius: "50%",
        position: "absolute",
      }}
    ></animated.div>
  );
};

export default ParticleEffect;
