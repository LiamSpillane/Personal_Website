<script>
    import Navbar from "../lib/navbar.svelte";
</script>

<Navbar />
<main>
    <slot></slot>
</main>
<footer>
    <p>Copyright 2024 Liam Spillane</p>
</footer>

<style>
    main {
        color: white;
        padding: 0px 20px;
    }

    footer {
        text-align: center;
        color: rgba(255, 255, 255, 0.4);
    }
</style>