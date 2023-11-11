import React from 'react';

export type Item = {
  id: string;
  name: string;
  // Agrega otros atributos que necesites
};

export type ItemListProps = {
  items: Item[];
  onItemEdit: (item: Item) => void;
};

export const ItemList: React.FC<ItemListProps> = ({ items, onItemEdit }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} onClick={() => onItemEdit(item)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};
