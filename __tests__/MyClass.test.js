import { MyClass } from "../MyCrud";

describe("MyClass", () => {
  test("It has a static name", () => {
    expect(MyClass.displayName).toBe("MyClass");
  });

  test("It exists", () => {
    const klass = new MyClass();
    expect(klass).toBeTruthy();
  });

  test("Class properties are a thing", () => {
    const klass = new MyClass();
    expect(klass.classProp).toBe("dogs");
  });

  test("Functions declared with fat arrows work", () => {
    const klass = new MyClass();
    const wat = klass.fatMeth();
    expect(wat).toBe("dogs are cool");
  });
});
