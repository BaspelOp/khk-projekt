<script>
    import { page } from "$app/stores";
</script>

<div class="alert alert-danger" role="alert">
    <h1>
        <i class="bi bi-exclamation-octagon-fill"></i>
        {$page.status}: {$page.error.message}
    </h1>
</div>
