import { Link } from "react-router-dom";
import arrowLeft from "../assets/icon-arrow-left.svg";

const NavigateBack = () => {
  return (
    <Link
      to="/invoices"
      className="flex h-fit w-fit items-center justify-center gap-3"
    >
      <div>
        <img src={arrowLeft} alt="" />
      </div>

      <span>Go back</span>
    </Link>
  );
};

export default NavigateBack;
