import signUpUser from './4-user-promise';
import uploadUser from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName),
      uploadUser(filename)])
    .then((result) => {
      const resArray = [];
      console.log(result);

      result.forEach((res) => {
        if (Object.keys(res)[1] !== 'reason') {
	  resArray.push({ status: res.status, value: res.value });
	} else {
	  resArray.push({ status: res.status, value: `${res.reason}` });
	}
      });
      console.log(resArray);
      return resArray;
    });
}
