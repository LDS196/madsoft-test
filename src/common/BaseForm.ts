export class BaseForm {
  constructor(props?: any) {
    this.load(props);
  }

  getAttributes(): string[] {
    return Object.keys(this);
  }

  load(data: any): void {
    const attributes = this.getAttributes();

    for (let i = 0; i < attributes.length; i++) {
      // eslint-disable-next-line no-prototype-builtins
      if (data && data.hasOwnProperty(attributes[i])) {
        this[attributes[i] as keyof this] = data[attributes[i]];
      }
    }
  }

  setValue<T>(key: keyof T, value: any): void {
    if (typeof (this as any)[key] !== 'function') {
      (this as any)[key] = value;
    }
  }

  setValues(props: any) {
    this.load(props);
  }

  static create(props?: any): any {
    return new this(props);
  }
}
