import car from '../../../public/images/CAR.png';

const Car = () => {
  return (
    <section
      className="
      pt-[2.50rem]
      px-[2.00rem]
      bg-linear-to-l
      from-[#515157]
      to-[#30313E]
      overflow-hidden
      relative
      flex
      flex-col
      gap-[1.88rem]
      md:px-[4.50rem]
      "
    >
      <div
        className="
        absolute
        top-0
        left-0
        text-[15.75rem]
        font-bold
        text-[#FEFEFE]
        leading-[1.1]
        opacity-8
        md:text-[21.25rem]"
      >
        DEALER
      </div>
      <div className="flex flex-col gap-[6.25rem] md:flex-col-reverse">
        <div>
          <ul className="flex flex-col gap-[1.88rem] md:flex-row">
            <li className="flex flex-col gap-[0.38rem]">
              <div className="text-[#CC3333] text-[2.63rem] leading-[1.1] font-medium">900+</div>
              <div className="text-[#FEFEFE] text-[1.19rem]">Happy Clients</div>
            </li>
            <div className="w-[4.75rem] h-[1px] bg-[#A6A6A6] md:w-[0.06rem] md:h-20" />
            <li className="flex flex-col gap-[0.38rem]">
              <div className="text-[#CC3333] text-[2.63rem] leading-[1.1] font-medium">500+</div>
              <div className="text-[#FEFEFE] text-[1.19rem]">Available Cars</div>
            </li>
            <div className="w-[4.75rem] h-[1px] bg-[#A6A6A6] md:w-[0.06rem] md:h-20" />
            <li className="flex flex-col gap-[0.38rem]">
              <div className="text-[#CC3333] text-[2.63rem] leading-[1.1] font-medium">30+</div>
              <div className="text-[#FEFEFE] text-[1.19rem]">Years Experience</div>
            </li>
          </ul>
          <p className="text-[#A6A6A6] text-[0.94rem] leading-[1.6]">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in velit.
          </p>
          <div className="relative h-[21.31rem] md:h-[25.88rem]">
            <img
              src={car}
              alt="car"
              className="absolute bottom-0 left-0 md:right-[-12rem] md:left-auto max-w-none h-full"
            />
          </div>
        </div>
        <div>
          <p className="font-bold tracking-wider text-white text-[0.94rem]">GET TO KNOW MORE:</p>
          <ul></ul>
        </div>
      </div>
    </section>
  );
};

export default Car;
