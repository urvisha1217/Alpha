import { DataGrid } from "@mui/x-data-grid";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

const columns = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "price", headerName: "Unlisted Share Price", flex: 1 },
  { field: "ipo", headerName: "IPO Price", flex: 1 },
  {
    field: "gain",
    headerName: "Gain or Loss",
    flex: 1,
    renderCell: (params) => (
      <span
        className={`px-4 py-3 rounded-full ${
          params.value.includes("-")
            ? "bg-red-300 text-red-700"
            : "bg-green-300 text-green-700"
        }`}
      >
        {params.value.includes("-") ? (
          <ArrowDownward className="bg-red-700 text-white rounded-full p-1 mr-2" />
        ) : (
          <ArrowUpward className="bg-green-700 text-white rounded-full p-1 mr-2" />
        )}
        {params.value}
      </span>
    ),
  },
];

const rows = [
  {
    id: 1,
    name: "Indian Emulsifyer",
    price: "₹ 105-128",
    ipo: "₹ 128",
    cmp: "₹ 105.95",
    gain: "-17.23%",
  },
  {
    id: 2,
    name: "IXIGO Unlisted Share",
    price: "₹ 60-220",
    ipo: "₹ 93",
    cmp: "₹ 134.09",
    gain: "44.18%",
  },
  {
    id: 3,
    name: "Medicament Organics",
    price: "₹ 35-55",
    ipo: "₹ 34",
    cmp: "₹ 22.4",
    gain: "-34.12%",
  },
  {
    id: 4,
    name: "Mobikwik Unlisted Shares",
    price: "₹ 300-1400",
    ipo: "₹ 279",
    cmp: "₹ 333.4",
    gain: "19.5%",
  },
  {
    id: 5,
    name: "Nazara Tech",
    price: "₹ 200-750",
    ipo: "₹ 550",
    cmp: "₹ 957.9",
    gain: "74.16%",
  },
  {
    id: 6,
    name: "Paytm",
    price: "₹ 800-3500",
    ipo: "₹ 2150",
    cmp: "₹ 763.1",
    gain: "-64.51%",
  },
  {
    id: 7,
    name: "Suryoday SFB",
    price: "₹ 175-350",
    ipo: "₹ 305",
    cmp: "₹ 102.97",
    gain: "-66.24%",
  },
  {
    id: 8,
    name: "Swiggy Unlisted Shares",
    price: "₹ 340-525",
    ipo: "₹ 390",
    cmp: "₹ 360.6",
    gain: "-7.54%",
  },
  {
    id: 9,
    name: "Tamilnad Mercantile Bank",
    price: "₹ 200-600",
    ipo: "₹ 510",
    cmp: "₹ 417.85",
    gain: "-18.07%",
  },
  {
    id: 10,
    name: "Tata Technologies",
    price: "₹ 80-1100",
    ipo: "₹ 500",
    cmp: "₹ 671.3",
    gain: "34.26%",
  },
];
export default function IPOPerformance() {
  return (
    <div className="bg-[#ECF4FD] px-4 md:px-16">
  <div className="flex justify-end pr-30">
    <img src="/images/design.png" className="h-25 w-auto" />
  </div>
  <h2 className="text-3xl font-semibold text-center mb-4">
    Past IPO Performance
  </h2>
  <p className="text-xl text-center text-gray-600 mb-8">
    Explore the Historical IPO Performance of Unlisted Shares to Inform Your
    Investment Strategy Today.
  </p>
  <div className="container mx-auto p-4">
    {/* Scrollable wrapper for small devices */}
    <div className="overflow-x-auto">
      <div className="min-w-[600px] md:min-w-full overflow-hidden rounded-4xl border border-gray-400">
        <DataGrid
          className="bg-white p-5 "
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 15]}
          disableSelectionOnClick
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              fontWeight: "bold",
              backgroundColor: "#f3f4f6",
              fontSize: "1.25rem",
            },
            "& .MuiDataGrid-cell": {
              fontSize: "0.99rem",
            },
          }}
        />
      </div>
    </div>
  </div>
</div>

  );
}
