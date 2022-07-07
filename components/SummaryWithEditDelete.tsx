import Icon from "./Icon";
import { EditLine } from "./icons/Design";
import { CloseLine } from "./icons/System";

const SummaryWithEditDelete = ({
  children,
  onDelete,
  onEdit,
}: {
  children: React.ReactNode;
  onEdit: TVoidFunc;
  onDelete: TVoidFunc;
}) => {
  return (
    <div className="flex overflow-hidden summaryWithEditDelete rounded-3xl">
      <button
        onClick={onEdit}
        aria-label="edit"
        title="edit"
        className="p-6 transition-all duration-100 bg-light-green hover:px-10 hover:bg-lime-green active:bg-jungle-green"
      >
        <Icon icon={EditLine} />
      </button>
      <button
        onClick={onDelete}
        aria-label="delete"
        title="delete"
        className="order-3 p-6 transition-all duration-100 hover:px-10 bg-primary-hrg-red hover:bg-light-hrg-red active:bg-flush-red"
      >
        <Icon icon={CloseLine} />
      </button>
      <div className="px-16 py-4 transition-all duration-100 bg-warm-gray-3">
        {children}
      </div>
    </div>
  );
};

export default SummaryWithEditDelete;
