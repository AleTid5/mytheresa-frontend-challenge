import { render as renderApp, fireEvent } from "../../utils/test-app.utils";

describe("Cinema Listings Tests", () => {
  beforeEach(() => {});

  test("should correctly render the sections by genre", () => {
    const { getByText } = renderApp();

    getByText(/science fiction/i);
    getByText(/comedy/i);
    getByText(/western/i);
  });
});
