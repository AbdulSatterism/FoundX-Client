import { Spinner } from "@nextui-org/spinner";


const Loading = () => {
  return (
    <div className="h-screen bg-black/20 flex items-center justify-center fixed inset-0 z-[999] backdrop-blur-md">
      <Spinner />
    </div>
  );
};

export default Loading;
