const buttonContent = {
  url: '#',
  text: 'Заказать',
}

export const data = [
  {
    id: 1,
    title:
      'Следи за за своим весом <span class="color-orange">без расчета</span> калорий ',
    description:
      'Мы уже <span class="color-orange">всё посчитали</span> для вас!',
    images: {
      icon: 'Ккал',
      promo: './assets/images/slider/slide_1.jpg',
    },
    button: {
      url: buttonContent.url,
      text: buttonContent.text,
    },
    sale: {
      name: 'Пробный день всего:',
      price: '450 руб.',
    },
  },
  {
    id: 2,
    title:
      'Свежие продукты – <span class="color-blue">самые питательные</span> для вашего организма ',
    description: 'Даже <span class="color-blue">рыба</span> почти как живая.',
    images: {
      icon: './assets/images/icons/fish.svg',
      promo: './assets/images/slider/slide_2.png',
    },
    button: {
      url: buttonContent.url,
      text: buttonContent.text,
    },
    sale: {
      name: 'Пробный день всего:',
      price: '1200 руб.',
    },
  },
  {
    id: 3,
    title:
      'Очень много микроэлементов – <span class="color-yellow">клетчатка</span> и другое из самых зеленых продуктов ',
    description:
      'Прямо с грядки <span class="color-yellow">родной деревни</span> собраны с любовью.',
    images: {
      icon: './assets/images/icons/carrot.png',
      promo: './assets/images/slider/slide_3.png',
    },
    button: {
      url: buttonContent.url,
      text: buttonContent.text,
    },
    sale: {
      name: 'Пробный день всего:',
      price: '2650 руб.',
    },
  },

  {
    id: 4,
    title:
      'Detox программа – <span class="color-brand">вкусное очищение</span> организма ',
    description:
      '8 бутылочек <span class="color-brand">натуральных</span> смузи и фрешей.',
    images: {
      icon: './assets/images/icons/bottle.svg',
      text: 'Ккал',
      promo: './assets/images/slider/slide_4.png',
    },
    button: {
      url: buttonContent.url,
      text: buttonContent.text,
    },
    sale: {
      name: 'Пробный день всего:',
      price: '950 руб.',
    },
  },

  {
    id: 5,
    title:
      'На горячее всегда – у нас всегда <span class="color-red">МЯСО</span> для сильных',
    description:
      'Ваши инстинкты <span class="color-red">хищника</span> на максимум.',
    images: {
      icon: './assets/images/icons/meat.svg',
      text: 'Ккал',
      promo: './assets/images/slider/slide_5.png',
    },
    button: {
      url: buttonContent.url,
      text: buttonContent.text,
    },
    sale: {
      name: 'Пробный день всего:',
      price: '3650 руб.',
    },
  },

  {
    id: 6,
    title:
      'Прочь <span class="color-pink">готовка и мойка</span>! Экономим время и следим за здоровьем ',
    description:
      'Мы составили план <span class="color-pink">специально</span> для вас!',
    images: {
      icon: ['./assets/images/icons/5.svg', './assets/images/icons/table.svg'],
      promo: './assets/images/slider/slide_6.png',
      flexDirection: 'column',
    },
    button: {
      url: buttonContent.url,
      text: buttonContent.text,
    },
    sale: {
      name: 'Пробный день всего:',
      price: '1450 руб.',
    },
  },
]
