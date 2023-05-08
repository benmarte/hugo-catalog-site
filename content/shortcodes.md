---
title: Shortcodes
weight: 3
---

## Grid Layout

Hugo Catalog uses a css grid based layout for the content area, the content area has a **max-width** of 960px wide. We use a css grid based layout composed of 6 column grid.

{{<column span="1" color="#999" align="center">}}
span = 1
{{</column>}}

{{<column span="1" color="#999" align="center">}}
span = 1
{{</column>}}

{{<column span="1" color="#999" align="center">}}
span = 1
{{</column>}}

{{<column span="1" color="#999" align="center">}}
span = 1
{{</column>}}

{{<column span="1" color="#999" align="center">}}
span = 1
{{</column>}}

{{<column span="1" color="#999" align="center">}}
span = 1
{{</column>}}

```html
{{</*column span="1" color="#999" align="center">}}span = 1{{</column*/>}}

{{</*column span="1" color="#999" align="center">}}span = 1{{</column*/>}}

{{</*column span="1" color="#999" align="center">}}span = 1{{</column*/>}}

{{</*column span="1" color="#999" align="center">}}span = 1{{</column*/>}}

{{</*column span="1" color="#999" align="center">}}span = 1{{</column*/>}}

{{</*column span="1" color="#999" align="center">}}span = 1{{</column*/>}}
```

You can compose rows of columns based on their **span** values. You can put any combination of span values as long as they add to 6, the grid is smart enough to accomadate them, here are some examples.

{{<column span="3" color="#999" align="center">}}
span = 3
{{</column>}}

{{<column span="3" color="#999" align="center">}}
span = 3
{{</column>}}

```html
{{</*column span="3" color="#999" align="center">}}span = 3{{</column*/>}}

{{</*column span="3" color="#999" align="center">}}span = 3{{</column*/>}}
```

{{<column span="2" color="#999" align="center">}}
span = 2
{{</column>}}

{{<column span="4" color="#999" align="center">}}
span = 4
{{</column>}}

```html
{{</*column span="2" color="#999" align="center">}}span = 2{{</column*/>}}

{{</*column span="4" color="#999" align="center">}}span = 4{{</column*/>}}
```


{{<column span="2" color="#999" align="center">}}
span = 2
{{</column>}}

{{<column span="2" color="#999" align="center">}}
span = 2
{{</column>}}

{{<column span="2" color="#999" align="center">}}
span = 2
{{</column>}}

```html
{{</*column span="2" color="#999" align="center">}}span = 2{{</column*/>}}

{{</*column span="2" color="#999" align="center">}}span = 2{{</column*/>}}

{{</*column span="2" color="#999" align="center">}}span = 2{{</column*/>}}
```

{{<column span="6" color="#999" align="center">}}
span = 6
{{</column>}}

```html
{{</*column span="6" color="#999" align="center">}}span = 6{{</column*/>}}
```

{{<column span="5" color="#999" align="center">}}
span = 5
{{</column>}}

{{<column span="1" color="#999" align="center">}}
span = 1
{{</column>}}

```html
{{</*column span="5" color="#999" align="center">}}span = 5{{</column*/>}}

{{</*column span="1" color="#999" align="center">}}span = 1{{</column*/>}}
```
## Column Shortcode

