import { usePasswordContext } from "../context/PasswordProvider";
import { ClipboardText, Check } from "phosphor-react";

export function Display() {
  const { password, checkClipboard, handleClipboard } = usePasswordContext();

  return (
    <section className="flex justify-center items-center gap-2 m-4 p-4 ">
      <h2 className="text-xl text-gray-300 font-bold bg-slate-600 h-12 w-[350px] rounded-md text-center p-2  ">
        {password}
      </h2>
      {checkClipboard ? (
        <Check size={36} color={"#d1d5db"} />
      ) : (
        <ClipboardText onClick={handleClipboard} color={"#d1d5db"} size={60} />
      )}
    </section>
  );
}
