<script>
    import SocialLinks from './socialLinks.svelte';
</script>

<div class="navbar">
    <a href="/"><div class="link">Home</div></a>
    <a href="/projects"><div class="link">Projects</div></a>
    <a href="/resume"><div class="link">Resume</div></a>
    <SocialLinks />
</div>

<style>
    .navbar {
        display: grid;
        grid-template-columns: 10% 10% 10% auto;
        background: rgb(34, 32, 39);
    }

    a {
        height: 100%;
        color: white;
        text-decoration: none;
    }

    .link {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .link:hover {
        background: rgb(20, 20, 22);
    }
</style>