import { MAX_ALLOWED_FILE_SIZE, ALLOWED_FILE_TYPES } from "utils/constants";
import * as yup from "yup";

interface FileValuesExtended {
  size?: number;
  type?: string;
}

export const profilePictureUploadSchema = yup.object().shape({
  file: yup
    .mixed()
    .test("required", "You need to provide a file", (file) => {
      console.log(file);
      if (file) return true;
      return false;
    })
    .test("fileType", "File type is not supported", (file) => {
      console.log(file);
      const { type } = file as FileValuesExtended;

      console.log(type);

      if (type) {
        const fileType = type.split("/").pop();

        if (
          typeof fileType === "string" &&
          !ALLOWED_FILE_TYPES.includes(fileType)
        ) {
          console.log(ALLOWED_FILE_TYPES, fileType);
          return false;
        }
      }

      return true;
    })
    .test("fileSize", "File size exceeds maximum allowed limit", (file) => {
      const { size } = file as FileValuesExtended;

      if (size && size > MAX_ALLOWED_FILE_SIZE) {
        return false;
      }

      return true;
    }),
});
