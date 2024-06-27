const PageDescription = () => {
  return (
    <div className="flex items-center justify-center   ">
      <div className="w-[65%] flex justify-center">
        <p className=" text-5xl  text-left  font-open max-w-[1100px]">
          This application sends the recording of a tab in your browser to an AI
          model, and returns the track separated into stems. It uses the
          Spleeter source separation library with <br /> pre-trained models. It
          is written in Python and utilizes TensorFlow.
        </p>
      </div>
    </div>
  );
};

export default PageDescription;
