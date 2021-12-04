export type AvatarModel = {
  id: string;
  src: string;
};

export type UserModel = {
  id: string;
  name: string;
  lastName: string;
  email: string;
  avatar?: string;
};
