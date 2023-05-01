<script lang="ts">
  import Toolbar from './lib/Toolbar.svelte';
  import { css, theme } from './stitches.config';

  const container = css({
    width: '100vw',
    height: '100vh',
    backgroundColor: theme.colors.appBackground1,
    display: 'flex',
    flexDirection: 'column',
  });
</script>

<div class={container()}>
  <Toolbar />
</div>
