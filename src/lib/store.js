import { writable } from "svelte/store";

export const zaznamy = writable([
    {
        kontrolovanaOsoba: 'Janko Hraško',
        odbor: 'MSZ',
        usek: 'Venkovní věci',
        predmetKontroly: 'Sus týpek',
        planovanyTermin: 'srpen',
        spisovaZn: 'sdfsd',
        povereniKeKontrole: 'sdf',
        ustanoveni: 'sdf',
        vedouci: 'sdf',
        clen: 'sdf',
        datum: 'Invalid Date',
        kontrolovaneObdobi: 'Invalid Date'
    },
]);

export const selectedZaznam = writable({});