//service
import { fetchService } from "../../../services/fetchService";
import { inpuChangeHandler } from "../../../services/inputService";
import { emailValidator } from "../../../services/validationService";
//constant
import { CONST } from "../../../constant";

export const subscribeChangeHandler = (
  e,
  setEmailValidation,
  setEmailValue
) => {
  let value = inpuChangeHandler(e);
  setEmailValue(value);
  let isCorrectEmail = emailValidator(value);
  setEmailValidation(isCorrectEmail);
};

export const onClickSubscribeHandler = async (
  emailValue,
  setEmailValue,
  setEmailValidation
) => {
  let isCorrectEmail = emailValidator(emailValue);
  if (isCorrectEmail) {
    let url = process.env.BASE_URL + process.env.PATH.NEWSLETTER;
    let body = { NewsletterEmail: emailValue };
    let response = await fetchService(url, CONST.API_METHOD.POST, body);
    if (response.id) {
      alert(`Success ${response.NewsletterEmail}`);
      setEmailValue("");
      setEmailValidation(0);
    } else alert("Sorry! Something went wrong.");
  } else alert("Enter correct Email!!!");
};
