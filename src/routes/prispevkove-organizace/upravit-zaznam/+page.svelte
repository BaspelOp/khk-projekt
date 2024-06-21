<script>
    import { onMount } from "svelte";
    import { selectedZaznam } from "$lib/store.js";

    onMount(() => {
        console.log($selectedZaznam);
    });

    function ulozitDoStore() {
        console.log($selectedZaznam);
    }
</script>

<svelte:head>
    <title>Upravení záznamu - Plán kontrol</title>
</svelte:head>

<h1>Upravení záznamu</h1>
<form method="POST" action="?/novy-zaznam">
    <div class="form-floating my-3">
        <input
            type="text"
            id="spisovaZn"
            name="spisovaZn"
            class="form-control"
            placeholder="Spisová značka"
            bind:value={$selectedZaznam.spisovaZn}
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
            bind:value={$selectedZaznam.kontrolovanaOsoba}
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
            bind:value={$selectedZaznam.odbor}
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
            bind:value={$selectedZaznam.usek}
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
            bind:value={$selectedZaznam.predmetKontroly}
        />
        <label for="predmetKontroly">Předmět kontroly</label>
    </div>

    <div class="form-floating my-3">
        <select
            id="planovanyTermin"
            class="form-select"
            bind:value={$selectedZaznam.planovanyTermin}
        >
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
            bind:value={$selectedZaznam.povereniKeKontrole}
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
            bind:value={$selectedZaznam.ustanoveni}
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
            bind:value={$selectedZaznam.vedouci}
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
            bind:value={$selectedZaznam.clen}
        />
        <label for="clen">Člen</label>
    </div>

    <div class="input-group my-3">
        <span class="input-group-text">Kontrolované období:</span>
        <input
            type="date"
            class="form-control"
            bind:value={$selectedZaznam.kontrolovaneObdobi}
        />
        <span class="input-group-text">-</span>
        <input
            type="date"
            class="form-control"
            bind:value={$selectedZaznam.kontrolovaneObdobi}
        />
    </div>

    <!-- <>Uložit</button> -->
    <a href="/prispevkove-organizace">
        <button
            class="btn btn-outline-primary"
            on:click={() => ulozitDoStore()}
        >
            <i class="bi bi-floppy"></i> Uložit
        </button>
    </a>
</form>
