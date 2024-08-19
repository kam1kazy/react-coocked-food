// Проверка иконка или текст в пагинации слайдера

function hasSlash(icon) {
  const hasSlash = /\.\//.test(icon)

  return hasSlash ? true : false
}

export default hasSlash
