import Button from './Button';

const BorderButton = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Button
      {...props}
      className={`
      p-[0.88rem]
      border-[#DD2F30]
      border-1
      text-[#DD2F30]
      font-bold
      text-[0.94rem]
      leading-[1.1]
      ${className}`}
    >
      {children}
    </Button>
  );
};

export default BorderButton;
