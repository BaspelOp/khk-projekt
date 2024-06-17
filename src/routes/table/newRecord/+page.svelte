<script>
    import { zaznamy } from "../../../lib/store.js";

    function vepsatDoStore() {
        zaznamy.update((n) => [
            ...n,
            {
                kontrolovanaOsoba:
                    document.getElementById("kontrolovanaOsoba").value,
                odbor: document.getElementById("odbor").value,
                usek: document.getElementById("usek").value,
                predmetKontroly:
                    document.getElementById("predmetKontroly").value,
                planovanyTermin:
                    document.getElementById("planovanyTermin").value,
                povereniKeKontrole:
                    document.getElementById("povereniKeKontrole").value,
                ustanoveni: document.getElementById("ustanoveni").value,
                vedouci: document.getElementById("vedouci").value,
                clen: document.getElementById("clen").value,
                spisovaZn: document.getElementById("spisovaZn").value,
            },
        ]);

        console.log($zaznamy);
    }
</script>

<svelte:head>
    <title>Nový záznam - Plán kontrol</title>
</svelte:head>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<h1>Nový záznam</h1>
<form method="POST" action="?/newZaznam">
    <div class="form-floating my-3">
        <input
            type="text"
            id="spisovaZn"
            name="spisovaZn"
            class="form-control"
            placeholder="Spisová značka"
        />
        <label for="spisovaZn">Spisová značka</label>
    </div>

    <div class="form-floating my-3">
        <input
            type="text"
            id="kontrolovanaOsoba"
            name="kontrolovanaOsoba"
            class="form-control"
            placeholder="Kontrolovaná osoba"
        />
        <label for="kontrolovanaOsoba">Kontrolovaná osoba</label>
    </div>

    <div class="form-floating my-3">
        <input
            type="text"
            id="odbor"
            name="odbor"
            class="form-control"
            placeholder="Odbor"
        />
        <label for="odbor">Odbor</label>
    </div>

    <div class="form-floating my-3">
        <input
            type="text"
            id="usek"
            name="usek"
            class="form-control"
            placeholder="Úsek (Oblast kontroly)"
        />
        <label for="usek">Úsek (Oblast kontroly)</label>
    </div>

    <div class="form-floating my-3">
        <input
            type="text"
            id="predmetKontroly"
            name="predmetKontroly"
            class="form-control"
            placeholder="Předmět kontroly"
        />
        <label for="predmetKontroly">Předmět kontroly</label>
    </div>

    <div class="form-floating my-3">
        <select id="planovanyTermin" class="form-select">
            <option value="" disabled selected>Vyberte měsíc</option>
            <option value="Leden">Leden</option>
            <option value="Únor">Únor</option>
            <option value="Březen">Březen</option>
            <option value="Duben">Duben</option>
            <option value="Květen">Květen</option>
            <option value="Červen">Červen</option>
            <option value="Červenec">Červenec</option>
            <option value="Srpen">Srpen</option>
            <option value="Září">Září</option>
            <option value="Říjen">Říjen</option>
            <option value="Listopad">Listopad</option>
            <option value="Prosinec">Prosinec</option>
        </select>
        <label for="planovanyTermin">Plánovaný termín</label>
    </div>

    <div class="form-floating my-3">
        <input
            type="text"
            id="povereniKeKontrole"
            name="povereniKeKontrole"
            class="form-control"
            placeholder="Pověření ke kontrole"
        />
        <label for="povereniKeKontrole">Pověření ke kontrole</label>
    </div>

    <div class="form-floating my-3">
        <input
            type="text"
            id="ustanoveni"
            name="ustanoveni"
            class="form-control"
            placeholder="Ustanovení"
        />
        <label for="ustanoveni">Ustanovení</label>
    </div>

    <div class="form-floating my-3">
        <input
            type="text"
            id="vedouci"
            name="vedouci"
            class="form-control"
            placeholder="Vedoucí"
        />
        <label for="vedouci">Vedoucí</label>
    </div>

    <div class="form-floating my-3">
        <input
            type="text"
            id="clen"
            name="clen"
            class="form-control"
            placeholder="Člen"
        />
        <label for="clen">Člen</label>
    </div>

    <div class="input-group my-3">
        <span class="input-group-text">Kontrolované období:</span>
        <input type="date" class="form-control" />
        <span class="input-group-text">-</span>
        <input type="date" class="form-control" />
    </div>

    <!-- <>Uložit</button> -->
    <a href="/table">
        <button
            class="btn btn-outline-primary"
            on:click={() => vepsatDoStore()}
        >
            <i class="bi bi-plus-circle"></i> Přidat
        </button>
    </a>
</form>
