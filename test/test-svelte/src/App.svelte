<script lang="ts">
import { IconHeart, IconHeartFilled, IconMoodSmile } from '@tabler/icons-svelte';
let active = false;
</script>

<main>
  <a on:click="{() => active = !active}">
    {#if active }
      <IconHeartFilled size={48} />
    {:else}
      <IconHeart size={48} />
    {/if}
  </a>
  <IconMoodSmile size={48} strokeWidth={1} />
</main>

