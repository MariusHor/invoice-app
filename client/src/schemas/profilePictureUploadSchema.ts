import { MAX_ALLOWED_FILE_SIZE, ALLOWED_FILE_TYPES } from "utils/constants";
import { formatBytes } from "utils/utils";
import * as yup from "yup";

interface FileValuesExtended {
  size?: number;
  type?: string;
}

const allowedFileTypesErrorMessage = ALLOWED_FILE_TYPES.reduce(
  (acc, current) => {
    if (current === ALLOWED_FILE_TYPES.at(0))
      return "Only " + acc + current.toUpperCase() + ", ";
    if (current === ALLOWED_FILE_TYPES.at(-2))
      return acc + current.toUpperCase() + " and ";
    if (current === ALLOWED_FILE_TYPES.at(-1))
      return acc + current.toUpperCase() + " supported.";

    return acc + current.toUpperCase() + ", ";
  },
  ""
);

const maxFileSizeErrorMessage = `Max allowed file size is ${formatBytes(
  MAX_ALLOWED_FILE_SIZE
)}`;

export const profilePictureUploadSchema = yup.object().shape({
  file: yup
    .mixed()
    .test("required", "You need to provide a file", (file) => {
      if (file) return true;
      return false;
    })
    .test("fileType", allowedFileTypesErrorMessage, (file) => {
      if (file) {
        const { type } = file as FileValuesExtended;
        const fileType = type ? type.split("/").pop() : "unknown";

        if (
          typeof fileType === "string" &&
          !ALLOWED_FILE_TYPES.includes(fileType)
        ) {
          return false;
        }

        return true;
      }

      return false;
    })
    .test("fileSize", maxFileSizeErrorMessage, (file) => {
      if (file) {
        const { size } = file as FileValuesExtended;

        if (size && size > MAX_ALLOWED_FILE_SIZE) {
          return false;
        }

        return true;
      }

      return false;
    }),
});
