import React from 'react';
import { Item } from './ItemList';

type EditModalProps = {
  item: Item | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: Item) => void;
};

export const EditModal: React.FC<EditModalProps> = ({
  item,
  isOpen,
  onClose,
  onSave,
}) => {
  if (!isOpen || !item) return null;

  const [editedItem, setEditedItem] = React.useState(item);

  const handleSave = () => {
    onSave(editedItem);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={handleSave}>
          <label htmlFor="itemName">Item Name:</label>
          <input
            id="itemName"
            value={editedItem.name}
            onChange={(e) =>
              setEditedItem({ ...editedItem, name: e.target.value })
            }
          />
          {/* Agrega más campos de edición según sea necesario */}
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};
