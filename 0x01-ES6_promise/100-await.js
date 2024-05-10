import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const upResp = await uploadPhoto();
    const cuResp = await createUser();

    return {
      photo: upResp,
      user: cuResp,
    };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
