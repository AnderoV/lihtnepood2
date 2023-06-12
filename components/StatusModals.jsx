import CrossFailed from "../public/CrossFailed";
import SuccessIcon from "../public/SuccessIcon";

export const CanceledModal = () => {
  return (
    <div className="w-3/4 -mt-4 mb-8 flex justify-center bg-sky-700 font-bold text-lg gap-2 py-1 rounded-sm ">
      <CrossFailed className="w-7 h-7 fill-pink-600" />
      <span>Canceled Payment</span>
    </div>
  );
};

export const SuccessModal = () => {
  return (
    <div className="w-3/4 -mt-4 mb-8 flex justify-center bg-sky-700 font-bold text-lg gap-2 py-1 rounded-sm ">
      <SuccessIcon className="w-7 h-7 fill-emerald-600  " />
      <span>Payment completed successfully</span>
    </div>
  );
};
