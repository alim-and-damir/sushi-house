
import { Category, Product, User } from '../types';

export const MOCK_USER: User = {
  id: 123456,
  name: "Алексей Смирнов",
  avatarUrl: "https://picsum.photos/id/64/200/200",
  points: 340,
  lifetimePoints: 420,
  level: "", // Will be calculated by setAuth
  nextLevelPoints: 0, // Will be calculated by setAuth
  referralCode: "SUSHI123"
};

export const CATEGORIES: Category[] = [
  { id: 'new', name: 'Новинки' },
  { id: 'signature', name: 'Фирменное' },
  { id: 'salads', name: 'Салаты' },
  { id: 'soups', name: 'Супы' },
  { id: 'noodles', name: 'Лапша' },
  { id: 'sushi', name: 'Суши' },
  { id: 'nigiri', name: 'Онигири' },
  { id: 'gunkan', name: 'Гунканы' },
  { id: 'classic', name: 'Классические роллы' },
  { id: 'baked', name: 'Запеченные роллы' },
  { id: 'cold', name: 'Холодные роллы' },
  { id: 'fried', name: 'Жаренные роллы' },
  { id: 'sets', name: 'Сеты' },
  { id: 'snacks', name: 'Закуски' },
  { id: 'drinks', name: 'Напитки' },
];

