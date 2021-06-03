export const getParticleOptions = (lightMode: boolean) => {
  const options: object = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false,
        },
      },
      color: {
        value: lightMode ? "#000000" : "#ffffff",
      },
      opacity: {
        value: 0.1,
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out",
        enable: true,
      },
    },
  }

  return options
}
