import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Greeting from "./Greeting";

Enzyme.configure({ adapter: new Adapter() });

describe("greeting", () => {
  it("should print the passed in message", () => {
    const message = "Everything is awesome!";
    const greetingComponent = shallow(<Greeting message={message} />);

    expect(greetingComponent.find("h1").text()).toBe(message);
  });
});