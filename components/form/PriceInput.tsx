import { Label } from "../ui/label";
import { Input } from "../ui/input";

const name = "price";
type FormInputNumberProps = {
  defaultValue?: number;
};

const PriceInput = ({ defaultValue }: FormInputNumberProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="mb-1 capitalize">
        Prise ($)
      </Label>
      <Input
        id={name}
        name={name}
        type="number"
        defaultValue={defaultValue || 100}
        min="0"
        required
      />
    </div>
  );
};

export default PriceInput;
