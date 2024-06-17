<script>
    import { zaznamy, selectedZaznam } from "../../lib/store.js";
    import fs from "fs";

    async function doPost(zaznam) {
        const res = await fetch("table", {
            method: "POST",
            body: JSON.stringify(zaznam),
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log(res);

        if (res.ok) {
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "report.docx");
            document.body.appendChild(link);
            link.click();
            link.remove();
        } else {
            console.error("Server response was not ok.");
        }
    }

    function editRow(zaznam) {
        selectedZaznam.set(zaznam);
        console.log($selectedZaznam);
    }
</script>

<svelte:head>
    <title>Seznam kontrol - Plán kontrol</title>
</svelte:head>

<h1>Seznam kontrol</h1>
<div class="table-responsive">
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>Kontrolovaná osoba</th>
                <th>Odbor</th>
                <th>Úsek (Oblast kontroly)</th>
                <th>Předmět kontroly</th>
                <th>Plánovaný termín</th>
                <th>Stáhnout</th>
                <th>Checkbox</th>
                <th>Upravit</th>
            </tr>
        </thead>
        <tbody class="table-group-divider">
            {#each $zaznamy as zaznam}
                <tr>
                    <td>{zaznam.kontrolovanaOsoba}</td>
                    <td>{zaznam.odbor}</td>
                    <td>{zaznam.usek}</td>
                    <td>{zaznam.predmetKontroly}</td>
                    <td>{zaznam.planovanyTermin}</td>
                    <td>
                        <div class="d-grid gap-2">
                            <button
                                class="btn btn-outline-primary"
                                on:click={() => doPost(zaznam)}
                                ><i class="bi bi-download"></i> Pověření ke kontrole</button
                            >
                            <button class="btn btn-outline-primary"
                                ><i class="bi bi-download"></i> Oznámení o zahájení
                                kontroly</button
                            >
                            <button class="btn btn-outline-primary"
                                ><i class="bi bi-download"></i> Protokol</button
                            >
                        </div>
                    </td>
                    <td>
                        <div class="form-check form-switch">
                            <input type="checkbox" class="form-check-input" />
                        </div>
                    </td>
                    <td>
                        <a href="table/editRecord">
                            <button
                                class="btn btn-outline-primary"
                                on:click={() => editRow(zaznam)}
                            >
                                <i class="bi bi-pencil-square"></i> Upravit
                            </button>
                        </a>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
