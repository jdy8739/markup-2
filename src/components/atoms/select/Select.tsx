const Select = ({ label, defaultValue }: { label: string; defaultValue: string }) => {
  return (
    <label className="flex flex-col gap-1">
      <div className="text-[1.19rem] font-[#121212]">{label}</div>
      <select defaultValue={defaultValue} className="w-full h-[3.50rem] bg-white px-[1.38rem] py-1 focus:outline-none">
        <option value={defaultValue} className="text-[0.94rem] font-[#9899A6]">
          {defaultValue}
        </option>
      </select>
    </label>
  );
};

export default Select;
