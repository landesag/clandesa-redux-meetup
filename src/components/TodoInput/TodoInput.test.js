import React from "react";
import { TodoInput } from "./TodoInput";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    addTodo: jest.fn(),
    requestTodos: jest.fn()
  };

  const enzymeWrapper = mount(<TodoInput {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe("components", () => {
  describe("TodoInput", () => {
    it("should render and show three buttons", () => {
      const { enzymeWrapper, props } = setup();
      let buttons = enzymeWrapper.find("Button");
      expect(buttons.length).toBe(3);
    });
    it("should call addTodo on click on the first Button", () => {
      const { enzymeWrapper, props } = setup();
      let buttons = enzymeWrapper.find("Button");
      buttons.at(0).simulate("click");
      expect(props.addTodo.mock.calls.length).toBe(1);
      expect(props.requestTodos.mock.calls.length).toBe(0);
    });
  });
});
