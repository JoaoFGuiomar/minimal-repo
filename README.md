### Description

Minimal reproducible repo for what seems to be a `@linaria/vite` bug.

### What is this?
This is a Monorepo create with `rush`

We created 2 simple packages
- `app` - has Vite and the `App.tsx` which imports from `components`
- `components` - a simple package with a single Button component

Button is styled using Linaria both `css` and `styled` but this doesn't seem to be relevant to the bug itself


### How to set it up

Make sure you have `rush` installed
```
    npm install -g @microsoft/rush
```

Steps:
- `rush install`
- `rush update`
- `cd packages/app` 
- `rushx watch`

This should install dependencies, build and run Vite in watch mode.

#### How to reproduce the bug

Go to `Button.styles.tsx` and change, for example, the button font-size.
- Try different sizes (all diferent) and save
- Then try sizes you already added before and save
- You should see the styles didn't update on the page


If you check the DOM, you can see a list of  `<style>` elements in the `<head>` element with the old styles
These `<style>` element should not exist, it shoudl be a single element for the Button component with the most recent
styles applied.


⚠️ This only seems to happen to imported components. ⚠️ 
The "Dotted" styled component in the "App.tsx" file updates fine if we change its values.

#### Video

Quick video with the issue being demonstrated
[Video preview](https://www.dropbox.com/s/ktx8nhdpvl0t0na/Bug%20Video.mov?dl=0)
