import BlurButton from '../atoms/button/BlurButton';
import Select from '../atoms/select/Select';

const Form = () => {
  return (
    <section
      className="
      relative
      h-[53.75rem]
      mx-[2.00rem]
      md:h-[29.00rem]
      "
    >
      <form
        className="
        absolute
        bottom-0
        w-full
      bg-[#D9D9D9]
        py-[5.00rem]
        px-[1.88rem]
        flex
        flex-col
        gap-[3.75rem]
      "
      >
        <div>
          <h2 className="text-[2.63rem] font-medium font-[#121212] leading-[1.1]">Quick Vehicle Search</h2>
        </div>
        <div className="flex flex-col gap-[2.50rem] md:grid md:grid-cols-2 md:grid-rows-2">
          <div>
            <Select label="Vehicle Body Type" defaultValue="All Models" />
          </div>
          <div>
            <Select label="Conditions" defaultValue="Vehicles Conditions" />
          </div>
          <div>
            <Select label="Years" defaultValue="Year Range" />
          </div>
          <div>
            <Select label="Vehicle Body Type" defaultValue="All Models" />
          </div>
          <div>
            <Select label="Brand" defaultValue="All Brand" />
          </div>
          <div>
            <Select label="Price Range" defaultValue="Price Range" />
          </div>
        </div>
        <div className="flex justify-end">
          <BlurButton>FIND IT NOW</BlurButton>
        </div>
      </form>
    </section>
  );
};

export default Form;
