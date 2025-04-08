// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'fade-in': 'fadeIn 0.5s ease-out'
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0', transform: 'translateY(20px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' }
//         }
//       }
//     }
//   }
// }
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'bounce': 'bounce 2s infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    }
  }
}