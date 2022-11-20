import Loader from "react-loader-spinner";

const AppLoader = () => {
  return (
    <div className="w-100 vh-100 d-flex align-items-center justify-content-center">
      <Loader type="TailSpin" color="#0000dd" width={50} height={50} />
    </div>
  );
};

export default AppLoader;
