<div align="center">

# mblode.github.io

**A static redirect sending every request from the old GitHub Pages site to blode.co**

Two 454-byte HTML files, both pointing at the same place, so nothing that ever linked here goes dead.

</div>

## Demo

[mblode.github.io](https://mblode.github.io/) redirects to [blode.co](https://blode.co).

## How it works

- **`index.html`** carries a canonical link, a `meta http-equiv="refresh"` at 0 seconds, and a `location.replace` for browsers that get there first.
- **`404.html`** is byte-identical, so a deep link to any old path lands on the new site rather than a Pages error page.
- **`.nojekyll`** is present, so Pages serves the files as they are instead of running them through Jekyll.

There is nothing to install and nothing to build. The site that used to live here is now at [blode.co](https://blode.co).

## License

MIT

---

Crafted by [<img src="https://blode.co/avatar-circle.png" width="20" align="top" />](https://blode.co) [Matthew Blode](https://blode.co)
