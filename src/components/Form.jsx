import { useState, useRef } from "react";
import { toPng } from "html-to-image";
import TraditionalCard from "./TraditionalCard";
import ModernCard from "./ModernCard";

const Form = () => {
  const [form, setForm] = useState({
    to: "",
    from: "",
    message: "",
  });
  const [style, setStyle] = useState("modern");
  const cardRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDownload = async () => {
    if (cardRef.current === null) return;
    const dataUrl = await toPng(cardRef.current);
    const link = document.createElement("a");
    link.download = "Diwali_Card.png";
    link.href = dataUrl;
    link.click();
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-100 p-6">
      <h1 className="text-4xl font-serif font mb-10 text-center">
        Make Your Diwali Card ✨
      </h1>

      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-400 p-6 w-[330px]">
          <form className="flex flex-col gap-5">
            {["to", "from", "message"].map((field) => (
              <input
                key={field}
                name={field}
                placeholder={`Enter ${field}`}
                value={form[field]}
                onChange={handleChange}
                className="border border-gray-400 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            ))}
          </form>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => setStyle("modern")}
              className={`flex-1 rounded-lg py-2 ${
                style === "modern"
                  ? "bg-yellow-600 text-white"
                  : "border border-yellow-600 text-yellow-600 transition-colors duration-300 ease-in-out cursor-pointer"
              }`}
            >
              Modern
            </button>
            <button
              onClick={() => setStyle("traditional")}
              className={`flex-1 rounded-lg py-2 ${
                style === "traditional"
                  ? "bg-orange-500 text-white"
                  : "border border-orange-500 text-orange-500  transition-colors duration-300 ease-in-out cursor-pointer"
              }`}
            >
              Traditional
            </button>
          </div>
        </div>

        {/* Card Preview */}
        <div ref={cardRef}>
          {style === "modern" ? (
            <ModernCard {...form} />
          ) : (
            <TraditionalCard {...form} />
          )}
        </div>
      </div>

      <button
        onClick={handleDownload}
        className="mt-15 bg-black text-white px-6 py-2 rounded-lg  hover:opacity-90 cursor-pointer hover:scale-[1.02]"
      >
        Download Card
      </button>
    </div>
  );
};

export default Form;
