import { describe, it, expect } from "vitest";
import { getProducts } from "./notion";

describe("getProducts", () => {
    it("should return products", async () => {
        const products = await getProducts("", "20ea9451867480cd8217f6056bddbb6c");
        console.log(products);
        expect(products).toBeDefined();
    });
})