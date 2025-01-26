import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { SORT_AND_ORDER_OPTIONS } from "../lib/constants";

type Props = {
  defaultValue?: string;
  onChange: (value: string) => void;
};

export const SortAndOrder = ({ defaultValue, onChange }: Props) => {
  return (
    <Select defaultValue={defaultValue} onValueChange={onChange}>
      <SelectTrigger className="w-72">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>

      <SelectContent>
        {SORT_AND_ORDER_OPTIONS.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
