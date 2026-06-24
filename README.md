# CSS Animations Showcase 🎨

A visually stunning collection of CSS animations that look complex but are surprisingly simple under the hood.

## Live Demo

Open `index.html` in your browser — no build step, no dependencies.

## What's Inside

| Animation | Technique |
|-----------|-----------|
| Floating Orbs | `translateY` + `filter: blur` |
| Dot Loader | `scaleY` with staggered `animation-delay` |
| Typewriter | `steps()` timing function + `overflow: hidden` |
| Pulse Ring | `scale` + `opacity` fade |
| Spinning Border | `conic-gradient` + `rotate` |
| Card Flip | `perspective` + `rotateY` + `backface-visibility` |
| Morphing Shape | Animating `border-radius` values |
| Neon Glow | `text-shadow` alternating animation |

## Key CSS Concepts

```css
/* Staggered delays */
.dot:nth-child(2) { animation-delay: 0.1s; }

/* Steps for typewriter */
animation: typing 3s steps(14) infinite;

/* Morph using border-radius */
@keyframes morph {
  0%   { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50%  { border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
}

/* Card flip */
.flip-inner {
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
}
```

## File Structure

```
css-animations-showcase/
├── index.html   — markup
├── style.css    — all animations
├── script.js    — minimal JS (tab visibility, click effects)
└── README.md
```

## How to Use

```bash
git clone https://github.com/your-username/css-animations-showcase
cd css-animations-showcase
open index.html
```

## Contributing

Pull requests welcome! Ideas:
- Add more animation cards
- Add a dark/light toggle
- Add animation speed sliders

## License

MIT
