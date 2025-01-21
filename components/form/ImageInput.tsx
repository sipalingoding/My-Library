import { Input } from "../ui/input";
import { Label } from "../ui/label";

function ImageInput() {
  const image = "image";
  return (
    <div className="mb-2">
      <Label htmlFor={image} className="capitalize">
        Image
      </Label>
      <Input
        id={image}
        name={image}
        required
        type="file"
        accept="image/*"
        className="max-w-xs"
      />
    </div>
  );
}

export default ImageInput;
