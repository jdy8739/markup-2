import BlurButton from '../atoms/button/BlurButton';
import BlackCar from '../../../public/images/black-car.png';

const ServiceList = () => {
  return (
    <section
      className="
        py-[3.44rem]
        px-[2rem]
        flex flex-col
        gap-[1.88rem]
        lg:px-[7.50rem]"
    >
      <div className="flex flex-col gap-[1.88rem] md:gap-auto md:flex-row md:justify-between lg:gap-0">
        <h2 className="text-[2.13rem] font-medium leading-[1.1] lg:w-[43.38rem]">
          We Provide Best Vehicles Solution & Awesome Services
        </h2>
        <p className="text-[#A6A6A6] text-[0.94rem] leading-[1.6] lg:w-[18rem]">
          Car Dealer is the most enticing, creative, modern and multipurpose auto dealer premium WordPress Theme.
          Suitable for.
        </p>
      </div>

      <div className="flex flex-col gap-[1.88rem] lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-y-[2rem] lg:gap-x-[1.6rem]">
        <div
          className="
          bg-[#6B6C79]
          py-[2.50rem]
          flex flex-col
          gap-[1.69rem]
          md:flex-row
          md:[&>div]:w-1/2
          lg:col-span-2
          "
        >
          <div className="h-[17.31rem] relative">
            <img src={BlackCar} alt="Black Car" className="absolute h-full object-right-top object-cover" />
          </div>
          <div className="text-white flex flex-col gap-[1.25rem] px-[1.88rem] md:justify-between">
            <h3 className="font-bold text-[1.19rem] leading-[1.1]">WE ARE VERY COMPETENT IN THIS FIELD</h3>
            <p className="font-light text-[0.94rem] leading-[1.6]">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
            </p>
            <BlurButton className="self-start">LEARN MORE</BlurButton>
          </div>
        </div>

        <div className="flex flex-col gap-[1.88rem] md:grid md:grid-cols-2 md:grid-rows-2 lg:contents">
          <div className="py-[2.50rem] px-[2.70rem] border-1 border-[#DD2F30] flex flex-col gap-2">
            <div className="flex gap-[1.25rem]">
              <div className="bg-[#DD2F30] w-[3.88rem] h-[4.25rem]" />
              <h3 className="self-center text-[1.38rem]">
                Engine <div>Management</div>
              </h3>
            </div>
            <p className="text-[#A6A6A6] text-[1.19rem] leading-[1.6] font-light">
              Aliquid illo similique minima magni quidem sequi corporis fugiat type and
            </p>
            <div className="text-[#DD2F30]">Read More</div>
          </div>
          <div className="py-[2.50rem] px-[2.70rem] border-1 border-[#DD2F30] flex flex-col gap-2">
            <div className="flex gap-[1.25rem]">
              <div className="bg-[#DD2F30] w-[3.88rem] h-[4.25rem]" />
              <h3 className="self-center text-[1.38rem]">
                EV <div>Batteries</div>
              </h3>
            </div>
            <p className="text-[#A6A6A6] text-[1.19rem] leading-[1.6] font-light">
              Aliquid illo similique minima magni quidem sequi corporis fugiat type and
            </p>
            <div className="text-[#DD2F30]">Read More</div>
          </div>
          <div className="py-[2.50rem] px-[2.70rem] border-1 border-[#DD2F30] flex flex-col gap-2">
            <div className="flex gap-[1.25rem]">
              <div className="bg-[#DD2F30] w-[3.88rem] h-[4.25rem]" />
              <h3 className="self-center text-[1.38rem]">
                Charging <div>Station</div>
              </h3>
            </div>
            <p className="text-[#A6A6A6] text-[1.19rem] leading-[1.6] font-light">
              Aliquid illo similique minima magni quidem sequi corporis fugiat type and
            </p>
            <div className="text-[#DD2F30]">Read More</div>
          </div>
          <div className="py-[2.50rem] px-[2.70rem] border-1 border-[#DD2F30] flex flex-col gap-2">
            <div className="flex gap-[1.25rem]">
              <div className="bg-[#DD2F30] w-[3.88rem] h-[4.25rem]" />
              <h3 className="self-center text-[1.38rem]">
                EV Fast <div>Charging</div>
              </h3>
            </div>
            <p className="text-[#A6A6A6] text-[1.19rem] leading-[1.6] font-light">
              Aliquid illo similique minima magni quidem sequi corporis fugiat type and
            </p>
            <div className="text-[#DD2F30]">Read More</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
