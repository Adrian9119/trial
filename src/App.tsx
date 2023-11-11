import React, { useState } from 'react';
import { EditModal } from './EditModal';
import { ItemList } from './ItemList';

type Item = {
  id: string;
  name: string;
  // Agrega otros atributos que necesites
};

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<Item | null>(null);

  const handleItemEdit = (item: Item) => {
    setCurrentItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSaveItem = (editedItem: Item) => {
    setItems(
      items.map((item) => (item.id === editedItem.id ? editedItem : item))
    );
  };

  return (
    <div>
      <ItemList items={items} onItemEdit={handleItemEdit} />
      <EditModal
        item={currentItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveItem}
      />
    </div>
  );
};

export default App;
