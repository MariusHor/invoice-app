import { useParams } from "react-router-dom";

export const InvoiceView = () => {
  const { id } = useParams();

  return (
    <div>
      CREATE
      {id}
    </div>
  );
};
