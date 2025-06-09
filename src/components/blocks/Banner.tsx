import BorderButton from '../atoms/button/BorderButton';

const Banner = () => {
  return (
    <section
      className="
      bg-linear-to-l
      from-[#30313E]
      to-[#515157]
      py-[6.25rem_6.81rem]
      px-[2.00rem]
      flex flex-col gap-[2.50rem]
      "
    >
      <p className="text-[1.19rem] tracking-wide font-bold text-white">OVER 4000 LATEST CARS</p>
      <p className="text-[2.63rem] font-semibold text-white leading-[1.1]">
        Discover The Ease Of
        <span className="text-[#DD2F30]"> Getting Your Dream </span>
        Car With Quality
      </p>
      <p className="text-[#A6A6A6] text-[1.19rem]">
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat
        facere.
      </p>
      <div>
        <BorderButton>MORE INFORMATION</BorderButton>
      </div>
    </section>
  );
};

export default Banner;
