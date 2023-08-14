import { Label } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <Label>
        Finds contacts by name
        <input
          type="text"
          value={value}
          onChange={evt => onChange(evt.target.value)}
        />
      </Label>
    </div>
  );
};
