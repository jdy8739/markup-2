const Input = ({
  id,
  icon,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { icon?: React.ReactNode }) => {
  return (
    <label
      htmlFor={id}
      className="
        flex
        items-center
        gap-[0.6rem]
        border-b-2
      border-[#DD2F30]
      "
    >
      {icon && <span className="">{icon}</span>}
      <input
        id={id}
        className={`
          outline-none
          text-white
          pb-[7px]
          leading-2
          font-light
          text-[0.9rem]
          placeholder:opacity-50
          ${className}`}
        {...props}
      />
    </label>
  );
};

export default Input;
