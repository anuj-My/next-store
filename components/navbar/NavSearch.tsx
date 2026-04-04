"use client";
import { Input } from "../ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";

const NavSearch = () => {
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("search")?.toString() || "";
  const { replace } = useRouter();
  const [search, setSearch] = useState(searchValue);

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    console.log(params);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`/products?${params.toString()}`);
  }, 500);

  useEffect(() => {
    if (!searchParams.get("search")) {
      setSearch("");
    }
  }, [searchParams.get("search")]);

  return (
    <div>
      <Input
        type="search"
        placeholder="search products..."
        className="max-w-xs dark:bg-muted"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default NavSearch;