export const PRODUCTS: Product[] = [
  // Новинки
  {
    id: 1,
    name: "Лапша пад тай",
    description: "Лапша, курица, креветки, яйцо куриное, лук зелёный, соевый росток, арахис жареный, лайм, растительное масло, соус",
    price: 549,
    categoryId: "new",
    imageUrl: "https://static.tildacdn.com/tild3237-3231-4661-b263-623530303466/IMG_2427.JPG",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 2,
    name: "Лакса суп",
    description: "Куриный бульон, кокосовое молоко, лапша, курица, креветки, шампиньоны, паста лакса, острый перец, кинза, лук, масло, лайм",
    price: 599,
    categoryId: "new",
    imageUrl: "https://static.tildacdn.com/tild3433-6333-4765-b864-646130616131/IMG_2425_1.jpg",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },

  // Фирменное
  {
    id: 3,
    name: "Бао с говядиной",
    description: "Булка бао, говядина, майонез, капуста, огурцы, горчица, сыр",
    price: 459,
    categoryId: "signature",
    imageUrl: "https://static.tildacdn.com/tild3636-3530-4135-a533-306636323734/-9040.jpg",
    modifiers: {
      sizes: [{ id: 'm', name: '2 шт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 4,
    name: "Бао с креветкой",
    description: "Булка бао, креветка, сладкий чили соус, капуста, огурцы, сыр",
    price: 439,
    categoryId: "signature",
    imageUrl: "https://static.tildacdn.com/tild3636-3736-4762-b166-633462633637/-9033.jpg",
    modifiers: {
      sizes: [{ id: 'm', name: '2 шт', price: 0 }],
      milks: [],
      syrups: []
    }
  },

  // Салаты
  {
    id: 5,
    name: "Поке с курицей",
    description: "Курица терияки, кукуруза, помидоры черри, манго, огурцы, рис, сладкий чили соус, листья нори",
    price: 439,
    categoryId: "salads",
    imageUrl: "https://static.tildacdn.com/tild3435-6230-4333-a535-636333386165/-8975.jpg",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 6,
    name: "Поке с тунцом",
    description: "Тунец, ким чи, манго, авокадо, огурцы, чука салат, рис, соус тайский чили, соус понзу, шичими, нори",
    price: 509,
    categoryId: "salads",
    imageUrl: "https://static.tildacdn.com/tild3764-6163-4336-b564-343661366436/IMG_5066_resized.jpg",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },

  // Супы
  {
    id: 7,
    name: "Том ям",
    description: "Бульон, креветки, грибы, помидоры черри, кокосовое молоко, кинза, лайм",
    price: 609,
    categoryId: "soups",
    imageUrl: "https://optim.tildacdn.com/tild6238-3563-4237-a463-353163396235/-/cover/510x510/center/center/-/format/webp/-8991-2.jpg.webp",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 8,
    name: "Том кха",
    description: "Бульон, куриное филе, грибы, помидоры черри, кокосовое молоко, кинза, лайм",
    price: 459,
    categoryId: "soups",
    imageUrl: "https://optim.tildacdn.com/tild3266-6164-4630-b737-623166346136/-/cover/510x510/center/center/-/format/webp/-8984.jpg.webp",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },

  // Лапша
  {
    id: 9,
    name: "Соба с курицей",
    description: "Гречневая лапша, болгарский перец, морковь, лук, имбирь, фирменный соус, чеснок, кунжут, кунжутное масло, курица",
    price: 459,
    categoryId: "noodles",
    imageUrl: "https://static.tildacdn.com/tild6130-6261-4861-b564-386662373138/IMG_0205.JPG",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 10,
    name: "Соба с говядиной",
    description: "Гречневая лапша, болгарский перец, морковь, лук, имбирь, фирменный соус, чеснок, кунжут, кунжутное масло, говядина",
    price: 479,
    categoryId: "noodles",
    imageUrl: "https://optim.tildacdn.com/tild3435-6438-4439-a635-613365323132/-/cover/266x278/center/center/-/format/webp/IMG_3873.JPG.webp",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },

  // Суши
  {
    id: 11,
    name: "Суши тунец татаки",
    description: "Рис, васаби, тунец, соус тайский чили",
    price: 289,
    categoryId: "sushi",
    imageUrl: "https://static.tildacdn.com/tild3865-3363-4763-a631-626639613131/IMG_5257_resized.jpg",
    modifiers: {
      sizes: [{ id: 'm', name: '8 шт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 12,
    name: "Суши лосось татаки",
    description: "Рис, васаби, лосось, карамель, соус том ям",
    price: 289,
    categoryId: "sushi",
    imageUrl: "https://static.tildacdn.com/tild3764-3338-4134-a361-376138366161/IMG_5258_resized.jpg",
    modifiers: {
      sizes: [{ id: 'm', name: '8 шт', price: 0 }],
      milks: [],
      syrups: []
    }
  },

  // Онигири
  {
    id: 13,
    name: "Онигири угорь",
    description: "Спайси угорь, кунжут, рис, нори",
    price: 149,
    categoryId: "nigiri",
    imageUrl: "https://static.tildacdn.com/tild3331-3037-4430-a164-303432633737/IMG_5223_resized.jpg",
    modifiers: {
      sizes: [{ id: 'm', name: '2 шт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 14,
    name: "Онигири тунец",
    description: "Тунец, спайси, рис, нори, шичими",
    price: 159,
    categoryId: "nigiri",
    imageUrl: "https://static.tildacdn.com/tild3366-3964-4365-b361-316164386530/IMG_5227_resized.jpg",
    modifiers: {
      sizes: [{ id: 'm', name: '2 шт', price: 0 }],
      milks: [],
      syrups: []
    }
  },

  // Гунканы
  {
    id: 15,
    name: "Гункан краб",
    description: "Снежный краб, спайси соус",
    price: 259,
    categoryId: "gunkan",
    imageUrl: "https://static.tildacdn.com/tild3239-3637-4630-b934-313561613339/IMG_3697.jpg",
    modifiers: {
      sizes: [{ id: 'm', name: '4 шт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 16,
    name: "Гункан креветка",
    description: "Креветка, яки соус, унаги соус",
    price: 259,
    categoryId: "gunkan",
    imageUrl: "https://static.tildacdn.com/tild3363-3134-4534-b662-613330643464/IMG_3709.jpg",
    modifiers: {
      sizes: [{ id: 'm', name: '4 шт', price: 0 }],
      milks: [],
      syrups: []
    }
  },

  // Классические роллы
  {
    id: 17,
    name: "Саке маки",
    description: "Лосось",
    price: 309,
    categoryId: "classic",
    imageUrl: "https://optim.tildacdn.com/tild3436-3531-4664-b830-346538623634/-/cover/266x278/center/center/-/format/webp/Velvet-1043_.JPG.webp",
    modifiers: {
      sizes: [{ id: 'm', name: '8 шт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 18,
    name: "Эби маки",
    description: "Креветка",
    price: 309,
    categoryId: "classic",
    imageUrl: "https://optim.tildacdn.com/tild3938-3362-4637-b937-323064626335/-/cover/266x278/center/center/-/format/webp/Velvet-1045_.JPG.webp",
    modifiers: {
      sizes: [{ id: 'm', name: '8 шт', price: 0 }],
      milks: [],
      syrups: []
    }
  },

  // Запеченные роллы
  {
    id: 19,
    name: "Вельвет",
    description: "Креветки, лосось, сливочный сыр, спайси соус, зеленый лук, масаго, краб",
    price: 559,
    categoryId: "baked",
    imageUrl: "https://optim.tildacdn.com/tild3635-3865-4432-a334-616262346333/-/cover/266x278/center/center/-/format/webp/Velvet.jpg.webp",
    modifiers: {
      sizes: [{ id: 'm', name: '8 шт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 20,
    name: "Блэк",
    description: "Угорь, лосось, сливочный сыр, унаги соус, масаго, кунжут",
    price: 509,
    categoryId: "baked",
    imageUrl: "https://optim.tildacdn.com/tild3366-3334-4231-a339-633063323964/-/cover/266x278/center/center/-/format/webp/photo.jpg.webp",
    modifiers: {
      sizes: [{ id: 'm', name: '8 шт', price: 0 }],
      milks: [],
      syrups: []
    }
  },

  // Холодные роллы
  {
    id: 21,
    name: "Феникс",
    description: "Жаренный лосось, креветки, спайси соус, огурцы, пекинская капуста, масаго, авокадо",
    price: 519,
    categoryId: "cold",
    imageUrl: "https://static.tildacdn.com/tild6330-6138-4634-b534-613932373035/IMG_8195.JPG",
    modifiers: {
      sizes: [{ id: 'm', name: '8 шт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 22,
    name: "Бали",
    description: "Креветки темпура, лосось, спайси соус, унаги соус, манго",
    price: 519,
    categoryId: "cold",
    imageUrl: "https://static.tildacdn.com/tild3735-6637-4162-b530-353866356433/IMG_8186.JPG",
    modifiers: {
      sizes: [{ id: 'm', name: '8 шт', price: 0 }],
      milks: [],
      syrups: []
    }
  },

  // Жаренные роллы
  {
    id: 23,
    name: "Кавасаки",
    description: "Угорь, лосось, сливочный сыр, спайси соус",
    price: 509,
    categoryId: "fried",
    imageUrl: "https://optim.tildacdn.com/tild6139-6331-4534-a632-643666646565/-/cover/510x510/center/center/-/format/webp/44.JPG.webp",
    modifiers: {
      sizes: [{ id: 'm', name: '8 шт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 24,
    name: "Лава",
    description: "Креветки, краб, авокадо, сливочный сыр, спайси соус, унаги соус, зеленый лук",
    price: 559,
    categoryId: "fried",
    imageUrl: "https://optim.tildacdn.com/tild3866-3563-4039-b664-613434616164/-/cover/510x510/center/center/-/format/webp/Velvet-1039_.JPG.webp",
    modifiers: {
      sizes: [{ id: 'm', name: '8 шт', price: 0 }],
      milks: [],
      syrups: []
    }
  },

  // Сеты
  {
    id: 25,
    name: "Катана сет",
    description: "Филадельфия, канада, калифорния лосось",
    price: 1449,
    categoryId: "sets",
    imageUrl: "https://optim.tildacdn.com/tild3032-3266-4564-b739-356539653633/-/cover/510x510/center/center/-/format/webp/IMG_8212.JPG.webp",
    modifiers: {
      sizes: [{ id: 'm', name: 'На 2 персон', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 26,
    name: "Визит сет",
    description: "Цунами, золотой дракон, феникс, бали",
    price: 1849,
    categoryId: "sets",
    imageUrl: "https://optim.tildacdn.com/tild3065-6536-4561-a364-633339313936/-/cover/510x510/center/center/-/format/webp/IMG_8205.JPG.webp",
    modifiers: {
      sizes: [{ id: 'm', name: 'На 3 персон', price: 0 }],
      milks: [],
      syrups: []
    }
  },

  // Закуски
  {
    id: 27,
    name: "Картофель айдахо",
    description: "Картошка по-деревенски, кинза, чеснок",
    price: 259,
    categoryId: "snacks",
    imageUrl: "https://optim.tildacdn.com/tild6137-6137-4338-b730-303262383333/-/cover/510x510/center/center/-/format/webp/IMG_3742.jpg.webp",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 28,
    name: "Картофельные шарики",
    description: "Картофельные шарики с сыром и беконом",
    price: 209,
    categoryId: "snacks",
    imageUrl: "https://optim.tildacdn.com/tild3936-6332-4464-b930-323733366639/-/cover/510x510/center/center/-/format/webp/IMG_5403_resized.jpg.webp",
    modifiers: {
      sizes: [{ id: 'm', name: '6 шт', price: 0 }],
      milks: [],
      syrups: []
    }
  },

  // Напитки
  {
    id: 29,
    name: "Кола классическая",
    description: "Кола классическая",
    price: 149,
    categoryId: "drinks",
    imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 30,
    name: "Kinza",
    description: "Kinza",
    price: 149,
    categoryId: "drinks",
    imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 31,
    name: "Barbican",
    description: "Barbican",
    price: 149,
    categoryId: "drinks",
    imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 32,
    name: "Вода",
    description: "Вода",
    price: 129,
    categoryId: "drinks",
    imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 33,
    name: "Колд Блю",
    description: "Колд Блю",
    price: 129,
    categoryId: "drinks",
    imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 34,
    name: "RJ сок",
    description: "RJ сок",
    price: 129,
    categoryId: "drinks",
    imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 35,
    name: "Вико",
    description: "Вико",
    price: 129,
    categoryId: "drinks",
    imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
];
