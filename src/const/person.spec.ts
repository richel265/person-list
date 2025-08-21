import { Person } from "./person";

describe("Person", () => {
  it("should create a person", () => {
    expect(new Person()).toBeTruthy();
  });
});
