import BorderButton from '../atoms/button/BorderButton';

const Banner = () => {
  return (
    <section
      className="
      bg-linear-to-l
      from-[#30313E]
      to-[#515157]
      py-[12.5rem_6.81rem]
      px-[2.00rem]
      lg:px-[7.5rem]
      flex flex-col gap-[2.50rem]
      md:px-[4.50rem]
      md:flex-row"
    >
      <div className="flex flex-col gap-[2.50rem]">
        <p className="text-[1.19rem] tracking-wide font-bold text-white lg:font-normal">OVER 4000 LATEST CARS</p>
        <p className="text-[2.63rem] font-semibold text-white leading-[1.1] lg:text-[5.13rem]">
          Discover The Ease Of
          <span className="text-[#DD2F30]"> Getting Your Dream </span>
          Car With Quality
        </p>
      </div>
      <div className="flex flex-col gap-[2.50rem] md:pt-[4.00rem]">
        <p className="text-[#A6A6A6] text-[1.19rem]">
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat
          facere.
        </p>
        <div>
          <BorderButton>MORE INFORMATION</BorderButton>
        </div>
      </div>
    </section>
  );
};

export default Banner;
