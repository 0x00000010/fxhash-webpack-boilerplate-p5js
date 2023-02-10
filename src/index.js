import p5 from 'p5'

// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
// window.$fxhashFeatures = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }

const seed = ~~ (fxrand() * 999999999)

const sketch = p5 => {
  const getSize = () => {
    return p5.min(p5.windowHeight, p5.windowWidth)
  }

  p5.setup = () => {
    p5.noLoop()

    const size = getSize()
    p5.createCanvas(size, size)
  }

  p5.windowResized = () => {
    const size = getSize()
    p5.resizeCanvas(size, size)
  }

  p5.draw = () => {
    p5.randomSeed(seed)
    p5.background("#dadada")
    p5.text(`Random Hash: ${fxhash}`, 100, 100)
    p5.text(`Psuedorandom: ${fxrand()}`, 100, 120)
    p5.text(`Psuedorandom: ${fxrand()}`, 100, 140)
  }
}

const instance = new p5(sketch, document.body)
