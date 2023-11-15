import { Icon } from "@iconify/react";

export function LoadingSpinner({ size = 32 }: { size?: number }) {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Icon icon="eos-icons:loading" fontSize={size} />
    </div>
  );
}
