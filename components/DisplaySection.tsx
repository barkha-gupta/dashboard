import { FC } from "react";

const DisplaySection: FC = () => {
  return (
    <div className="p-6 flex gap-6 justify-between items-center">
      <div className="custom-border flex flex-col gap-6 py-3 px-6 w-60 shadow-sm">
        <p className="text-secondary font-semibold">Total trips</p>
        <p className="text-2xl font-semibold">18,033</p>
      </div>

      <div className="custom-border py-3 px-6 flex gap-4 w-[325px] shadow-sm">
        <div className="flex flex-col gap-6 w-[168px]">
          <p className="text-secondary font-semibold">Delivered</p>
          <p className="text-2xl font-semibold">18,033</p>
        </div>
        <div className="border-l-[1px] w-[1px]" />
        <div>
          <p>chart</p>
          <p className="flex">
            <span className="text-secondary text-sm">Ontime: </span>
            <span className="text-btnPrimary font-medium text-xs">
              1,23,456
            </span>
          </p>
        </div>
      </div>

      <div className="custom-border flex gap-4 w-[529px] shadow-sm">
        <div className="flex flex-col gap-6 bg-delayed py-3 px-6 border-r border-border w-[224px]">
          <p className="text-delayedText font-semibold">Delayed</p>
          <p className="text-2xl font-semibold">18,033</p>
        </div>

        <div className="flex flex-col gap-6 py-3 px-6 border-r border-border w-[184px]">
          <p className="text-secondary font-semibold">In transit</p>
          <p className="text-2xl font-semibold">18,033</p>
        </div>

        <div className="flex flex-col gap-6 py-3 px-6 w-[184px]">
          <p className="text-secondary font-semibold">Delivered</p>
          <p className="text-2xl font-semibold">18,033</p>
        </div>
      </div>
    </div>
  );
};

export default DisplaySection;
