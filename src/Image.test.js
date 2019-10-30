import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Image from './components/Image';

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
    title: "",
    pathalias: "",
    id: "123456", 
    url_s: ""
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeData)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<Image item="123" />, container);
  });

  expect(container.querySelector(".image").textContent).toContain(fakeData.pathalias);
  expect(container.querySelector(".image a").textContent).toContain(fakeData.title);
  expect(container.querySelector(".image a").textContent).toContain(fakeData.url_s);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});

