import { useTheme } from "hooks";
import { InvoiceResult } from "types";

interface InvoiceDetailsProps {
  invoice: InvoiceResult;
  id: string;
}

export const InvoiceDetails = ({
  invoice,
  id,
}: InvoiceDetailsProps): React.JSX.Element => {
  const { isDarkTheme } = useTheme();

  const {
    description,
    senderAddress,
    clientAddress,
    createdAt,
    clientEmail,
    items,
    total,
    clientName,
    paymentDue,
  } = invoice;

  return (
    <div
      className={`${
        isDarkTheme ? "bg-secondary-600" : "bg-white"
      } flex flex-col gap-6 rounded-lg p-7`}
    >
      <div className="flex justify-between">
        <div>
          <h1 className={`${isDarkTheme ? "text-white" : ""} font-bold`}>
            <span className="text-secondary-400">#</span>
            {id}
          </h1>
          <span
            className={`paragraph ${isDarkTheme ? "text-secondary-300" : ""}`}
          >
            {description}
          </span>
        </div>
        <ul
          className={`paragraph flex flex-col ${
            isDarkTheme ? "text-secondary-300" : ""
          }`}
        >
          <li>{senderAddress.street}</li>
          <li>{senderAddress.city}</li>
          <li>{senderAddress.postCode}</li>
          <li>{senderAddress.country}</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 gap-y-6 text-center md:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center justify-between gap-4 md:flex-col">
          <div>
            <span
              className={`paragraph ${isDarkTheme ? "text-secondary-300" : ""}`}
            >
              Invoice date
            </span>
            <h2 className={`heading-sm ${isDarkTheme ? "text-white" : ""}`}>
              {createdAt}
            </h2>
          </div>
          <div>
            <span
              className={`paragraph ${isDarkTheme ? "text-secondary-300" : ""}`}
            >
              Payment due
            </span>
            <h2 className={`heading-sm ${isDarkTheme ? "text-white" : ""}`}>
              {paymentDue}
            </h2>
          </div>
        </div>

        <div className="lg:order-none lg:col-span-1">
          <div>
            <span
              className={`paragraph ${isDarkTheme ? "text-secondary-300" : ""}`}
            >
              Bill to
            </span>
            <h2 className={`heading-sm ${isDarkTheme ? "text-white" : ""}`}>
              {clientName}
            </h2>
          </div>

          <ul
            className={`paragraph mt-4 flex flex-col ${
              isDarkTheme ? "text-secondary-300" : ""
            }`}
          >
            <li>{clientAddress.street}</li>
            <li>{clientAddress.city}</li>
            <li>{clientAddress.postCode}</li>
            <li>{clientAddress.country}</li>
          </ul>
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <span
            className={`paragraph ${isDarkTheme ? "text-secondary-300" : ""}`}
          >
            Send to
          </span>
          <h2 className={`heading-sm ${isDarkTheme ? "text-white" : ""}`}>
            {clientEmail}
          </h2>
        </div>
      </div>
      <div
        className={`overflow-hidden rounded-lg ${
          isDarkTheme ? "bg-secondary-550" : "bg-secondary-300"
        }`}
      >
        <div className="p-6">
          <div
            className={`paragraph mb-4 hidden grid-cols-5 sm:grid ${
              isDarkTheme ? "text-secondary-300" : ""
            }`}
          >
            <span className="col-span-2">Item Name</span>
            <span className="text-center">QTY.</span>
            <span className="text-center">Price</span>
            <span className="text-end">Total</span>
          </div>
          <ul className="flex flex-col gap-4">
            {items.map((item, index) => (
              <li className="grid grid-cols-6 sm:grid-cols-5" key={index}>
                <h3
                  className={`heading-sm col-span-6 sm:col-span-2 ${
                    isDarkTheme ? "text-white" : ""
                  }`}
                >
                  {item.name}
                </h3>
                <span
                  className={`paragraph text-left sm:text-center ${
                    isDarkTheme ? "text-secondary-300" : ""
                  }`}
                >
                  {item.quantity}
                </span>
                <span className="text-left sm:hidden sm:text-center">x</span>
                <span
                  className={`paragraph text-left sm:text-center ${
                    isDarkTheme ? "text-secondary-300" : ""
                  }`}
                >
                  $ {item.price}
                </span>
                <h3
                  className={`heading-sm col-start-6 text-end sm:col-start-auto ${
                    isDarkTheme ? "text-white" : ""
                  }`}
                >
                  $ {item.total}
                </h3>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between bg-secondary-600 px-6 py-8 text-white">
          <span>Grand Total</span>
          <h2 className="heading-sm sm:heading-md">$ {total}</h2>
        </div>
      </div>
    </div>
  );
};
