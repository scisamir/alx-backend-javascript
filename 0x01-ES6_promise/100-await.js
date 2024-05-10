import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  try {
    const upResp = await uploadPhoto();
    const cuResp = await createUser();

    console.log(upResp, cuResp);

    return {
      photo: upResp,
      user: cuResp,
    };
  } catch(err) {
    return {
      photo: null,
      user: null,
    };
  }
}
