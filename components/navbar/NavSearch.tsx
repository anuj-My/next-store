import { Input } from "../ui/input";

const NavSearch = () => {
  return (
    <div>
      <Input
        type="search"
        placeholder="search products..."
        className="max-w-xs dark:bg-muted"
      />
    </div>
  );
};

export default NavSearch;
