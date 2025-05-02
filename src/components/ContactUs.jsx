import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../../config.js"; // Adjust path if needed

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Clear error for field when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateField = (name, value) => {
    const fieldErrors = [];

    switch (name) {
      case "name":
        if (!value.trim()) {
          fieldErrors.push("The name field is required.");
        } else if (value.trim().length > 255) {
          fieldErrors.push("Name cannot exceed 255 characters.");
        } else if (!/^[a-zA-Z\s]*$/.test(value)) {
          fieldErrors.push("Name can only contain letters and spaces.");
        }
        break;

      case "email":
        if (!value.trim()) {
          fieldErrors.push("The email field is required.");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          fieldErrors.push("The email format is invalid.");
        } else if (value.length > 255) {
          fieldErrors.push("Email cannot exceed 255 characters.");
        }
        break;

      case "phone":
        if (!value.trim()) {
          fieldErrors.push("The phone field is required.");
        } else if (!/^\+?[0-9\s\-\(\)]*$/.test(value)) {
          fieldErrors.push("Phone number contains invalid characters.");
        } else {
          const digits = value.replace(/[\s\-\(\)+]/g, "");
          if (digits.length !== 10) {
            fieldErrors.push("Phone number must contain exactly 10 digits.");
          }
        }
        break;

      case "message":
        if (value && value.length > 1000) {
          fieldErrors.push("Message cannot exceed 1000 characters.");
        }
        break;

      default:
        break;
    }

    return fieldErrors;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldErrors = validateField(name, value);
    setErrors({
      ...errors,
      [name]: fieldErrors.length > 0 ? fieldErrors : null,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    // Validate all fields on submit
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      const fieldErrors = validateField(key, form[key]);
      if (fieldErrors.length > 0) {
        newErrors[key] = fieldErrors;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${BASE_URL}contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message ? form.message.trim() : null,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success(
          `Thank you, ${result.data.name}! Your form was submitted successfully and an email has been sent.`
        );
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        const error = await response.json();
        if (error.errors) {
          setErrors(error.errors); // Display backend validation errors
        } else {
          toast.error(error.message || "Failed to submit the form");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message || "Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 bg-white container mx-auto">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="md:w-[40%]  flex justify-center">
          <img
            src="/images/contactImg.png"
            alt="Contact Illustration"
            className="w-full max-w-md"
          />
        </div>
        <form className="w-full  md:w-2/3 space-y-5 " onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={form.name}
              className={`w-full p-3 bg-gray-100 rounded-md ${
                errors.name ? "border-red-500" : ""
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name[0]}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={form.email}
              className={`w-full p-3 bg-gray-100 rounded-md ${
                errors.email ? "border-red-500" : ""
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Your Phone *"
              value={form.phone}
              className={`w-full p-3 bg-gray-100 rounded-md ${
                errors.phone ? "border-red-500" : ""
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone[0]}</p>
            )}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              className={`w-full p-3 bg-gray-100 rounded-md h-32 ${
                errors.message ? "border-red-500" : ""
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message[0]}</p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-black text-white px-10 py-3 rounded-md disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
        <div className="fixed bottom-6 right-6 md:top-[30rem] md:right-10 flex flex-col space-y-3 z-20">
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
              window.open("https://chat.whatsapp.com/+91 6356560080", "_blank")
            }
          >
            <BsWhatsapp className="md:text-2xl text-xl" />
          </button>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <div className="flex flex-col border p-7 border-gray-200 rounded-md">
          <span className="font-bold text-lg">Mobile Number</span>
          <div className="flex flex-row mt-3 items-center">
            <div className="bg-black text-white p-2 rounded-full">
              <FaPhoneAlt className="text-sm" />
            </div>
            <p className="text-md ml-3">+91 97239 89595</p>
          </div>
        </div>
        <div className="flex flex-col border p-7 border-gray-200 rounded-md">
          <span className="font-bold text-lg">Email</span>
          <div className="flex flex-row mt-3 items-center">
            <div className="bg-black text-white p-2 rounded-full">
              <FaEnvelope className="text-sm" />
            </div>
            <p className="text-md ml-3">deals.alphacapital@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col border p-7 border-gray-200 rounded-md">
          <span className="font-bold text-lg">Address</span>
          <div className="flex flex-row mt-3 items-center">
            <div className="bg-black text-white p-2 rounded-full">
              <FaMapMarkerAlt className="text-sm" />
            </div>
            <p className="text-md ml-3">
              Silver Business Point, 2007, VIP Cir To Utran Rd, Mota Varachha,
              Surat, Gujarat 394105
            </p>
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {/* <div className="flex flex-col border p-5 sm:p-7 border-gray-200 rounded-md">
          <span className="font-bold text-lg">Mobile Number</span>
          <div className="flex flex-row mt-3 items-center">
            <div className="bg-black text-white p-2 rounded-full">
              <FaPhoneAlt className="text-sm" />
            </div>
            <p className="md:text-md text-sm ml-3">+91 97239 89595 +91 6356560080 | +91 6356560080 | +91 9724605988</p>
          </div>
        </div> */}
        <div className="flex flex-col border p-5 sm:p-7 border-gray-200 rounded-md">
          <span className="font-bold text-lg">Mobile Number</span>
          <div className="flex flex-row mt-3 items-start">
            <div className="bg-black text-white p-2 rounded-full">
              <FaPhoneAlt className="text-sm" />
            </div>
            <div className="ml-3 flex flex-col text-sm md:text-md">
              <p className="pr-3">+91 97239 89595</p>
              <p className="pr-3">+91 63565 60080</p>
              {/* <p>+91 97246 05988</p> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col border p-5 sm:p-7 border-gray-200 rounded-md">
          <span className="font-bold text-lg">Email</span>
          <div className="flex flex-row mt-3 items-center">
            <div className="bg-black text-white p-2 rounded-full">
              <FaEnvelope className="text-sm" />
            </div>
            <a
              href="mailto:deals.alphacapital@outlook.com"
              className="md:text-md text-sm ml-3 text-black hover:underline"
            >
              deals.alphacapital@outlook.com
            </a>
          </div>
        </div>

        <div className="flex flex-col border p-5 sm:p-7 border-gray-200 rounded-md">
          <span className="font-bold text-lg">Address</span>
          <div className="flex flex-row mt-3 items-center">
            <div className="bg-black text-white p-2 rounded-full">
              <FaMapMarkerAlt className="text-sm" />
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Silver+Business+Point,+2007,+VIP+Cir+To+Utran+Rd,+Mota+Varachha,+Surat,+Gujarat+394105"
              target="_blank"
              rel="noopener noreferrer"
              className="md:text-md text-sm ml-3 text-black hover:underline"
            >
              Silver Business Point, 2007, VIP Cir To Utran Rd, Mota Varachha,
              Surat, Gujarat 394105
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
