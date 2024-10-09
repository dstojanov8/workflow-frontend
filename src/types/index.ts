export interface RegistrationInfo {
  email: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
}

export interface LoginInfo {
  usernameOrEmail: string;
  password: string;
}

export interface AccountInfo {
  id: number;
  email: string;
  username: string;
  firstname: string;
  lastname: string;
}

export interface AccountState {
  accountInfo: AccountInfo | null;
  loading: boolean;
  userToken: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  success: boolean;
}

export interface PersonInfo {
  id: number;
  firstname: string;
  lastname: string;
  firstparent_id: number | null;
  secondparent_id: number | null;
}

export interface PersonInfoFullNames extends PersonInfo {
  firstParentFullName: string | null;
  secondtParentFullName: string | null;
}
