import picture1 from "../../assets/images/view.svg";
import picture2 from "../../assets/images/icon-team-builder.svg";
import picture3 from "../../assets/images/icon-karma.svg";
import picture4 from "../../assets/images/icon-calculator.svg";

const Cards = () => {
  return (
    // <div className="w-[100rem] ml-7  font-poppins ">
    <div className=" gap-5 flex  lg:flex-row lg:items-center sm:flex-col sm:items-center max-sm:flex-col max-sm:items-center justify-center mt-16 #FAFAFA ">
      {/* frist */}
      <div className="w-[23rem] mr-4 mt-[130px] h-[240px] border-t-4 border-[#45D3D3] shadow-2xl rounded-lg sm:mt-2 max-sm:mt-2 max-sm:w-[20rem]">
        <div className="w-[20rem] ml-5 mt-5 max-sm:w-[18rem]">
          <h1 className="font-[600] text-xl">Supervisor</h1>
          <p className="font-[400] text-[15px] mt-3 ">
            Monitors activity to identify project roadblocks
          </p>
          <img
            className="mt-14 ml-64 max-sm:ml-52 max-sm:mt-10"
            src={picture1}
            alt=""
          />
        </div>
      </div>
      {/* second */}
      <div>
        <div className="w-[23rem]  h-[240px] border-t-4 border-[#EA5353] shadow-2xl rounded-lg sm:mt-3 max-sm:mt-2 max-sm:w-[20rem]">
          <div className="w-[20rem] ml-5 mt-5 max-sm:w-[18rem]">
            <h1 className="font-[600] text-xl">Team Builder</h1>
            <p className="font-[400] text-[15px] mt-3">
              Scans our talent network to create the optimal team for your
              project
            </p>
            <img
              className="mt-10 ml-64 max-sm:ml-52 max-sm:mt-10"
              src={picture2}
              alt=""
            />
          </div>
        </div>
        {/* third */}
        <div className="w-[23rem] h-[240px] mt-8 border-t-4 border-[#FCAF4A] shadow-2xl rounded-lg  max-sm:mt-7 max-sm:w-[20rem]">
          <div className="w-[19rem] ml-5 mt-5 max-sm:w-[16rem]">
            <h1 className="font-[600] text-xl">Karma</h1>
            <p className="font-[400] text-[15px] mt-3">
              Regularty evaluates our talent to ensure quality
            </p>
            <img
              className="mt-10 ml-64 max-sm:ml-52 max-sm:mt-10 "
              src={picture3}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* fourth */}
      <div className="w-[23rem] border-t-4 h-[240px] ml-4 mt-[130px] border-[#549EF2] shadow-2xl rounded-lg sm:mt-3 sm:mb-20 max-sm:mt-2 max-sm:mb-20 max-sm:w-[20rem]">
        <div className="w-[20rem] ml-5 mt-5 max-sm:w-[15rem]">
          <h1 className="font-[600] text-xl">Calculator</h1>
          <p className="font-[400] text-[15px] mt-3">
            Uses data from past projects to previde better delivery estimates{" "}
          </p>
          <img
            className="mt-10 ml-64 max-sm:ml-52 max-sm:mt-10"
            src={picture4}
            alt=""
          />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Cards;
