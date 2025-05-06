import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";

const UnlistedShares = () => {
  // const shares = [
  //   {
  //     name: "Tata Capital Ltd",
  //     logo: "/images/tata-capital.png",
  //     url: "https://www.tatacapital.com",
  //   },
  //   {
  //     name: "National Stock Exchange",
  //     logo: "/images/nse.png",
  //     url: "https://www.nseindia.com",
  //   },
  //   {
  //     name: "Zomato",
  //     logo: "/images/zomato.png",
  //     url: "https://www.zomato.com",
  //   },
  //   {
  //     name: "Chennai Super Kings",
  //     logo: "/images/csk.png",
  //     url: "https://www.chennaisuperkings.com",
  //   },
  //   {
  //     name: "Boat Lifestyle",
  //     logo: "/images/boat.png",
  //     url: "https://www.boat-lifestyle.com",
  //   },
  //   {
  //     name: "Swiggy Delivery",
  //     logo: "/images/swiggy.png",
  //     url: "https://www.swiggy.com",
  //   },
  //   {
  //     name: "PharmEasy",
  //     logo: "/images/pharmeasy.png",
  //     url: "https://pharmeasy.in",
  //   },
  //   {
  //     name: "Vikram Solar",
  //     logo: "/images/vikram-solar.png",
  //     url: "https://www.vikramsolar.com",
  //   },
  //   {
  //     name: "Reliance Retail",
  //     logo: "/images/reliance-retail.png",
  //     url: "https://www.relianceretail.com",
  //   },
  //   {
  //     name: "Byju's Learning",
  //     logo: "/images/byjus.png",
  //     url: "https://byjus.com",
  //   },
  // ];

  const shares = [
  {
    "name": "A V Thomas & Co. Limited Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/29/a_v_thomas__co._limited_unlisted_shares-logo-1700277913.jpeg",
    "url": "http://www.avthomas.in/"
  },
  {
    "name": "ACS Technologies Limited Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/376/acs_technologies_limited_unlisted_shares-logo-1700278377.png",
    "url": "https://acstechnologies.com/"
  },
  {
    "name": "ADIANCE TECHNOLOGIES Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/520/adiance_technologies_unlisted_shares-logo-1742297831.jpg",
    "url": "https://unlistedzone.com/shares/adiance-technologies-unlisted-shares/"
  },
  {
    "name": "Adtech Systems Limited Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/200/adtech_systems_limited_unlisted_shares-logo-1700278860.png",
    "url": "https://www.adtechsys.com/"
  },
  {
    "name": "AITMC Ventures Pvt. Ltd. (AVPL) Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/460/aitmc_ventures_pvt._ltd._avpl_unlisted_shares_price-logo-1715845744.png",
    "url": "https://avplinternational.com/"
  },
  {
    "name": "Ambadi Investments Limited (murugappa)",
    "logo": "https://unlistedzone.com/storage/company-logo//ambadi_investments_limited_murugappa-logo-1723871786.jpeg",
    "url": "https://www.murugappa.com/our-companies/ambadi-investments-ltd/"
  },
  {
    "name": "Amol Minechem Limited",
    "logo": "https://unlistedzone.com/storage/company-logo/286/amol_minechem_limited-logo-1723445124.jpeg",
    "url": "https://www.amolminechem.com/"
  },
  {
    "name": "Anheuser Busch Inbev (Sabmiller) India Limited Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/34/anheuser_busch_inbev_sabmiller_india_limited_unlisted_shares-logo-1704872449.png",
    "url": "https://www.ab-inbev.com/our-locations/asia-pacific/india/"
  },
  {
    "name": "Anugraha Valve Castings Limited Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/35/anugraha_valve_castings_limited_unlisted_shares-logo-1700280663.png",
    "url": "https://www.anugrahavalvecastings.com/"
  },
  {
    "name": "APL Metals Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/367/apl_metals_unlisted_shares-logo-1720691681.png",
    "url": "https://unlistedzone.com/shares/apl-metals-unlisted-share-price-buy-sell/"
  },
  {
    "name": "Apollo Fashion International Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo//apollo_fashion_international_limited-logo-1714982642.png",
    "url": "https://unlistedzone.com/shares/apollo-fashion-international-unlisted-shares/"
  },
  {
    "name": "Apollo Green Energy Limited Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo//apollo_green_energy_limited_unlisted_shares-logo-1719213424.jpeg",
    "url": "https://apollopower.in/"
  },
  {
    "name": "Arch Pharmalabs Limited Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/217/arch_pharmalabs_limited_unlisted_shares-logo-1719826884.jpeg",
    "url": "https://www.archpharmalabs.com/"
  },
  {
    "name": "Arohan Financial Services Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/37/arohan_financial_services_unlisted_shares-logo-1704872538.png",
    "url": "https://www.arohan.in/"
  },
  {
    "name": "ASK Investment Managers Limited",
    "logo": "https://unlistedzone.com/storage/company-logo//ask_investment_managers_limited-logo-1728643288.png",
    "url": "https://www.askfinancials.com/"
  },
  {
    "name": "Assam Carbon Products Limited Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/38/assam_carbon_products_limited_unlisted_shares-logo-1700284056.png",
    "url": "https://www.assamcarbon.in/"
  },
  {
    "name": "Auckland Jute Co. Limited Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/40/auckland_international_limited_unlisted_shares-logo-1720435884.jpeg",
    "url": "https://unlistedzone.com/shares/auckland-jute-unlisted-shares-buy-sell-online"
  },
  {
    "name": "Axles India Limited Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/295/axles_india_limited_unlisted_shares-logo-1719050241.jpeg",
    "url": "https://www.axlesindia.com/"
  },
  {
    "name": "Bagrrys India Limited Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/44/bagrrys_india_limited_unlisted_shares-logo-1700283628.png",
    "url": "https://www.bagrrys.com/"
  },
  {
    "name": "Bazar India Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/201/bazar_india_unlisted_shares-logo-1700284015.png",
    "url": "https://www.bazarindia.co.in/"
  },
  {
    "name": "Berar Finance Limited",
    "logo": "https://unlistedzone.com/storage/company-logo//berar_finance_limited-logo-1719560907.png",
    "url": "https://www.berarfinance.com/"
  },
  {
    "name": "Bharat Hotels Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/47/bharat_hotels_unlisted_shares-logo-1700284518.jpeg",
    "url": "https://www.thelalit.com/"
  },
  {
    "name": "Bharat Nidhi (Bharat Bank) Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/48/bharat_nidhi_bharat_bank_unlisted_shares-logo-1700285185.jpg",
    "url": "https://www.bharatnidhi.com/"
  },
  {
    "name": "Big Basket Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo//big_basket_unlisted_shares-logo-1729254947.jpeg",
    "url": "https://www.bigbasket.com/"
  },
  {
    "name": "Bira Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/42/bira_unlisted_shares-logo-1700286221.png",
    "url": "https://www.bira91.com/"
  },
  {
    "name": "BLSX Limited",
    "logo": "https://unlistedzone.com/storage/company-logo/380/blsx_limited_unlisted_shares-logo-1725606203.png",
    "url": "https://unlistedzone.com/shares/blsx-shares-price-buy-sell-online"
  },
  {
    "name": "Blu-Smart Mobility Private Limited",
    "logo": "https://unlistedzone.com/storage/company-logo/534/blu-smart_mobility_private_limited-logo-1741589611.jpeg",
    "url": "https://blu-smart.com/"
  },
  {
    "name": "Boat Unlisted Share Price (Imagine Marketing)",
    "logo": "https://unlistedzone.com/storage/company-logo/352/boat_unlisted_share_price_imagine_marketing-logo-1700464263.png",
    "url": "https://www.boat-lifestyle.com/"
  },
  {
    "name": "Bolzen and Mutter Unlisted Share",
    "logo": "https://unlistedzone.com/storage/company-logo/453/bolzen_and_mutter_unlisted_share-logo-1714126033.jpeg",
    "url": "https://unlistedzone.com/shares/bolzen-and-mutter-share-price-buy-sell-online"
  },
  {
    "name": "Bombay Gas Company Limited Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/50/bombay_gas_company_limited_unlisted_shares-logo-1725705906.png",
    "url": "https://unlistedzone.com/shares/bombay-gas-company-limited-unlisted-shares"
  },
  {
    "name": "Bombay Swadeshi Stores Limited Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/51/bombay_swadeshi_stores_limited_unlisted_shares-logo-1725360569.png",
    "url": "https://www.thebombaysamachar.com/swadeshi-store"
  },
  // {
  //   "name": "Bootes Impex Tech Ltd.",
  //   "logo": "https://unlistedzone.com/storage/company-logo//bootes_impex_tech_ltd.-logo-1724221993.jpeg",
  //   "url": "https://unlistedzone.com/shares/bootes-impex-tech-share-price-buy-sell-online"
  // },
  // {
  //   "name": "BVG India Limited Unlisted Share",
  //   "logo": "https://unlistedzone.com/storage/company-logo/204/bvg_india_limited_unlisted_share-logo-1700472582.jpeg",
  //   "url": "https://www.bvgindia.com/"
  // },
  {
    "name": "C&S Electric Limited Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/53/cs_electric_limited_unlisted_shares-logo-1700472917.png",
    "url": "https://www.cselectric.co.in/"
  },
  {
    "name": "Calcutta Stock Exchange Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/55/calcutta_stock_exchange_unlisted_shares-logo-1724741050.jpeg",
    "url": "https://www.cse-india.com/"
  },
  {
    "name": "Capgemini Technology Services India Limited Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/58/capgemini_technology_services_india_limited_unlisted_shares-logo-1704805254.jpeg",
    "url": "https://www.capgemini.com/in-en/"
  },
  {
    "name": "Care Health Insurance",
    "logo": "/images/hci.png",
    "url": "https://www.careinsurance.com/"
  },
  {
    "name": "Carrier Airconditioning & Refrigeration Limited Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/61/carrier_airconditioning__refrigeration_limited_unlisted_shares-logo-1701162010.png",
    "url": "https://www.carrier.com/carrier/en/in/"
  },
  {
    "name": "Claps Oiltech Unlisted Share",
    "logo": "https://unlistedzone.com/storage/company-logo//claps_oiltech_unlisted_share-logo-1714125685.png",
    "url": "https://unlistedzone.com/shares/claps-oiltech-unlisted-share"
  },
  {
    "name": "Cochin International Airport Limited Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/14/cochin_international_airport_limited_unlisted_shares-logo-1700709289.png",
    "url": "https://www.cial.aero/"
  },
  {
    "name": "CSK Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/62/csk_unlisted_shares-logo-1700546888.jpeg",
    "url": "https://www.chennaisuperkings.com/"
  },
  // {
  //   "name": "CTR Manufacturing Industries Limited Unlisted Share",
  //   "logo": "https://unlistedzone.com/storage/company-logo/230/ctr_manufacturing_industries_limited_unlisted_share-logo-1701760319.jpg",
  //   "url": "https://www.ctr.in/"
  // },
  {
    "name": "Dalmia Bharat Refractories Limited Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/353/dalmia_bharat_refractories_limited_unlisted_shares-logo-1702996329.jpeg",
    "url": "https://www.dalmiarefractories.com/"
  },
  {
    "name": "Delta Galaxy Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/434/delta_galaxy_unlisted_shares-logo-1722408176.jpeg",
    "url": "https://unlistedzone.com/shares/delta-galaxy-unlisted-shares"
  },
  {
    "name": "Deys Medical Stores (Mfg) Limited Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/210/deys_medical_stores_mfg_limited_unlisted_shares-logo-1701691724.png",
    "url": "https://www.deysmedical.com/"
  },
  // {
  //   "name": "Digvijay Finlease Unlisted Shares",
  //   "logo": "https://unlistedzone.com/storage/company-logo/85/digvijay_finlease_unlisted_shares-logo-1701760697.jpeg",
  //   "url": "https://unlistedzone.com/shares/buy-sell-share-price-digvijay-finlease-unlisted-shares"
  // },
  {
    "name": "Down Town Hospital Limited Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/86/down_town_hospital_limited_unlisted_shares-logo-1701761049.jpg",
    "url": "https://www.downtownhospitals.in/"
  },
  {
    "name": "DSM Fresh Foods Zappfresh",
    "logo": "https://unlistedzone.com/storage/company-logo//dsm_fresh_foods_zappfresh-logo-1721196805.jpeg",
    "url": "https://www.zappfresh.com/"
  },
  {
    "name": "Eaton Fluid Power Limited Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/189/eaton_fluid_power_limited_unlisted_shares-logo-1701692282.png",
    "url": "https://www.eaton.com/in/en-us.html"
  },
  {
    "name": "Ecosure Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo//ecosure_unlisted_shares-logo-1727067820.jpeg",
    "url": "https://ecosurepulpmolding.com/"
  },
  {
    "name": "Electrosteel Steels Limited Unlisted Shares",
    "logo": "https://unlistedzone.com/storage/company-logo/74/electrosteel_steels_limited_unlisted_shares-logo-1701840682.png",
    "url": "https://www.electrosteel.com/"
  },
  {
    "name": "FlySBS Aviation Limited",
    "logo": "/images/sbs.jpeg",
    "url": "https://sbsaviation.in/"
  },
  {
    "name": "HDB Financial Services",
    "logo": "/images/HDFC.png",
    "url": "https://www.hdbfs.com/"
  },
  {
    "name": "Metropolitan Stock Exchange",
    "logo": "/images/msei.png",
    "url": "https://www.msei.in/"
  },
  {
    "name": "National Securities Depository Limited",
    "logo": "/images/nsdL.png",
    "url": "https://www.nsdl.co.in/"
  },
  {
    "name": "Onix Renewable Limited",
    "logo": "/images/onix.png",
    "url": "https://onixrenewables.com/"
  },
  {
    "name": "OYO Rooms",
    "logo": "/images/OYO.png",
    "url": "https://www.oyorooms.com/"
  },
  {
    "name": "Pace Digitek",
    "logo": "/images/PD.png",
    "url": "https://pacedigitek.com/"
  },
  {
    "name": "Polymatech Electronics Limited",
    "logo": "/images/pm.png",
    "url": "https://www.polymatech.in/"
  }
];
  return (
    <div className="flex flex-col w-full items-center h-fit font-['Josefin_Sans'] relative">
      {/* Section Title */}
      <h2 className="text-4xl font-bold  md:mb-6 md:mt-16 mt-12">
        Unlisted Shares
      </h2>

      {/* Wrapper for Layout */}
      <div className="relative w-full max-w-7xl px-6 h-fit">
        {/* Background Pattern */}
        <div className="absolute top-14 -left-12 hidden md:flex">
          <img src="/images/design2.png" alt="Pattern" className="w-60 h-75" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6  h-fit pt-12 pb-10">
          {shares.map((share, index) => (
            <div
              key={index}
              className="bg-white shadow-lg border border-gray-200 rounded-lg p-6 text-center z-30"
            >
              <div>
                {/* Company Logo */}
                <img
                  src={share.logo}
                  alt={`${share.name} Logo`}
                  className="h-20 mx-auto mb-4"
                />
              </div>
              {/* Company Name with Tooltip */}
              <div className="relative group">
                <h3 className="text-md font-semibold mb-4 truncate whitespace-nowrap overflow-hidden">
                  {share.name}
                </h3>
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 z-40">
                  {share.name}
                </span>
              </div>
              {/* Buttons */}
              <button
                className="bg-[#1699B1] text-white px-6 py-2 rounded-full mb-2 w-full cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://wa.me/+916356560080?text=I+am+interested+in+Pre-IPO+Shares",
                    "_blank"
                  )
                }
              >
                Get Best Price
              </button>
              <a
                href={share.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Icons (FIXED) */}
      <div className="fixed bottom-6 right-6 md:top-[30rem] md:right-10 flex flex-col space-y-3 z-30">
        <button
          className="md:p-4 p-3 bg-[#1699B1] text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
          onClick={() =>
            window.open(
              "https://chat.whatsapp.com/HU0ANXzpvF4HiDWuDpeebX",
              "_blank"
            )
          }
        >
          <HiOutlineUserGroup className="md:text-2xl text-xl" />
        </button>
        <button
          className="md:p-4 p-3 bg-[#16A569] text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
          onClick={() =>
            window.open(
              "https://wa.me/+916356560080?text=I+am+interested+in+Pre-IPO+Shares",
              "_blank"
            )
          }
        >
          <BsWhatsapp className="md:text-2xl text-xl" />
        </button>
      </div>

      <button
        className="flex items-center gap-2 px-8 py-2 bg-[#1699B1] text-white rounded-full shadow-xl cursor-pointer transition duration-200 mb-15"
        onClick={() => window.open(
          "https://chat.whatsapp.com/HU0ANXzpvF4HiDWuDpeebX",
          "_blank"
        )}
      >
        Explore Full List
      </button>
    </div>
  );
};

export default UnlistedShares;
