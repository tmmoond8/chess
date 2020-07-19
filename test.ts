// function today(this: Date) {
//   console.log(`today is ${this.toUTCString()}`);
// }

class A extends Date {
  private name = "abc";
  today() {
    console.log(`today is ${this.name}`);
  }
}

const a = new A();
a.today();
