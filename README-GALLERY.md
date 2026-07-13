# Project SINAG Gallery Slideshow Guide

The gallery section is now controlled in `script.js` using the `barangayAlbums` array.

## Add more photos to an existing barangay

1. Copy your new photo into a folder inside `assets/gallery/`.

Example for Barangay Malabanias:

```text
assets/gallery/malabanias/malabanias-05.jpg
```

2. Open `script.js`.
3. Find `const barangayAlbums = [`.
4. Find the barangay you want to update.
5. Add another photo object inside `photos: []`.

Example:

```js
{
  src: "assets/gallery/malabanias/malabanias-05.jpg",
  alt: "Project SINAG volunteers during the Barangay Malabanias activity",
  caption: "Volunteer action and community participation",
},
```

## Add a new barangay slideshow

Copy this whole block and paste it inside the `barangayAlbums` array:

```js
{
  barangay: "Barangay Example",
  activity: "Bayanihan Clean-Up Drive",
  description: "Short description of the activity in this barangay.",
  photos: [
    {
      src: "assets/gallery/example/example-01.jpg",
      alt: "Project SINAG activity in Barangay Example",
      caption: "Community activity caption",
    },
    {
      src: "assets/gallery/example/example-02.jpg",
      alt: "Volunteers participating in Project SINAG in Barangay Example",
      caption: "Volunteer engagement",
    },
  ],
},
```

## Important notes

- Use lowercase folder names with no spaces, for example `malabanias`, `pandan`, or `ninoy-aquino`.
- Keep file names simple, for example `malabanias-01.jpg`, `malabanias-02.jpg`.
- The slideshow automatically appears when the barangay has 2 or more photos.
- One photo still works, but it will show as a normal gallery card without arrows.
- After editing, commit and push to GitHub, then Vercel will redeploy.
