import Button from './Button';

const BlurButton = ({
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
        p-[1rem]
        bg-[#DD2F30]
        text-white
        font-bold
        text-[1.19rem]
        tracking-[0.05rem]
        shadow-[0_0_10px_#DD2F30]
        ${className}`}
    >
      {children}
    </Button>
  );
};

export default BlurButton;
