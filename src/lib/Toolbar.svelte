<script lang="ts">
  import { css } from '@stitches/core';
  import logo from '../assets/logo.svg';
  import { theme } from '../stitches.config';
  import SearchBar from './SearchBar.svelte';

  const container = css({
    backgroundColor: theme.colors.appBackground2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spaces.paddingRegular,
    borderBottom: theme.borderStyles.nonInteractive,
  });
  const links = css({
    display: 'flex',
    gap: theme.spaces.gapUnrelatedMajor,
  });
  const link = css({
    fontSize: theme.fontSizes.paragraph,
    textDecoration: 'none',

    variants: {
      selected: {
        true: { color: theme.colors.textHighContrast },
        false: {
          color: theme.colors.textLowContrast,

          '&:hover': {
            color: theme.colors.textHighContrast,
            textDecoration: 'underline',
          },
        },
      },
    },

    defaultVariants: {
      selected: false,
    },
  });
</script>

<div class={container()}>
  <img alt="logo" src={logo} id="logo" />
  <SearchBar />
  <div class={links()}>
    <a class={link()} href="/">Home</a>
    <span class={link({ selected: true })}>Projects</span>
  </div>
</div>

<style>
  #logo {
    width: 2rem;
    height: 2rem;
  }
</style>
