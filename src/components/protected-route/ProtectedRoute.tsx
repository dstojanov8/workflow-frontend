import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../../store/store';

const ProtectedRoute = ({ redirectPath = '/login' }) => {
  const accountId  = useSelector((state: RootState) => state.account.accountInfo?.id);

  if (!accountId) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;