The column shortcode is basically a container which you can use to display markdown content based on the [Grid Layout](#grid-layout) we discussed above.

**Shortcode Parameters**

- **span:** required number - [1–6] width of the shortcode
- **color:** optional rgba, rgb or hex color value - used to set the background color of the shortcode
- **alignment:** optional string - can be either **left**, **center** or **right** to align the content of the shortcode. Defaults to **left**.

{{<column span="3">}}This is content in a **column** shortcode with a **span = 3** value{{</column>}}

{{<column span="3">}}This is content in a **column** shortcode with a **span = 3** value{{</column>}}

```html
{{</*column span="3">}}This is content in a **column** shortcode with a **span = 3** value{{</column*/>}}

{{</*column span="3">}}This is content in a **column** shortcode with a **span = 3** value{{</column*/>}}
```

{{<hint type="info">}}
The same rules from the [Grid Layout](#grid-layout) apply to the **column** shortcode, as long as the columns add up to 6 you can control how they display.
{{</hint>}}
## Audio Shortcode

The Audio shortcode can be used to document the audible aspects, for example background music, sound effects or jingles in the browser-provided interface.

**Shortcode Parameters**

- **src:** required string - the url pointing to the source file
- **title:** optional string - a title for the audio clip, otherwise the filename is used
- **autoplay:** optional boolean - if true, the audio clip plays without interaction
- **loop:** optional boolean - if true, the audio clip plays repeatedly
- **span:** required number - [1–6] width of the shortcode

**Example**

{{<audio src="https://samplelib.com/lib/preview/mp3/sample-6s.mp3" span="3" title="6-second synth melody">}}

**Markdown Example Usage**

```html
{{</*audio src="https://samplelib.com/lib/preview/mp3/sample-6s.mp3" span="3" title="6-second synth melody"*/>}}
```

{{<hint type="info">}}Sample mp3 provided by: https://samplelib.com/sample-mp3.html{{</hint>}}

## Color Shortcode

The Color shortcode is used to document colors, it supports the following color formats:

- Hex
- RGB
- Pantone
- CMYK
- MUI

**Shortcode Parameters**

- **name:** optional string - defines the color name
- **span:** required number - [1–6] width of the shortcode
- **hex:** required string - defines the hex color value and sets the color of the example
- **RGB** optional string - defines the RGB color value
- **Pantone** optional string - defines the pantone color value
- **CMYK** optional string - defines the CMYK color value
- **MUI** optional string - defines MUI color value

**Example:**

{{<color span="3" name="Theme Primary Color" hex="#003b5c" rgb="0, 59, 92" pantone="302 C" cmyk="100%, 36%, 0%, 64%" >}}

{{<color span="3" name="Theme Secondary Color" hex="#C6007E" rgb="198, 0, 126" pantone="233 C" cmyk="0%, 100%, 36%, 22%" >}}

**Markdown Example Usage**

```html
{{</*color span="3" name="Theme Primary Color" hex="#003b5c" rgb="0, 59, 92" pantone="302 C" cmyk="100%, 36%, 0%, 64%" */>}}
```

```html
{{</*color span="3" name="Theme Secondary Color" hex="#C6007E" rgb="198, 0, 126" pantone="233 C" cmyk="0%, 100%, 36%, 22%" */>}}
```

## Donwload Shortcode

To link downloadable style guide resources, use the Download shortcode

**Shortcode Parameters**

- **title:** required string - The title for the button
- **span:** required number - [1–6] width of the shortcode
- **url** required string - The URL pointing to the file
- **filename:** required string - Changes the file name under which it will be saved
- **subtitle:** optional string - Other text you may want to display if no value is provided it will display the file size.

**Example**

{{<download span="3" title="Hugo Catalog Logos" url="/static/downloads/hugo-catalog-logos.zip">}}

**Markdown Example Usage**

```html
{{</*download span="3" title="Hugo Catalog Logos" url="/static/downloads/hugo-catalog-logos.zip" */>}}
```

## Hint Shortcode

The Hint shortcode highlights important aspects.

**Shortcode Parameters**

- **span:** required number -[1–6] width of the shortcode
- **type:** required string - can be one of 4 types: Info, Danger, Warning and Success

**Example**

{{<hint type="info">}}This is an info hint{{</hint>}}

{{<hint type="danger">}}This is an danger hint{{</hint>}}

{{<hint type="warning">}}This is an warning hint{{</hint>}}

{{<hint type="success">}}This is an success hint{{</hint>}}

**Markdown Example Usage**

```html
{{</*hint type="info">}}This is an info hint{{</hint*/>}}

{{</*hint type="danger">}}This is an info hint{{</hint*/>}}

{{</*hint type="warning">}}This is an info hint{{</hint*/>}}

{{</*hint type="success">}}This is an info hint{{</hint*/>}}
```

## Video Shortcode

The Video shortcode can be used to display videos.

**Shortcode Parameters**

- **span:** required number - [1–6] width of the shortcode
- **src:** required string - the url path of your video
- **muted:** optional boolean - if this value is set to true the video will be muted
- **loop:** optional boolean - if this value is set to true the video will loop
- **autoplay:** optional boolean - if this value is set to true the player will begin playing automatically
- **poster:** optional string - the url path of the image path to use as the cover image

{{<hint type="info">}}If you want to enable a video to autoplay you must also have muted set to true otherwise the video will not autoplay.{{</hint>}}

**Example**

{{<video src="https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" span="6" autoplay="true" muted="true">}}

**Markdown Example Usage**

```html
{{</*video src="https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" span="6" autoplay="true" muted="true"*/>}}
```

## Divider Title Shortcode

The Divider Title shortcode can be used as a divider.

**Shortcode Parameters**

- **text:** required string - the text to display above the divider

**Example**

{{<divider-title text="Divider Title">}}

**Markdown Example Usage**

```html
{{</* divider-title text="info" */>}}
```

## Bullet Shortcode

The Bullet shortcode can be used to display do's and dont's.

**Shortcode Parameters**

- **type:** required string - can be of type **do** or **dont**
- **leadingText:** optional string - the text to display at the beginning of the text, displays in bold
- **text** - required string - text to display with the bullet line

**Example**

{{<bullet type="do" leadingText="Do:" text="example bullet text">}}

{{<bullet type="dont" leadingText="Dont:" text="example bullet text">}}

**Markdown Example Usage**

```html
{{</*bullet type="do" leadingText="Do:" text="example bullet text"*/>}}

{{</*bullet type="dont" leadingText="Dont:" text="example bullet text"*/>}}
```
