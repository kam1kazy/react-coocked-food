// уберет последний символ, если это не буква и не "?" или "!"
// для alt картинки

function removeLastChar(str) {
  const lastChar = str[str.length - 1]

  if (!/[a-zA-Z?!]/.test(lastChar)) {
    return str.slice(0, -1)
  }

  return str
}

export default removeLastChar
