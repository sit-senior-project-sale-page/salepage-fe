import { Context } from '@nuxt/types';
import moment from 'moment';
import AlertOption from './AlertOption';
import ValidatorHelper from './Validator';

export default class Helper {
  private context: Context;
  readonly swalOptions: AlertOption;
  readonly validator: ValidatorHelper;
  constructor(context: Context) {
    this.context = context;
    this.swalOptions = new AlertOption();
    this.validator = new ValidatorHelper();
  }

  numberLocaleEn(num: number) {
    return Number(num).toLocaleString('en', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  numberWithCommas(x: number) {
    if (!x && x !== 0) return '';
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  accountNumberString(accountNumber: string) {
    if (!accountNumber) return '';
    const onlyNumbers = accountNumber;
    let stringFormat = onlyNumbers;
    if (stringFormat.length > 9) {
      stringFormat = `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(
        3,
        4
      )}-${onlyNumbers.slice(4, 9)}-${onlyNumbers.slice(9)}`;
    } else if (stringFormat.length > 4) {
      stringFormat = `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(
        3,
        4
      )}-${onlyNumbers.slice(4)}`;
    } else if (stringFormat.length > 3) {
      stringFormat = `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(3)}`;
    }
    return stringFormat;
  }

  getCookie(cname: string) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  getThaiMonth(month: number | string) {
    if (typeof month === 'number') month = month.toString();
    switch (month) {
      case '01':
        return 'ม.ค.';
      case '02':
        return 'ก.พ.';
      case '03':
        return 'มี.ค.';
      case '04':
        return 'เม.ย.';
      case '05':
        return 'พ.ค.';
      case '06':
        return 'มิ.ย.';
      case '07':
        return 'ก.ค.';
      case '08':
        return 'ส.ค.';
      case '09':
        return 'ก.ย.';
      case '10':
        return 'ต.ค.';
      case '11':
        return 'พ.ย.';
      case '12':
        return 'ธ.ค.';
    }
  }

  getThaiDateTime = (date: string) => {
    return ` ${moment(date).format('DD')} ${this.getThaiMonth(
      moment(date).format('MM')
    )} ${moment(date).add(543, 'years').format('YYYY')} ${moment(date).format(
      'HH:mm'
    )} `;
  };

  getThaiDate = (date: string) => {
    return ` ${moment(date).format('DD')} ${this.getThaiMonth(
      moment(date).format('MM')
    )} ${moment(date).add(543, 'years').format('YYYY')}`;
  };

  timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

}
