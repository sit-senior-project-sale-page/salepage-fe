export default class AlertOption {
  success(messages: {
    title?: string;
    titleText?: string;
    text?: string;
    [key: string]: any;
  }): any {
    messages.title = messages.title || 'สำเร็จ';
    return {
      icon: 'success',
      timer: 2000,
      timerProgressBar: true,
      confirmButtonText: 'รับทราบ',
      ...messages,
    };
  }

  error(messages: {
    title?: string;
    titleText?: string;
    text?: string;
    [key: string]: any;
  }): any {
    messages.title = messages.title || 'ผิดผลาด';
    return {
      icon: 'error',
      confirmButtonText: 'รับทราบ',
      ...messages,
    };
  }

  warn(messages: {
    title?: string;
    titleText?: string;
    text?: string;
    [key: string]: any;
  }): any {
    messages.title = messages.title || 'คำเตือน';
    return {
      icon: 'warning',
      confirmButtonText: 'รับทราบ',
      ...messages,
    };
  }

  question(messages: {
    title?: string;
    titleText?: string;
    text?: string;
    [key: string]: any;
  }): any {
    messages.title = messages.title || 'คุณแน่ใจหรือไม่';
    return {
      icon: 'question',
      ...messages,
    };
  }

  info(messages: {
    title?: string;
    titleText?: string;
    text?: string;
    [key: string]: any;
  }): any {
    messages.title = messages.title || 'แจ้งให้ทราบ';
    return {
      icon: 'info',
      ...messages,
    };
  }
}
