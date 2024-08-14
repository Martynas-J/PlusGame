import { bonus } from "@/var/variables";

const probabilities = (plus, itemClass, minus = 1) => {
  let density;

  switch (itemClass) {
    case "normal":
      density = 0 + minus;
      break;
    case "rare":
      density = 10 * minus;
      break;
    case "epic":
      density = 20 * minus;
      break;
    case "legendary":
      density = 30 * minus;
      break;
    case "nova":
      density = 40 * minus;
      break;
    default:
      density = 0;
      break;
  }
  return (
    90 +
    bonus -
    (density - Math.floor(Math.random() * 5)) -
    plus * (10 - Math.floor(Math.random() * 10))
  );
};

export const orSuccess = (plus, itemClass, minus) => {
  const probability = probabilities(plus, itemClass, minus);
  // console.log(probability)
  return Math.random() * 100 < probability;
};
