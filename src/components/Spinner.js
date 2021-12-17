import Loader from "react-loader-spinner";
import React from 'react';

const Spinner = () => {
  return (
    <Loader
      type="TailSpin"
      color="rgba(48, 48, 48, 0.377)"
      height={40}
      width={100}
      timeout={5000}
    />
  );
};

export default Spinner;