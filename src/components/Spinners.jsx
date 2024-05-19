import { ClipLoader } from "react-spinners";
import React from "react";

interface SpinnerProps {
  loading: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
  return (
    <div className="spinner-container">
      <ClipLoader loading={loading} size={50} />
      <style jsx>{`
        .spinner-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default Spinner;
