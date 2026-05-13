export type NavLink = {
  label: string;
  href: string;
};

export type ApiResponse<T = null> =
  | { success: true; data: T }
  | { success: false; error: string };
