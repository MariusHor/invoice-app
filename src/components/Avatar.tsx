import userAvatar from "assets/image-avatar.jpg";

export const Avatar = (): React.JSX.Element => {
  return (
    <div className="max-h-8 max-w-8 overflow-hidden rounded-full">
      <img src={userAvatar} alt="" />
    </div>
  );
};
