type Meal = {
  name: string;
  description: string;
  date: Date;
  isOnDiet: boolean;
};

const meals: Meal[] = [
  {
    name: "Café da Manhã",
    description: "Omelete com queijo e café sem açúcar",
    date: new Date("2025-03-09T07:30:00"), 
    isOnDiet: true
  },
  {
    name: "Almoço",
    description: "Frango grelhado com arroz integral e brócolis",
    date: new Date("2025-03-09T12:00:00"), 
    isOnDiet: true
  },
  {
    name: "Jantar",
    description: "Pizza de calabresa com refrigerante",
    date: new Date("2025-03-09T19:30:00"),
    isOnDiet: false
  },
  {
    name: "Café da Manhã",
    description: "Iogurte com granola e banana",
    date: new Date("2025-03-10T07:30:00"), 
    isOnDiet: true
  },
  {
    name: "Almoço",
    description: "Peixe grelhado com batata-doce e salada",
    date: new Date("2025-03-10T12:00:00"), 
    isOnDiet: true
  },
  {
    name: "Jantar",
    description: "Hambúrguer artesanal com batatas fritas",
    date: new Date("2025-03-10T19:30:00"),
    isOnDiet: false
  },
  {
    name: "Café da Manhã",
    description: "Pão integral com pasta de amendoim e café",
    date: new Date("2025-03-11T07:30:00"), 
    isOnDiet: true
  },
  {
    name: "Almoço",
    description: "Carne assada com arroz, feijão e salada",
    date: new Date("2025-03-11T12:00:00"), 
    isOnDiet: true
  },
  {
    name: "Jantar",
    description: "Macarrão à bolonhesa",
    date: new Date("2025-03-11T19:30:00"),
    isOnDiet: false
  }
];

type GroupedMeals = Record<string, Meal[]>; 

export const groupedMeals: GroupedMeals = meals.reduce<Record<string, Meal[]>>((acc, meal) => {
  const dateKey = meal.date.toISOString().split("T")[0];
  acc[dateKey] = acc[dateKey] || [];
  acc[dateKey].push(meal);
  return acc;
}, {});

export const sortedDates = Object.keys(groupedMeals).sort().reverse();