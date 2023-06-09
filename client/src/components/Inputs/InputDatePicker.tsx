import { Field, useField } from "formik";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import { useTheme } from "hooks";
import { InputProps } from "types";

export const InputDatePicker = ({
  label,
  id,
}: InputProps): React.JSX.Element => {
  const { theme } = useTheme();

  return (
    <div className={`${theme} field flex items-center justify-center`}>
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

  const handleDateChange = (newValue: dayjs.Dayjs | null) => {
    if (newValue) {
      const formattedDate = newValue.format("YYYY-MM-DD");
      return helpers.setValue(formattedDate);
    }

    helpers.setValue("");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label={label}
          value={dayjs(meta.value)}
          onChange={handleDateChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
