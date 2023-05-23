import { Field, useField } from "formik";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface InputDatePickerProps {
  label: string;
  id: string;
}

export const InputDatePicker = ({ label, id }: InputDatePickerProps) => {
  return (
    <div className="flex items-center justify-center">
      <Field
        component={() => BasicDateCalendar(label)}
        label={label}
        name={id}
        id={id}
      />
    </div>
  );
};

const BasicDateCalendar = (label: string) => {
  const [_, meta, helpers] = useField("createdAt");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label={label}
          value={meta.value}
          onChange={(newValue) => helpers.setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
