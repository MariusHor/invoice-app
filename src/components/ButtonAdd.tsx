import plusIcon from "assets/icon-plus.svg";

export const ButtonAdd = (): React.JSX.Element => {
  return (
    <button className="transition-primary flex h-fit items-center gap-2 rounded-full bg-primary-600 px-2 py-2 hover:bg-primary-400">
      <img
        src={plusIcon}
        alt="add new entry"
        className="transition-primary rounded-full bg-secondary-200 p-2 hover:rotate-180"
      />
      <span className="mr-3 font-bold text-secondary-200">New</span>
    </button>
  );
};
