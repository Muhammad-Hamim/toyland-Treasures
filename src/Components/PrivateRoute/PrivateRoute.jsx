import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen z-50">
        <ThreeCircles
          height="100"
          width="100"
          color="#570df8"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate state={{from:location}} to='/login' replace></Navigate>
  );
};

export default PrivateRoute;