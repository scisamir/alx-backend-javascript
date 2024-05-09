import signUpUser from './4-user-promise';
import uploadUser from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName),
  uploadUser(filename)])
    .then((result) => result);
}
