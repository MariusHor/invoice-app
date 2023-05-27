import { ReactNode } from "react";

interface BillSectionProps {
  children: ReactNode;
  title: string;
}

export const BillSection = ({ children, title }: BillSectionProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="heading-sm text-primary-600">{title}</h2>
      {children}
    </div>
  );
};
