export default function Spinner() {
  return (
    <div className="flex justify-center items-center mt-8 sm:mt-12">
      <div className="relative w-10 h-10 sm:w-12 sm:h-12">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin shadow-md shadow-blue-500/50"></div>
      </div>
    </div>
  );
}
