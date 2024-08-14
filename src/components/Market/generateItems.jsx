const getClassPriceRange = (className) => {
    switch (className) {
      case "normal":
        return [50, 100]; // Example price range
      case "rare":
        return [150, 300];
      case "epic":
        return [350, 500];
      case "legendary":
        return [550, 800];
      default:
        return [50, 100];
    }
  };
  
  const getRandomName = () => {
    const names = ["Sword", "Bow", "Axe", "Staff", "Dagger", "Mace", "Hammer", "Wand"];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex] // Add a number for uniqueness
  };
  
  const getRandomPrice = (className) => {
    const [min, max] = getClassPriceRange(className);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const generateRandomItem = () => {
    const classes = ["normal", "rare", "epic", "legendary"];
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    return {
      id: Date.now() + Math.floor(Math.random() * 1000), // Unique ID
      name: getRandomName(),
      price: getRandomPrice(randomClass),
      class: randomClass,
      plus: Math.floor(Math.random() * 3) + 1, // Random plus value
    };
  };
  
 export const generateRandomMarketItems = (count) => {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(generateRandomItem());
    }
    return items;
  };