import React from 'react';
import { FaTrash } from 'react-icons/fa';

interface DeleteButtonProps {
  onDelete: () => void; 
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete }) => (
  <button onClick={onDelete} className="text-red-500 hover:text-red-700">
    <FaTrash aria-label="Delete" />
  </button>
);

export default DeleteButton;
