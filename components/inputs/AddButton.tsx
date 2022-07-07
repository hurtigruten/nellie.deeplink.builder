import { AddLine } from "../icons/System";
import { ButtonModes } from "./Button";
import SecondaryButton from "./SecondaryButton";

const AddButton = (props: IButtonProps) => (
  <div className="px-16 py-4 border border-black border-dashed rounded-3xl">
    <SecondaryButton mode={ButtonModes.menuLink} {...props} icon={AddLine} />
  </div>
);

export default AddButton;
