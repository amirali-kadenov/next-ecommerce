import { Input } from "@/shared/ui/input";
import { Search } from "lucide-react";
import { ChangeEventHandler, FC } from "react";
import { useDebouncedCallback } from "use-debounce";

type Props = {
  placeholder: string;
  defaultValue?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const SearchBar: FC<Props> = ({
  placeholder,
  defaultValue,
  onChange,
}) => {
  const handleChange = useDebouncedCallback(onChange, 300);

  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder={placeholder}
        className="pl-8 w-[200px]"
        defaultValue={defaultValue}
        onChange={handleChange}
      />
    </div>
  );
};
