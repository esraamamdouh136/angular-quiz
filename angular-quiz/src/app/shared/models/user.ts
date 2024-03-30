export interface User {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  userInfo: UserInfo[];
}
export interface UserInfo {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}
