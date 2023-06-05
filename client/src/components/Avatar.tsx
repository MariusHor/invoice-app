import userAvatar from "assets/image-avatar.jpg";

export const Avatar = (): React.JSX.Element => {
  return (
    <div className="h-10 w-10 min-w-10 overflow-hidden rounded-full md:h-12 md:w-12">
      <img src={userAvatar} alt="" />
    </div>
  );
};
