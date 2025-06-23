import BlurButton from '../atoms/button/BlurButton';
import solutions from '../../../public/images/solution.jpg';

const Solutions = () => {
  return (
    <section className="py-[3.44rem] px-[2rem] flex flex-col gap-[5.00rem] lg:px-[7.50rem] lg:flex-row">
      <div className="h-[26.00rem] md:h-[38.94rem] relative lg:w-1/1 lg:min-w-[31.63rem]">
        <img
          src={solutions}
          alt="solutions"
          className="h-full w-full object-cover pb-[1rem] pl-[1rem] absolute top-0 right-0"
        />
        <div className="w-full h-full pt-[1rem] pr-[1rem]">
          <div className="bg-[#DD2F30] w-full h-full" />
        </div>
      </div>

      <div className="flex flex-col gap-[3.75rem]">
        <div className="flex flex-col gap-[1.88rem]">
          <h2 className="text-[2.13rem] leading-[1.1] font-medium">Best Solution Provides Electric Vehicle</h2>
          <p className="text-[1.19rem] leading-[1.6] text-[#A6A6A6] font-light">
            Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme.
            Suitable for any car dealer websites, business or corporate websites.
          </p>
        </div>
        <ul className="flex flex-col gap-[2.81rem] md:grid md:grid-cols-2 md:grid-rows-2">
          <li className="flex gap-1">
            <div className="size-[3.38rem]"></div>
            <div>
              <h4 className="text-[1.19rem]">Affordable Auto Prices</h4>
              <p className="font-light leading-[1.6] text-[0.94rem] text-[#A6A6A6]">CaarZone is nisi aliquip</p>
            </div>
          </li>
          <li className="flex gap-1">
            <div className="size-[3.38rem]"></div>
            <div>
              <h4 className="text-[1.19rem]">Online Appointment</h4>
              <p className="font-light leading-[1.6] text-[0.94rem] text-[#A6A6A6]">CaarZone is nisi aliquip</p>
            </div>
          </li>
          <li className="flex gap-1">
            <div className="size-[3.38rem]"></div>
            <div>
              <h4 className="text-[1.19rem]">Auto Rent Services</h4>
              <p className="font-light leading-[1.6] text-[0.94rem] text-[#A6A6A6]">CaarZone is nisi aliquip</p>
            </div>
          </li>
          <li className="flex gap-1">
            <div className="size-[3.38rem]"></div>
            <div>
              <h4 className="text-[1.19rem]">Always Trusted </h4>
              <p className="font-light leading-[1.6] text-[0.94rem] text-[#A6A6A6]">CaarZone is nisi aliquip</p>
            </div>
          </li>
        </ul>

        <div className="flex items-center gap-[2.50rem]">
          <div>
            <BlurButton>LEARN MORE</BlurButton>
          </div>
          <div className="bg-[#9899A6] h-[5.31rem] w-[1px]" />
          <div className="flex flex-col gap-[0.63rem]">
            <div className="text-[1.19rem]">Trusted By 900+</div>
            <div className="font-light flex justify-between">
              <span></span>
              <span>4.9</span>
              <span className="text-[#A6A6A6]">(2.5K Review)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
