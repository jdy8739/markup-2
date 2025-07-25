import BlurButton from '../atoms/button/BlurButton';
import profile from '../../../public/images/VIDEO PROFILE.jpg';
import car1 from '../../../public/images/car-1.png';
import car2 from '../../../public/images/car-2.png';
import car3 from '../../../public/images/car-3.png';
import BorderButton from '../atoms/button/BorderButton';

const Products = () => {
  return (
    <section
      className="
        py-[3.44rem]
        px-[2rem]
        flex flex-col
        gap-[5.00rem]
        "
    >
      <div className="h-[15.44rem] md:h-[23.38rem] lg:h-[34.38rem]">
        <img src={profile} alt="profile" className="w-full h-full object-top object-cover" />
      </div>
      <div className="md:pr-[3.81rem] lg:px-[7.38rem]">
        <div className="flex flex-col gap-[2.5rem] lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-[1.25rem] lg:w-[50%]">
            <h2 className="text-[2.13rem] font-medium">Our Featured Car</h2>
            <p className="text-[1.19rem] font-light text-[#A6A6A6] leading-[1.6]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna. 
            </p>
          </div>
          <div className="lg:self-end">
            <BlurButton>FIND MORE</BlurButton>
          </div>
        </div>
      </div>
      <div className="md:pr-[3.81rem] lg:px-[7.38rem]">
        <ul className="flex flex-col gap-[3.75rem] lg:flex-row lg:gap-[1rem]">
          <li className="h-[37.13rem] relative">
            <div className="absolute top-0 right-0 w-full h-full bg-[#A6A6A6] opacity-16" />
            <div className="h-[18.75rem] bg-linear-to-tl from-[rgba(88,88,88,0.62)] to-white py-[1.25rem] px-[1.50rem] flex flex-col justify-between">
              <div>
                <span className="bg-[#DD2F30] text-white px-[0.69rem] py-[0.38rem] font-bold rounded-sm">USED</span>
              </div>
              <div className="h-[9.44rem] md:h-[13rem]">
                <img src={car1} alt="car1" className="w-full h-full object-contain" />
              </div>
              <div />
            </div>
            <div className="pt-[2.38rem] min-h-[18.75rem] pb-[1.88rem] px-[1.50rem] flex flex-col justify-between gap-[1.25rem]">
              <div className="flex flex-col gap-[1.25rem]">
                <h2 className="text-[1.88rem] text-[#101C48] lg:text-[1.38rem]">Audi A4 Avant White 2013</h2>
                <div>
                  <div></div>
                  <div>5.0 (100+ Reviews)</div>
                </div>
                <div className="flex justify-between">
                  <span>Sedan</span>
                  <span>Manual</span>
                  <span>Gasoline</span>
                </div>
                <hr className="text-[#101C48]" />
              </div>
              <div className="flex justify-between items-center">
                <div className="text-[#DD2F30] font-bold text-[1.38rem]">$11.436,92</div>
                <BorderButton>DETAILS</BorderButton>
              </div>
            </div>
          </li>
          <li className="h-[37.13rem] relative border-[1px] border-[#DD2F30] box-border">
            <div className="absolute top-0 right-0 w-full h-full bg-[#A6A6A6] opacity-16" />
            <div className="h-[18.75rem] bg-linear-to-tl from-[rgba(88,88,88,0.62)] to-white py-[1.25rem] px-[1.50rem] flex flex-col justify-between">
              <div>
                <span className="bg-[#DD2F30] text-white px-[0.69rem] py-[0.38rem] font-bold rounded-sm">USED</span>
              </div>
              <div className="h-[9.44rem] md:h-[13rem]">
                <img src={car2} alt="car2" className="w-full h-full object-contain" />
              </div>
              <div />
            </div>
            <div className="pt-[2.38rem] min-h-[18.75rem] pb-[1.88rem] px-[1.50rem] flex flex-col justify-between gap-[1.25rem]">
              <div className="flex flex-col gap-[1.25rem]">
                <h2 className="text-[1.88rem] text-[#DD2F30] lg:text-[1.38rem]">Audi A5 Cabriolet 2.0TFSI</h2>
                <div>
                  <div></div>
                  <div>5.0 (100+ Reviews)</div>
                </div>
                <div className="flex justify-between">
                  <span>Sedan</span>
                  <span>Manual</span>
                  <span>Gasoline</span>
                </div>
                <hr className="text-[#101C48]" />
              </div>
              <div className="flex justify-between items-center">
                <div className="text-[#DD2F30] font-bold text-[1.38rem]">$79.400,48</div>
                <BorderButton>DETAILS</BorderButton>
              </div>
            </div>
          </li>
          <li className="min-h-[37.13rem] relative">
            <div className="absolute top-0 right-0 w-full h-full bg-[#A6A6A6] opacity-16" />
            <div className="h-[18.75rem] bg-linear-to-tl from-[rgba(88,88,88,0.62)] to-white py-[1.25rem] px-[1.50rem] flex flex-col justify-between">
              <div>
                <span className="bg-[#DD2F30] text-white px-[0.69rem] py-[0.38rem] font-bold rounded-sm">USED</span>
              </div>
              <div className="h-[9.44rem] md:h-[13rem]">
                <img src={car3} alt="car3" className="w-full h-full object-contain" />
              </div>
              <div />
            </div>
            <div className="pt-[2.38rem] min-h-[18.75rem] pb-[1.88rem] px-[1.50rem] flex flex-col justify-between gap-[1.25rem]">
              <div className="flex flex-col gap-[1.25rem]">
                <h2 className="text-[1.88rem] text-[#101C48] lg:text-[1.38rem]">Pontiac Solstice GXP Coupe</h2>
                <div>
                  <div></div>
                  <div>5.0 (100+ Reviews)</div>
                </div>
                <div className="flex justify-between">
                  <span>Sedan</span>
                  <span>Manual</span>
                  <span>Gasoline</span>
                </div>
                <hr className="text-[#101C48]" />
              </div>
              <div className="flex justify-between items-center">
                <div className="text-[#DD2F30] font-bold text-[1.38rem]">$5.382,55</div>
                <BorderButton>DETAILS</BorderButton>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Products;
