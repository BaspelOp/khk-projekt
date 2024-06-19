<script>
    import { base } from "$app/paths";
</script>

<svelte:head>
    <title>Plán kontrol</title>
</svelte:head>

<nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary">
    <div class="container">
        <a class="navbar-brand" href="/">Plán kontrol</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/table"
                        ><i class="bi bi-list"></i> Seznam kontrol</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/table/newRecord"
                        ><i class="bi bi-plus-circle"></i> Nový záznam</a
                    >
                </li>
            </ul>
        </div>
    </div>
</nav>
<div class="container my-3">
    <slot />
</div>
