import { ArrowRight } from "lucide-react";

function PrimaryButton({ text }) {
  return (
    <button className="cursor-pointer flex items-center gap-2 bg-[#770844] text-white px-5 py-2 rounded group mx-auto mt-8">
            {text}
        <ArrowRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
        />
    </button>
  );
}

export default PrimaryButton;