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

<h1>Plán kontrol u příspěvkových organizací</h1>

<a href="/table/newRecord">
    <button class="btn btn-outline-primary">
        <i class="bi bi-plus-circle"></i> Nový záznam
    </button>
</a>

<div class="table-responsive">
    <table class="table table-striped table-hover align-middle">
        <thead>
            <tr>
                <th>Kontrolovaná osoba</th>
                <th>Odbor</th>
                <th>Úsek (Oblast kontroly)</th>
                <th>Předmět kontroly</th>
                <th>Plánovaný termín</th>
                <th>Dokumenty</th>
                <th>Checkbox</th>
                <th>Upravit</th>
                <th>Smazat</th>
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
                        <div
                            class="btn-group-vertical"
                            role="group"
                            aria-label="Vertical button group"
                        >
                            <div class="btn-group dropend" role="group">
                                <button
                                    class="btn btn-outline-primary dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Pověření ke kontrole
                                </button>
                                <ul class="dropdown-menu">
                                    <li>
                                        <button
                                            class="dropdown-item"
                                            type="button"
                                        >
                                            <i class="bi bi-pencil-square"></i> Upravit
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            class="dropdown-item"
                                            type="button"
                                            on:click={() => doPost(zaznam)}
                                        >
                                            <i class="bi bi-download"></i> Stáhnout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="btn-group dropend" role="group">
                                <button
                                    class="btn btn-outline-primary dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Oznámení o zahájení
                                </button>
                                <ul class="dropdown-menu">
                                    <li>
                                        <button
                                            class="dropdown-item"
                                            type="button"
                                        >
                                            <i class="bi bi-pencil-square"></i> Upravit
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            class="dropdown-item"
                                            type="button"
                                        >
                                            <i class="bi bi-download"></i> Stáhnout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="btn-group dropend" role="group">
                                <button
                                    class="btn btn-outline-primary dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Protokol
                                </button>
                                <ul class="dropdown-menu">
                                    <li>
                                        <button
                                            class="dropdown-item"
                                            type="button"
                                        >
                                            <i class="bi bi-pencil-square"></i> Upravit
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            class="dropdown-item"
                                            type="button"
                                        >
                                            <i class="bi bi-download"></i> Stáhnout
                                        </button>
                                    </li>
                                </ul>
                            </div>
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
                                <i class="bi bi-pencil-square"></i>
                            </button>
                        </a>
                    </td>
                    <td>
                        <button class="btn btn-outline-danger">
                            <i class="bi bi-trash"></i>
                        </button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
