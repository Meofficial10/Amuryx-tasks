export default function Spinner() {
  return (
    <div className="flex justify-center items-center mr-30 mt-20">
      <div className="relative">
        <div className="w-12 h-12 rounded-full absolute
        border-4 border-solid border-gray-200"></div>

        <div className="w-12 h-12 rounded-full animate-spin absolute
        border-4 border-solid border-blue-500 border-t-transparent shadow-md shadow-blue-500/50"></div>
      </div>
    </div>
  );
}