import { UploadImageForm } from "features";
import { Avatar } from "components";

export const AccountProfile = (): React.JSX.Element => {
  return (
    <div className="flex grow flex-col gap-3 text-center">
      <div className="flex items-center gap-6">
        <div>
          <Avatar intent={"large"} />
        </div>
        <UploadImageForm />
      </div>
    </div>
  );
};
