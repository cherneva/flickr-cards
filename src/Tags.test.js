import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Tags from './components/Tags';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders fake data", async () => {
  const fakeData = {
    tags: "" 
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeData)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<Tags item="123" />, container);
  });

  expect(container.querySelector(".tags-wrp").textContent).toContain(fakeData.tags);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});