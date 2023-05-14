import userAvatar from "assets/image-avatar.jpg";

const Avatar = (): JSX.Element => {
  return (
    <a href="/" className="max-h-8 max-w-8 overflow-hidden rounded-full">
      <img src={userAvatar} alt="" />
    </a>
  );
};

export default Avatar;
