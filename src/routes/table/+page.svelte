<script>
    import { zaznamy, selectedZaznam } from '../../lib/store.js';
    
    function editRow(zaznam) {
        selectedZaznam.set(zaznam);
        console.log($selectedZaznam);
    }
</script>

<div class="container">
    <div><a href="table/newRecord">Nový záznam</a></div>
    <div class="bg-table">
        <h1>Seznam kontrol</h1>
        <table>
            <thead>
                <tr>
                    <th>Kontrolovaná osoba</th>
                    <th>Odbor</th>
                    <th>Úsek (Oblast kontroly)</th>
                    <th>Předmět kontroly</th>
                    <th>Plánovaný termín</th>
                    <th>Tlačítka</th>
                    <th>Checkbox</th>
                </tr>
            </thead>
            <tbody>
                {#each $zaznamy as zaznam}
                    <tr>
                        <td>{zaznam.kontrolovanaOsoba}</td>
                        <td>{zaznam.odbor}</td>
                        <td>{zaznam.usek}</td>
                        <td>{zaznam.predmetKontroly}</td>
                        <td>{zaznam.planovanyTermin}</td>
                        <td>
                            <button>Protokol</button>
                            <button>Protokol</button>
                            <button>Protokol</button>
                        </td>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>
                            <div on:click={() => editRow(zaznam)}>
                                <a href="table/editRecord">Edit</a>
                            </div>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
    
</div>

<style>

</style>