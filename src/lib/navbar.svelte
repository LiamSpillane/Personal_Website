<script>
    import SocialLinks from './socialLinks.svelte';
</script>

<div class="navbar">
    <a href="/"><div class="link">Home</div></a>
    <a href="/projects"><div class="link">Projects</div></a>
    <a href="/resume"><div class="link">Resume</div></a>
    <div class="socials">
        <SocialLinks />
    </div>
</div>

<style>
    .navbar {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 7fr;
        background: rgb(52, 16, 145);
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
        background: rgb(43, 13, 122);
    }
</style>