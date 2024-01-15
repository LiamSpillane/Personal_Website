<script>
    import Navbar from "../lib/navbar.svelte";
</script>

<main>
    <Navbar />
    <slot></slot>
</main>
<footer>
    <p>Copyright 2024 Liam Spillane</p>
</footer>

<style>
    footer {
        text-align: center;
        color: rgba(0, 0, 0, 0.4);
    }
</style>