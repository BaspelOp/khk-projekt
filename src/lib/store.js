import { writable } from "svelte/store";

export const zaznamy = writable([
    {
        kontrolovanaOsoba: "Janko Hraško",
        odbor: "MSZ",
        usek: "Venkovní věci",
        predmetKontroly: "Sus týpek",
        planovanyTermin: "Březen",
    },
]);

export const selectedZaznam = writable({});