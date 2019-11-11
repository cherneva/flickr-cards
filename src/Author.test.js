import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Author from './components/Author';

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
    title: "Photo",
    owner: "by",
    id: "123456"
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeData)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<Author item="123" />, container);
  });

  expect(container.querySelector(".author").textContent).toContain(fakeData.owner);
  expect(container.querySelector(".author a").textContent).toContain(fakeData.title);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});

