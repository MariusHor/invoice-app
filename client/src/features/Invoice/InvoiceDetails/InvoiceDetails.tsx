import { Address, InvoiceItem, InvoiceResult } from "types";

interface InvoiceDetailsProps {
  invoice: InvoiceResult;
  id: string;
}

export const InvoiceDetails = ({
  invoice: {
    description,
    senderAddress,
    clientAddress,
    createdAt,
    clientEmail,
    items,
    total,
    clientName,
    paymentDue,
  },
  id,
}: InvoiceDetailsProps): React.JSX.Element => {
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-skin-fill-secondary p-4 shadow-lg">
      <div className="flex justify-between p-4">
        <div>
          <h1 className="heading-md text-skin-base">
            <span className="text-skin-muted">#</span>
            {id}
          </h1>
          <span className="text-sm text-skin-muted">{description}</span>
        </div>
        <AddressInfo address={senderAddress} />
      </div>
      <div className="grid grid-cols-1 gap-y-6 text-center md:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center justify-between gap-4 md:flex-col">
          <InvoiceInfo title={createdAt} text={"Invoice date"} />
          <InvoiceInfo title={paymentDue} text={"Payment due"} />
        </div>
        <div className="flex flex-col gap-4 lg:order-none lg:col-span-1">
          <InvoiceInfo title={clientName} text={"Bill to"} />
          <AddressInfo address={clientAddress} />
        </div>
        <InvoiceInfo
          title={clientEmail}
          text={"Send to"}
          classes={"md:col-span-2 lg:col-span-1"}
        />
      </div>
      <div className="overflow-hidden rounded-lg">
        <div className="bg-skin-box p-6 ">
          <ul className="mb-4 hidden grid-cols-5 text-font-sm text-skin-muted sm:grid">
            <li className="col-span-2">Item Name</li>
            <li className="text-center">QTY.</li>
            <li className="text-center">Price</li>
            <li className="text-end">Total</li>
          </ul>
          <InvoiceItemsList items={items} />
        </div>
        <div className="flex justify-between bg-skin-box-secondary px-6 py-8 text-skin-white">
          <span>Grand Total</span>
          <h2 className="heading-sm sm:heading-md">$ {total}</h2>
        </div>
      </div>
    </div>
  );
};

const AddressInfo = ({ address }: { address: Address }): React.JSX.Element => (
  <ul className="text-sm text-skin-muted">
    <li>{address.street}</li>
    <li>{address.city}</li>
    <li>{address.postCode}</li>
    <li>{address.country}</li>
  </ul>
);

const InvoiceInfo = ({
  title,
  text,
  classes,
}: {
  title: string;
  text: string;
  classes?: string;
}): React.JSX.Element => (
  <div className={classes}>
    <span className="text-sm text-skin-muted">{text}</span>
    <h2 className="heading-sm text-skin-base">{title}</h2>
  </div>
);

const InvoiceItemsList = ({
  items,
}: {
  items: InvoiceItem[];
}): React.JSX.Element => (
  <ul className="flex flex-col gap-4">
    {items.map((item: InvoiceItem, index: number) => (
      <li className="heading-sm grid grid-cols-6 sm:grid-cols-5" key={index}>
        <h3 className="col-span-6 text-skin-base sm:col-span-2">{item.name}</h3>
        <h3 className="text-left  text-skin-muted sm:text-center">
          {item.quantity}
        </h3>
        <h3 className="text-left text-skin-base sm:hidden sm:text-center">x</h3>
        <h3 className="text-left text-skin-muted sm:text-center">
          ${item.price}
        </h3>
        <h3 className="col-start-6 text-end text-skin-base sm:col-start-auto">
          ${item.total}
        </h3>
      </li>
    ))}
  </ul>
);

export default InvoiceDetails;
