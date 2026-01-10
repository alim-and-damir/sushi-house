
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
  { id: 'breakfast', name: 'Завтраки' },
  { id: 'salads', name: 'Салаты' },
  { id: 'snacks', name: 'Закуски' },
  { id: 'soups', name: 'Супы' },
  { id: 'fastfood', name: 'Фаст-фуд' },
  { id: 'pizza', name: 'Пицца' },
];

export const PRODUCTS: Product[] = [
  // Завтраки
  {
    id: 1,
    name: "Английский",
    description: "Классический английский завтрак",
    price: 550,
    categoryId: "breakfast",
    imageUrl: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 2,
    name: "Аристократа",
    description: "Изысканный завтрак",
    price: 570,
    categoryId: "breakfast",
    imageUrl: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },

  // Салаты
  {
    id: 3,
    name: "Нисуаз",
    description: "Классический салат никуаз",
    price: 630,
    categoryId: "salads",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 4,
    name: "Капрезе",
    description: "Салат капрезе с томатами и моцареллой",
    price: 600,
    categoryId: "salads",
    imageUrl: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 5,
    name: "С морепродуктами",
    description: "Салат с морепродуктами",
    price: 690,
    categoryId: "salads",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },

  // Закуски
  {
    id: 6,
    name: "Брускетта с авокадо",
    description: "Хрустящий багет с авокадо",
    price: 470,
    categoryId: "snacks",
    imageUrl: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 7,
    name: "Брускетта с лососем",
    description: "Хрустящий багет с лососем",
    price: 450,
    categoryId: "snacks",
    imageUrl: "https://images.unsplash.com/photo-1549591227-0ec9a2c8f667?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 8,
    name: "Брускетта с пряной говядиной",
    description: "Хрустящий багет с пряной говядиной",
    price: 520,
    categoryId: "snacks",
    imageUrl: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 9,
    name: "Креветки тигровые 150 г",
    description: "Тигровые креветки 150 грамм",
    price: 590,
    categoryId: "snacks",
    imageUrl: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400",
    modifiers: {
      sizes: [
        { id: '150', name: '150 г', price: 0 },
        { id: '200', name: '200 г', price: 120 }
      ],
      milks: [],
      syrups: []
    }
  },
  {
    id: 10,
    name: "Мидии",
    description: "Мидии в соусе",
    price: 470,
    categoryId: "snacks",
    imageUrl: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },

  // Супы
  {
    id: 11,
    name: "Том Ям",
    description: "Острый тайский суп",
    price: 590,
    categoryId: "soups",
    imageUrl: "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 12,
    name: "Крем-суп грибной",
    description: "Наваристый грибной крем-суп",
    price: 410,
    categoryId: "soups",
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 13,
    name: "Суп-пюре чечевичный",
    description: "Суп-пюре из чечевицы",
    price: 380,
    categoryId: "soups",
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 14,
    name: "Сливочный с лососем",
    description: "Сливочный суп с лососем",
    price: 480,
    categoryId: "soups",
    imageUrl: "https://images.unsplash.com/photo-1594756202469-9ff9799b3e4f?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 15,
    name: "Сливочный с креветками",
    description: "Сливочный суп с креветками",
    price: 490,
    categoryId: "soups",
    imageUrl: "https://images.unsplash.com/photo-1594756202469-9ff9799b3e4f?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 16,
    name: "Норвежский",
    description: "Норвежский суп",
    price: 570,
    categoryId: "soups",
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 17,
    name: "Сырный",
    description: "Сырный суп",
    price: 450,
    categoryId: "soups",
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },

  // Фаст-фуд
  {
    id: 18,
    name: "Бургер с куриной котлетой",
    description: "Бургер с сочной куриной котлетой",
    price: 430,
    categoryId: "fastfood",
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 19,
    name: "Бургер с говяжьей котлетой",
    description: "Классический бургер с говяжьей котлетой",
    price: 450,
    categoryId: "fastfood",
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 20,
    name: "Крылья Баффало",
    description: "Острые крылья Баффало",
    price: 490,
    categoryId: "fastfood",
    imageUrl: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 21,
    name: "Наггетсы",
    description: "Хрустящие наггетсы",
    price: 460,
    categoryId: "fastfood",
    imageUrl: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 22,
    name: "Сэндвич с лососем",
    description: "Сэндвич с копчёным лососем",
    price: 450,
    categoryId: "fastfood",
    imageUrl: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 23,
    name: "Сэндвич с курицей",
    description: "Сэндвич с курицей",
    price: 340,
    categoryId: "fastfood",
    imageUrl: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 24,
    name: "Сэндвич с пряной говядиной",
    description: "Сэндвич с пряной говядиной",
    price: 380,
    categoryId: "fastfood",
    imageUrl: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },

  // Пицца
  {
    id: 25,
    name: "Пепперони",
    description: "Пицца с пепперони",
    price: 480,
    categoryId: "pizza",
    imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 26,
    name: "4 сыра",
    description: "Пицца с четырьмя видами сыра",
    price: 550,
    categoryId: "pizza",
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 27,
    name: "Маргарита",
    description: "Классическая пицца маргарита",
    price: 430,
    categoryId: "pizza",
    imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 28,
    name: "Каприччезе",
    description: "Пицца каприччезе",
    price: 470,
    categoryId: "pizza",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 29,
    name: "Цезарь",
    description: "Пицца цезарь",
    price: 570,
    categoryId: "pizza",
    imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 30,
    name: "Прованс",
    description: "Пицца прованс",
    price: 610,
    categoryId: "pizza",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 31,
    name: "Куриная",
    description: "Пицца с курицей",
    price: 450,
    categoryId: "pizza",
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 32,
    name: "Мясная",
    description: "Мясная пицца",
    price: 620,
    categoryId: "pizza",
    imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 33,
    name: "С семгой",
    description: "Пицца с семгой",
    price: 800,
    categoryId: "pizza",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
  {
    id: 34,
    name: "Хаус",
    description: "Пицца хаус",
    price: 560,
    categoryId: "pizza",
    imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
    modifiers: {
      sizes: [{ id: 'm', name: 'Стандарт', price: 0 }],
      milks: [],
      syrups: []
    }
  },
];
