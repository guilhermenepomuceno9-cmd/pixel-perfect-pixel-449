import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { CHECKOUT_URL } from "@/lib/checkout";
import { Route } from "@/routes/index";

const CAKTO = "https://pay.cakto.com.br/79kdnhr_882656";

describe("Purchase buttons", () => {
  it("sends every purchase button to the Cakto checkout in a new tab", () => {
    const Component = Route.options.component as React.ComponentType;
    render(<Component />);

    const purchaseButtons = screen
      .getAllByText(/QUERO ACESSAR|QUERO COMEÇAR/)
      .map((el) => el.closest("a") as HTMLAnchorElement)
      .filter((a) => a?.classList.contains("btn-cta"));

    expect(purchaseButtons.length).toBeGreaterThan(0);
    for (const button of purchaseButtons) {
      expect(button.href).toBe(CAKTO);
      expect(button.getAttribute("target")).toBe("_blank");
      expect(button.getAttribute("rel")).toContain("noopener");
    }
  });

  it("keeps the checkout url pointed at Cakto", () => {
    expect(CHECKOUT_URL).toBe(CAKTO);
  });
});
