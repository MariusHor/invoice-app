interface RolesList {
    Admin: Admin;
    User: User;
}

export type Admin = 5150;
export type User = 2001;

export const ROLES_LIST: RolesList = {
    Admin: 5150,
    User: 2001,
};
