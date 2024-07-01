import { Loader } from "./Loader";

export function LoaderOverlay() {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-30">
      <Loader />
    </div>
  );
}
