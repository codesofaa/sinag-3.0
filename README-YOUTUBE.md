# YouTube Embed Guide for Project SINAG

Recommended approach: **embed the YouTube video or playlist**, do not download/reupload it unless DILG/DEPDev has written permission or owns/controls all rights.

## Current embedded playlist

This website now uses YouTube privacy-enhanced mode:

```html
<iframe
  class="youtube-embed"
  src="https://www.youtube-nocookie.com/embed/videoseries?list=PL-H4d0Q3bfXfhoqgb5sNF2STHMl74_X_h"
  title="DEPDev YouTube resource playlist"
  loading="lazy"
  referrerpolicy="strict-origin-when-cross-origin"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>
```

## Embed only one video instead of the whole playlist

Replace the `src` with:

```html
src="https://www.youtube-nocookie.com/embed/NA0qLmQ_TLI"
```

## Embed another playlist

Get the playlist ID after `list=` from the YouTube URL, then use:

```html
src="https://www.youtube-nocookie.com/embed/videoseries?list=YOUR_PLAYLIST_ID"
```

## Why embed instead of download?

Embedding keeps the video on the official YouTube channel, preserves attribution, reduces website file size, and avoids reupload/copying issues. Downloading and hosting as an MP4 should only be done with written permission or a clear license.
