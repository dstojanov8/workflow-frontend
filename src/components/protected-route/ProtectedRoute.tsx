import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { logoutUser } from '../../store/account/accountSlice';

const isTokenExpired = (token: string) => {
  const decodedToken = jwtDecode(token);
  const currentTime = Date.now() / 1000; // in seconds
  return decodedToken.exp! < currentTime;
};


const ProtectedRoute = ({ redirectPath = '/login' }) => {
  const accountId  = useSelector((state: RootState) => state.account.accountInfo?.id);
  const token = localStorage.getItem('userToken');

  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  useEffect(() => {
      if (token && isTokenExpired(token)) {
          dispatch(logoutUser());
          navigate('/login');
      }
  }); //* No dependency array as to run on every rerender.

  if (!accountId) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;