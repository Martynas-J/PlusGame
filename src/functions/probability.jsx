import { bonus } from "@/var/variables";

export const probabilities = (plus, itemClass) => {
  console.log(".............." + itemClass);
  let density;

  switch (itemClass) {
    case "normal":
      density = 0;
      break;
    case "rare":
      density = 10;
      break;
    case "epic":
      density = 20;
      break;
    case "legendary":
      density = 30;
      break;
    case "nova":
      density = 40;
      break;
    default:
      density = 0;
      break;
  }
  console.log(density);
  return (
    90 +
    bonus -
    (density - Math.floor(Math.random() * 5)) -
    (plus * (10 - Math.floor(Math.random() * 10)))
  );
};
