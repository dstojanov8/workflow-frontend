import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { NavbarContainer, Logo, NavLinks, NavLink } from './Navbar.styled';
import { logoutUser } from '../../store/account/accountSlice';
import { persistor, RootState } from '../../store/store';

const Navbar = () => {

  const accountId  = useSelector((state: RootState) => state.account.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // There is an issue, to reproduce do:
    // logout -> login -> refresh
    // expected result: stay on homepage
    // what happens: redirected to login
    // Reason: missing persist:persist_account key in localstorage
    //
    // persistor.purge(); completely removes this key and it is not
    // generated on login so on refresh app checks if there is an id in 
    // redux localstorage. Since there is no pesist key (redux state wont persist)
    // and it is as no one is logged in so the app redirects to login.
    //
    // Some solutions include adding persist.flush() to login function
    persistor.pause();
    dispatch(logoutUser());
    persistor.purge();
    navigate('/login');
  };

  return (
    <NavbarContainer>
      <Logo>MyApp</Logo>
      <NavLinks>
        {accountId ? 
          (
            <>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/my-users">My Users</NavLink>
              <NavLink to="/add-user">Add User</NavLink>
              <NavLink to="#" onClick={handleLogout} >Logout</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )
        }
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;