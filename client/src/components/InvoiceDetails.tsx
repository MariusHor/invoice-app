import { InvoiceResult } from "types";

interface InvoiceDetailsProps {
  invoice: InvoiceResult;
  id: string;
}

export const InvoiceDetails = ({
  invoice,
  id,
}: InvoiceDetailsProps): React.JSX.Element => {
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
    <div className="flex flex-col gap-6 rounded-lg bg-white p-7">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold">
            <span className="text-secondary-400">#</span>
            {id}
          </h1>
          <span className="paragraph">{description}</span>
        </div>
        <ul className="paragraph flex flex-col">
          <li>{senderAddress.street}</li>
          <li>{senderAddress.city}</li>
          <li>{senderAddress.postCode}</li>
          <li>{senderAddress.country}</li>
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-3 text-center lg:grid-cols-3">
        <div className="flex flex-col gap-4">
          <div>
            <span className="paragraph">Invoice date</span>
            <h2 className="heading-sm">{createdAt}</h2>
          </div>
          <div>
            <span className="paragraph">Payment due</span>
            <h2 className="heading-sm">{paymentDue}</h2>
          </div>
        </div>

        <div className="order-3 col-span-2 lg:order-none lg:col-span-1">
          <div>
            <span className="paragraph">Bill to</span>
            <h2 className="heading-sm">{clientName}</h2>
          </div>

          <ul className="paragraph flex flex-col">
            <li>{clientAddress.street}</li>
            <li>{clientAddress.city}</li>
            <li>{clientAddress.postCode}</li>
            <li>{clientAddress.country}</li>
          </ul>
        </div>
        <div>
          <span className="paragraph">Send to</span>
          <h2 className="heading-sm">{clientEmail}</h2>
        </div>
      </div>
      <div className="overflow-hidden rounded-lg bg-secondary-300">
        <ul className="flex flex-col gap-4 p-6">
          {items.map((item, index) => (
            <li className="flex items-center justify-between" key={index}>
              <div>
                <h3 className="heading-sm">{item.name}</h3>
                <span className="paragraph">
                  {item.quantity} x $ {item.price}
                </span>
              </div>
              <h3 className="heading-sm">$ {item.total}</h3>
            </li>
          ))}
        </ul>
        <div className="flex justify-between bg-secondary-600 px-6 py-8 text-white">
          <span>Grand Total</span>
          <h2 className="heading-sm sm:heading-md">$ {total}</h2>
        </div>
      </div>
    </div>
  );
};
