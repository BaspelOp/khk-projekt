<script>
    import { zaznamy, selectedZaznam } from '../../lib/store.js';
    import fs from 'fs';
    
    async function doPost(zaznam) {
        const res = await fetch('table', {
			method: 'POST',
            body: JSON.stringify(zaznam),
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            }
		})

        console.log(res);

        if (res.ok) {
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'report.docx');
            document.body.appendChild(link);
            link.click();
            link.remove();
        } else {
            console.error('Server response was not ok.');
        }
         
    }

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
                            <button  on:click={() => doPost(zaznam)}>Protokol</button>
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