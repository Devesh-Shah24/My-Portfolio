// src/utils/particles.js
const particles = {
    background: {
      color: {
        value: "#1d1d1d", // Background color
      },
    },
    fpsLimit: 120, // Frames per second limit
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 4, // Number of particles pushed on click
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff", // Particle color
      },
      links: {
        color: "#ffffff", // Link color between particles
        distance: 150, // Maximum distance between particles
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none", // Particles move in any direction
        enable: true,
        outModes: {
          default: "bounce", // Bounce out of bounds
        },
        speed: 6, // Particle speed
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800, // Number of particles per unit area
        },
        value: 80, // Initial number of particles
      },
      opacity: {
        value: 0.5, // Particle opacity
      },
      shape: {
        type: "circle", // Particle shape
      },
      size: {
        value: { min: 1, max: 5 }, // Particle size range
      },
    },
    detectRetina: true, // Detect retina displays
  };
  
  export default particles;
  