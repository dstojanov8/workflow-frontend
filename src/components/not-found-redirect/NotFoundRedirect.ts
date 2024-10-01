import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // or your custom hook for auth
import { RootState } from '../../store/store';

const NotFoundRedirect = () => {
  const navigate = useNavigate();
  const userId = useSelector((state: RootState) => state.account.id);

  useEffect(() => {
    if (userId) {
      navigate('/'); // Redirect to home page if authenticated
    } else {
      navigate('/login'); // Redirect to login page if not authenticated
    }
  }, [userId, navigate]);

  return null; // No UI since it's just a redirect
};

export default NotFoundRedirect;