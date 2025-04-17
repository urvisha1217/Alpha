import { DataGrid } from "@mui/x-data-grid";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

// Function to parse price range and extract the low price
const getLowPrice = (price) => {
  const lowPriceStr = price.split("–")[0].replace("₹", "").trim();
  return parseFloat(lowPriceStr);
};

// Function to parse IPO price
const getIPOPrice = (ipo) => {
  return parseFloat(ipo.replace("₹", "").trim());
};

// Function to calculate Gain or Loss
const calculateGainLoss = (ipoPrice, lowPrice) => {
  const gainLoss = ((ipoPrice - lowPrice) / lowPrice) * 100;
  return gainLoss.toFixed(2) + "%"; // Round to 2 decimal places and append %
};

// Recalculate gainLoss for each row
const rows = [
  {
    id: 1,
    name: "Paytm",
    price: "₹ 800–3500",
    ipo: "₹ 2150",
    gainLoss: "",
  },
  {
    id: 2,
    name: "Nazara Tech",
    price: "₹ 200–750",
    ipo: "₹ 550",
    gainLoss: "",
  },
  {
    id: 3,
    name: "Barbeque Nation",
    price: "₹ 510–1000",
    ipo: "₹ 500",
    gainLoss: "",
  },
  {
    id: 4,
    name: "CSB",
    price: "₹ 150–210",
    ipo: "₹ 195",
    gainLoss: "",
  },
  {
    id: 5,
    name: "AGS Transact",
    price: "₹ 225–575",
    ipo: "₹ 175",
    gainLoss: "",
  },
  {
    id: 6,
    name: "Anand Rathi Wealth Services",
    price: "₹ 350–800",
    ipo: "₹ 550",
    gainLoss: "",
  },
  {
    id: 7,
    name: "Aptus Value Housing Finance",
    price: "₹ 350–420",
    ipo: "₹ 353",
    gainLoss: "",
  },
  {
    id: 8,
    name: "Suryoday SFB",
    price: "₹ 175–350",
    ipo: "₹ 305",
    gainLoss: "",
  },
  {
    id: 9,
    name: "UTI AMC",
    price: "₹ 750–1100",
    ipo: "₹ 554",
    gainLoss: "",
  },
  {
    id: 10,
    name: "Delhivery",
    price: "₹ 650–900",
    ipo: "₹ 487",
    gainLoss: "",
  },
  {
    id: 11,
    name: "Tamilnad Mercantile Bank",
    price: "₹ 200–600",
    ipo: "₹ 510",
    gainLoss: "",
  },
  {
    id: 12,
    name: "Bikaji Foods",
    price: "₹ 300–450",
    ipo: "₹ 330",
    gainLoss: "",
  },
  {
    id: 13,
    name: "Five-Star Business Finance",
    price: "₹ 200–750",
    ipo: "₹ 475",
    gainLoss: "",
  },
  {
    id: 14,
    name: "Tata Technologies",
    price: "₹ 80–1100",
    ipo: "₹ 500",
    gainLoss: "",
  },
  {
    id: 15,
    name: "Capital Small Finance Bank Unlisted Shares",
    price: "₹ 190–480",
    ipo: "₹ 458",
    gainLoss: "",
  },
  {
    id: 16,
    name: "LE Travenues Technology (IXIGO) Unlisted Share",
    price: "₹ 60–220",
    ipo: "₹ 93",
    gainLoss: "",
  },
  {
    id: 17,
    name: "Waaree Energies Unlisted Shares",
    price: "₹ 800–2800",
    ipo: "₹ 1503",
    gainLoss: "",
  },
  {
    id: 18,
    name: "Swiggy Unlisted Shares",
    price: "₹ 340–525",
    ipo: "₹ 390",
    gainLoss: "",
  },
  {
    id: 19,
    name: "Medicamen Organics",
    price: "₹ 35–55",
    ipo: "₹ 34",
    gainLoss: "",
  },
  {
    id: 20,
    name: "Indian Emulsifyer",
    price: "₹ 105–128",
    ipo: "₹ 128",
    gainLoss: "",
  },
  {
    id: 21,
    name: "Mobikwik Unlisted Shares",
    price: "₹ 300–1400",
    ipo: "₹ 279",
    gainLoss: "",
  },
  {
    id: 22,
    name: "Hexaware Technologies Unlisted Shares",
    price: "₹ 250–1000",
    ipo: "₹ 708",
    gainLoss: "",
  },
];

// Update rows with calculated gainLoss
const updatedRows = rows.map((row) => {
  const lowPrice = getLowPrice(row.price);
  const ipoPrice = getIPOPrice(row.ipo);
  const gainLoss = calculateGainLoss(ipoPrice, lowPrice);
  return { ...row, gainLoss };
});

const columns = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "price", headerName: "Unlisted Share Price", flex: 1 },
  { field: "ipo", headerName: "IPO Price", flex: 1 },
  {
    field: "gainLoss",
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
              className="bg-white p-5"
              rows={updatedRows}
              columns={columns}
              pageSizeOptions={[10, 20, 30]}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 10, page: 0 },
                },
              }}
              disableRowSelectionOnClick
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


