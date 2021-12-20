import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <>
      <Loader
        type="ThreeDots"
        color="#00000"
        height={50}
        width={50}
        timeout={2300}
      />
    </>
  );
};
export default Spinner;
