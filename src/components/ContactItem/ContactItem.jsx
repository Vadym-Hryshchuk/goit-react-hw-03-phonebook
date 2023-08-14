export const ContactItem = ({ id, name, number, handleDelete }) => {
  return (
    <p>
      <span>{name}:</span>
      <span>{number}</span>
      <button type="button" onClick={() => handleDelete(id)}>
        Remove
      </button>
    </p>
  );
};
