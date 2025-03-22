export default function Branches() {
  return (
    <div className="container mx-auto text-center py-10">
      {/* Header */}
      <div className="text-center text-2xl font-bold mb-6 bg-[#E6F4ED] py-6 rounded-full mx-auto w-[90%] md:w-[40%] ">
        Our Branches
      </div>
      {/* Branch Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 px-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="relative w-full max-w-xs mx-auto">
            <img
              src="/images/branch.png"
              alt="Branch"
              className="w-full rounded-xl shadow-lg"
            />
            <div className="absolute inset-0  bg-opacity-40 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-3xl">Surat</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
