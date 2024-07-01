import { Toast } from "flowbite-react";
import { useEffect } from "react";
export function Toast1(props: { value: string; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-1 bg-opacity-100 z-50">
      <Toast>
        <div className="ml-3 text-sm font-normal mr-10">{props.value}</div>
        <Toast.Toggle onClick={props.onClose} />
      </Toast>
    </div>
  );
}
