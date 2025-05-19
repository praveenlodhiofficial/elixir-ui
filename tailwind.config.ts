module.exports = {
    theme: {
      extend: {
        animation: {
          "spin-once": "spin-once 0.5s ease-in-out",
        },
        keyframes: {
          "spin-once": {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
        },
      },
    },
  }
  