import _ from "lodash";
import { ValidationState } from "~/types/types";

export default class ValidatorHelper {
  checkValidateAll(validationState: ValidationState) {
    let allValid = true;
    _.forIn(validationState, (value) => {
      allValid = allValid && value.validated;
    });
    return allValid;
  }

  validate(
    validationState: ValidationState,
    data: any,
    key: string,
    veeValid: boolean
  ) {
    if (!validationState[key]) {
      console.error('[validate] there is no key named ' + key);
      return { validationState, isAllValid: false };
    }
    let customConditionValid = true;
    const customValidator = validationState[key].validator;
    if (customValidator) customConditionValid = customValidator(data[key]);
    validationState[key].validated = customConditionValid && veeValid;
    const isAllValid = this.checkValidateAll(validationState);
    return { validationState, isAllValid };
  }
}
