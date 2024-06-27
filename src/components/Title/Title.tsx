interface TitleProps {
  isAboutOpen: boolean;
}

const Title = ({ isAboutOpen }: TitleProps): React.ReactElement => {
  return (
    <div className="flex flex-row text-white justify-center pt-8">
      <h1
        id="target-title"
        className="target font-founders uppercase text-[12rem] flex flex-col"
      >
        <span className="">Tab</span>
        <span className="leading-[0]  mt-[-35px] ml-[20px] opacity-80">
          Sound
        </span>
        <span className="ml-[-77px] mt-[-41px]  opacity-70">To</span>
        <span className="leading-[0] mt-[-80px] ml-[190px]  opacity-60 ">
          Stems
        </span>
      </h1>
      <p className="pt-[100px] leading-6 pl-[460px] text-2xl absolute  opacity-80 ">
        Record any song or sound selecting the tab where <br /> is being played
        and get it separated by stems.
      </p>
    </div>
  );
};

export default Title;
