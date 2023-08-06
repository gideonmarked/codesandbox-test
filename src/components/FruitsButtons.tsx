import React from "react";

type FruitsButtonsProps = {
  onAddFruit: (value: string) => void;
};

const fruitItems = [
  {
    key: "banana",
    label: "Banana"
  },
  {
    key: "apple",
    label: "Apple"
  },
  {
    key: "kiwi",
    label: "Kiwi"
  },
  {
    key: "orange",
    label: "Orange"
  },
  {
    key: "lemon",
    label: "Lemon"
  },
  {
    key: "pear",
    label: "Pear"
  }
];

export const FruitsButtons: React.FC<FruitsButtonsProps> = ({ onAddFruit }) => {
  const onButtonClick = () => {
    const value = "Value from Child";
    onAddFruit(value); // Pass the value to the parent component
  };

  return (
    <div>
      {fruitItems.map((item) => {
        return <button onClick={onButtonClick}>{item?.label}</button>;
      })}
    </div>
  );
};
