<script>
    import { zaznamy } from '../../../lib/store.js';

    function vepsatDoStore() {
        zaznamy.update(n => [...n, {
            kontrolovanaOsoba: document.getElementById('kontrolovanaOsoba').value,
            odbor: document.getElementById('odbor').value,
            usek: document.getElementById('usek').value,
            predmetKontroly: document.getElementById('predmetKontroly').value,
            planovanyTermin: document.getElementById('planovanyTermin').value,
            povereniKeKontrole: document.getElementById('povereniKeKontrole').value,
            ustanoveni: document.getElementById('ustanoveni').value,
            vedouci: document.getElementById('vedouci').value,
            clen: document.getElementById('clen').value,
            spisovaZn: document.getElementById('spisovaZn').value,
        }]);

        console.log($zaznamy);
    }
    
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="bg-form">
    <h1>Nový záznam</h1>
    <form method="POST" action="?/newZaznam">
        
        <div>
            <label for="spisovaZn">Spisová značka</label>
            <input type="text" id="spisovaZn" name="spisovaZn">
        </div>

        <div>
            <label for="kontrolovanaOsoba">Kontrolovaná osoba</label>
            <input type="text" id="kontrolovanaOsoba" name="kontrolovanaOsoba">
        </div>

        <div>
            <label for="odbor">Odbor</label>
            <input type="text" id="odbor" name="odbor">
        </div>

        <div>
            <label for="usek">Úsek (Oblast kontroly)</label>
            <input type="text" id="usek" name="usek">
        </div>

        <div>
            <label for="predmetKontroly">Předmět kontroly</label>
            <input type="text" id="predmetKontroly" name="predmetKontroly">
        </div>

        <div>
            <label for="planovanyTermin">Plánovaný termín</label>
            <select id="planovanyTermin">
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
            <input type="text" id="povereniKeKontrole" name="povereniKeKontrole">
        </div>

        <div>
            <label for="ustanoveni">Ustanoveni</label>
            <input type="text" id="ustanoveni" name="ustanoveni">
        </div>

        <div>
            <label for="vedouci">Vedouci</label>
            <input type="text" id="vedouci" name="vedouci">
        </div>

        <div>
            <label for="clen">Člen</label>
            <input type="text" id="clen" name="clen">
        </div>

        <div>
            <label for="kontrolovaneObdobi">Kontrolované období</label>
            <input type="date">
            <span>-</span>
            <input type="date">
        </div>

        <!-- <>Uložit</button> -->
        <div on:click={() => vepsatDoStore()}><a href="../../table">Uložit</a></div>
    </form>
</div>

<style>

</style>