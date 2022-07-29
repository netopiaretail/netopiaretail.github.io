import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const ParticlesComponent = ({ id, color, extraClass }) => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <Particles
      canvasClassName={`particles ${extraClass}`}
      id={`tsparticles_${id}`}
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 900,
            },
          },
          color: {
            value: color,
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              size_min: 0.1,
              sync: false,
            },
          },
          rotate: {
            value: 0,
            random: true,
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: color,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesComponent;
