import WeaponCard from "../WeaponCard";

export const cardFlipped = (name) => (
    <WeaponCard
      weapon={{
        name: name,
        price: "Free",
        class: "flip",
        plus: 0,
      }}
    />
  );