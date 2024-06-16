<script>
    import { onMount } from 'svelte';
    import { selectedZaznam } from '../../../lib/store.js';

    onMount(() => {
        console.log($selectedZaznam);
    });

    function ulozitDoStore() {
        console.log($selectedZaznam);
    }
</script>

<div class="bg-form">
    <h1>Edit záznamu</h1>
    <form method="POST" action="?/newZaznam">
        <div>
            <label for="kontrolovanaOsoba">Kontrolovaná osoba</label>
            <input type="text" id="kontrolovanaOsoba" name="kontrolovanaOsoba" bind:value={$selectedZaznam.kontrolovanaOsoba}>
        </div>

        <div>
            <label for="odbor">Odbor</label>
            <input type="text" id="odbor" name="odbor" bind:value={$selectedZaznam.odbor}>
        </div>

        <div>
            <label for="usek">Úsek (Oblast kontroly)</label>
            <input type="text" id="usek" name="usek" bind:value={$selectedZaznam.usek}>
        </div>

        <div>
            <label for="predmetKontroly">Předmět kontroly</label>
            <input type="text" id="predmetKontroly" name="predmetKontroly" bind:value={$selectedZaznam.predmetKontroly}>
        </div>

        <div>
            <label for="planovanyTermin">Plánovaný termín</label>
            <select id="planovanyTermin" bind:value={$selectedZaznam.planovanyTermin}>
                <option value="leden">Leden</option>
                <option value="unor">Únor</option>
                <option value="brezen">Březen</option>
                <option value="duben">Duben</option>
                <option value="kveten">Květen</option>
                <option value="cerven">Červen</option>
                <option value="cervenec">Červenec</option>
                <option value="srpen">Srpen</option>
                <option value="zari">Září</option>
                <option value="rijen">Říjen</option>
                <option value="listopad">Listopad</option>
                <option value="prosinec">Prosinec</option>
            </select>
        </div>

        <div>
            <label for="povereniKeKontrole">Pověření ke kontrole</label>
            <input type="text" id="povereniKeKontrole" name="povereniKeKontrole" bind:value={$selectedZaznam.povereniKeKontrole}>
        </div>

        <div>
            <label for="ustanoveni">Ustanoveni</label>
            <input type="text" id="ustanoveni" name="ustanoveni" bind:value={$selectedZaznam.ustanoveni}>
        </div>

        <div>
            <label for="vedouci">Vedouci</label>
            <input type="text" id="vedouci" name="vedouci" bind:value={$selectedZaznam.vedouci}>
        </div>

        <div>
            <label for="clen">Člen</label>
            <input type="text" id="clen" name="clen" bind:value={$selectedZaznam.clen}>
        </div>

        <div>
            <label for="kontrolovaneObdobi">Kontrolované období</label>
            <input type="date" bind:value={$selectedZaznam.kontrolovaneObdobi}>
            <span>-</span>
            <input type="date" bind:value={$selectedZaznam.kontrolovaneObdobi}>
        </div>

        <!-- <>Uložit</button> -->
        <div on:click={() => ulozitDoStore()}><a href="../table/">Uložit</a></div>
    </form>
</div>