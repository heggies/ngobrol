export function RandomString(length: number) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const charsLength = chars.length

  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charsLength))
  }

  return result
}

export function RandomUsername() {
  let sizes = [
    'whopping',
    'slim',
    'chunky',
    'gargantuan',
    'hefty',
    'teensy',
    'strapping',
    'slender',
    'beefy',
    'bulky',
    'immense',
    'massive',
    'narrow',
  ]

  let animals = [
    'alligator',
    'baboon',
    'coyote',
    'deer',
    'eagle',
    'falcon',
    'gecko',
    'hamster',
    'iguana',
    'jellyfish',
    'leopard',
    'meerkat',
    'newt',
    'pug',
    'quokka',
    'rabbit',
    'seal',
    'tuna',
    'uakari',
    'weasel',
    'xerus',
    'yak',
    'zonkey',
  ]

  let selectedSize = Math.floor(Math.random() * sizes.length)
  let selectedAnimal = Math.floor(Math.random() * animals.length)

  return (
    sizes[selectedSize][0].toUpperCase() +
    sizes[selectedSize].slice(1) +
    (animals[selectedAnimal][0].toUpperCase() +
      animals[selectedAnimal].slice(1)) +
    Math.floor(Math.random() * 99)
  )
}
