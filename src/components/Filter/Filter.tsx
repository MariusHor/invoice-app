import "./Filter.css";

interface FilterProps {
  id: string;
  name: string;
  title: string;
}

export const Filter = ({ id, name, title }: FilterProps): JSX.Element => {
  return (
    <li className="flex items-center">
      <input type="checkbox" id={id} name={name} className="mr-3" />
      <label>{title}</label>
    </li>
  );
};
