const PageDescription = () => {
  return (
    <div className="flex items-center justify-center  pt-8 ">
      <div className="w-[65%] flex justify-center">
        <p className=" text-xl  text-center text-black font-open">
          This page allows you to record the incoming sound from any of your
          browser tabs, send the recording to an AI model, and receive the track
          separated into stems. It uses the Spleeter source separation library
          with pre-trained models written in Python and utilizes TensorFlow.
        </p>
      </div>
    </div>
  );
};

export default PageDescription;
