import { FC } from "react";
import "./Filter.css";

interface IProps {
  id: string;
  name: string;
  title: string;
}

export const Filter: FC<IProps> = ({ id, name, title }) => {
  return (
    <li className="flex items-center">
      <input type="checkbox" id={id} name={name} className="mr-3" />
      <label>{title}</label>
    </li>
  );
};
