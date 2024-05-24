import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home component", () => {
  it("renders Home component with buttons", () => {
    render(<Home />);

    expect(screen.getByText("Stop")).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /Começar um novo jogo/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Entrar em um jogo/i }),
    ).toBeInTheDocument();
  });

  it("links point to correct hrefs", () => {
    render(<Home />);

    expect(
      screen.getByRole("link", { name: /Começar um novo jogo/i }),
    ).toHaveAttribute("href", "/new-game");

    expect(
      screen.getByRole("link", { name: /Entrar em um jogo/i }),
    ).toHaveAttribute("href", "/join");
  });
});
