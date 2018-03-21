import React from "react";
import Todo from "./Todo";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const sampleName = "Hola!";

function setup() {
  const props = {
    todo: { name: sampleName }
  };

  const enzymeWrapper = mount(<Todo {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe("components", () => {
  describe("Todo", () => {
    it("should render and show the name in Typography", () => {
      const { enzymeWrapper, props } = setup();
      expect(enzymeWrapper.find("Card").exists()).toBe(true);
      expect(enzymeWrapper.find("CardContent").exists()).toBe(true);
      expect(enzymeWrapper.find("Typography").exists()).toBe(true);

      expect(enzymeWrapper.find("Typography").text()).toBe(sampleName);
      expect(enzymeWrapper.find("Typography").props().variant).toBe("headline");
      expect(enzymeWrapper.find("Typography").props().component).toBe("h4");
    });
  });
});
