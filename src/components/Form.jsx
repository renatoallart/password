import { usePasswordContext } from "../context/PasswordProvider";
import { Input } from "./Input";

export function Form() {
  const { handleOnSubmit } = usePasswordContext();

  return (
    <form
      className="flex flex-col m-4 p-4 items-center border-2 border-gray-300 rounded-md
      md:w-[500px] "
      onSubmit={handleOnSubmit}
    >
      <div>
        <Input type={"number"} name={"length"} label={"Password Length"} />
        <Input
          type={"checkbox"}
          name={"upperCase"}
          label={"Include UpperCase Letters"}
        />
        <Input type={"checkbox"} name={"symbol"} label={"Include Symbol"} />
        <Input type={"checkbox"} name={"number"} label={"Include Number"} />
        <button
          className=" bg-gray-300 text-black font-bold text-lg rounded p-2
           w-full"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
