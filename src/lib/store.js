import { writable } from "svelte/store";

export const zaznamy = writable([
    {
        kontrolovanaOsoba: 'Miloš Frontman, U Starosty 456, Domanín',
        odbor: 'MSZ',
        usek: 'Venkovní věci',
        predmetKontroly: 'kotel podle zákona § 1 odst. 5 zákona č. 892/2013 Sb.',
        planovanyTermin: 'srpen',
        spisovaZn: 'KUKHK-52/654/2023',
        povereniKeKontrole: 'č.564/2023',
        ustanoveni: '§ 6 odst. 1 zákona č. 298/2014 Sb.',
        vedouci: 'Lubomír Voral, ev. č. 4659 - vedoucí kontrolní skupiny',
        clen: 'Zdeněk Týn, ev. č. 899 - člen kontrolní skupiny',
        datum: '23.9.2023',
        kontrolovaneObdobi: '1.1.2012 - 30.12.2015'
    },
]);

export const selectedZaznam = writable({});