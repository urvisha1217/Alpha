export default function Branches() {
  const branches = [
    { name: "Surat", image: "/images/surat.jpg" },
    { name: "Mumbai", image: "/images/mumbai.jpg" },
    { name: "Gurgaon", image: "/images/gurgaon.jpg" },
    { name: "Delhi", image: "/images/delhi.jpg" },
  ];

  return (
    <div className="container mx-auto text-center py-10">
      {/* Header */}
      <div className="text-center text-2xl font-bold mb-6 bg-[#E6F4ED] py-6 rounded-full mx-auto w-[90%] md:w-[40%]">
        Our Branches
      </div>

      {/* Branch Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 px-4">
        {branches.map((branch, index) => (
          <div
            key={index}
            className="relative w-full max-w-xs mx-auto overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={branch.image}
              alt={branch.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0  bg-opacity-40 backdrop-blur-xs flex items-center justify-center">
              <span className="text-white font-bold text-3xl">
                {branch.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
