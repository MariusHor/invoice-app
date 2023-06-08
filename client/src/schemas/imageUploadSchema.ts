import * as yup from "yup";

interface FileValuesExtended {
  size?: number;
  type?: string;
}

export const imageUploadSchema = yup.object().shape({
  file: yup
    .mixed()
    .test("required", "You need to provide a file", (file) => {
      if (file) return true;
      return false;
    })
    .test("fileType", "File type is not supported", (file) => {
      const { type } = file as FileValuesExtended;
      const validTypes = ["gif", "png", "jpg"];

      if (type) {
        const fileType = type.split("/").pop();

        if (typeof fileType === "string" && !validTypes.includes(fileType)) {
          return false;
        }
      }

      return true;
    })
    .test("fileSize", "File size exceeds maximum allowed limit", (file) => {
      const { size } = file as FileValuesExtended;

      if (size && size / 1024 / 1024 > 0.8) {
        return false;
      }

      return true;
    }),
});
