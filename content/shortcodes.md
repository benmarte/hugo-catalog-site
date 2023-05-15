---
title: Shortcodes
weight: 3
---

## Audio Shortcode

The Audio shortcode can be used to document the audible aspects, for example background music, sound effects or jingles in the browser-provided interface.

**Shortcode Parameters**

- **src:** required string - the url pointing to the source file
- **title:** optional string - a title for the audio clip, otherwise the filename is used
- **span:** required number - [1–6] width of the shortcode
- **autoplay:** optional boolean - if true, the audio clip plays without interaction defaults to **false**
- **muted:** optional boolean - if true, the audio file will be muted default to **false**
- **loop:** optional boolean - if true, the audio clip plays repeatedly defaults to **false**

{{<divider-title title="HTML Example" align="left">}}

{{<audio src="https://samplelib.com/lib/preview/mp3/sample-6s.mp3" title="6-second synth melody" span="3" autoplay="false" muted="false" loop="false">}}

{{<divider-title title="Markdown Example" align="left">}}

```html
{{</*audio src="https://samplelib.com/lib/preview/mp3/sample-6s.mp3" span="3" title="6-second synth melody"*/>}}
```

{{<hint type="info" span="6">}}Sample mp3 provided by: https://samplelib.com/sample-mp3.html{{</hint>}}

## Bullet Shortcode

The Bullet shortcode can be used to display do's and dont's.

**Shortcode Parameters**

- **type:** required boolean - can be of type **true** or **false**
- **leading_text:** optional string - the text to display at the beginning of the text, displays in bold
- **text** - required string - text to display with the bullet line

{{<divider-title title="HTML Example" align="left">}}

{{<bullet leading_text="Do:" text="example bullet text" type="true">}}

{{<bullet leading_text="Dont:" text="example bullet text" type="false">}}

{{<divider-title title="Markdown Example" align="left">}}

```html
{{</*bullet leading_text="Do:" text="example bullet text" type="true"*/>}}

{{</*bullet leading_text="Dont:" text="example bullet text" type="false"*/>}}
```

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

**Example**

{{<color name="Theme Primary Color" span="3" hex="#003b5c" rgb="0, 59, 92" pantone="302 C" cmyk="100%, 36%, 0%, 64%" mui="">}}

{{<color name="Theme Secondary Color" span="3" hex="#C6007E" rgb="198, 0, 126" pantone="233 C" cmyk="0%, 100%, 36%, 22%" mui="">}}

{{<divider-title title="Markdown Example" align="left">}}

```html
{{</*color name="Theme Primary Color" span="3" hex="#003b5c" rgb="0, 59, 92" pantone="302 C" cmyk="100%, 36%, 0%, 64%" mui=""*/>}}

{{</*color name="Theme Secondary Color" span="3" hex="#C6007E" rgb="198, 0, 126" pantone="233 C" cmyk="0%, 100%, 36%, 22%" mui=""*/>}}
```

## Column Shortcode

Hugo Catalog uses a css grid based layout for the content area, the content area has a **max-width** of 960px wide. We use a css grid based layout composed of 6 columns.

The column shortcode is a container which controls how your markdown content displays, you can specify the width of the column with the **span** property.

**Shortcode Parameters**

- **span:** required number - [1–6] width of the shortcode
- **color:** optional rgba, rgb or hex color value - used to set the background color of the shortcode
- **alignment:** optional string - can be either **left**, **center** or **right** to align the content of the shortcode. Defaults to **left**.

You can compose rows of columns based on their **span** values. You can put any combination of span values as long as they add to 6, the grid is smart enough to accomadate them, here are some examples.

{{<divider-title title="HTML Example" align="left">}}

{{<column span="3" color="#999" align="center">}}span = 3{{</column>}}

{{<column span="3" color="#999" align="center">}}span = 3{{</column>}}

{{<divider-title title="Markdown Example" align="left">}}

```html
{{</*column span="3" color="#999" align="center">}}span = 3{{</column*/>}}

{{</*column span="3" color="#999" align="center">}}span = 3{{</column*/>}}
```

{{<divider-title title="HTML Example" align="left">}}

{{<column span="2" color="#999" align="center">}}span = 2{{</column>}}

{{<column span="4" color="#999" align="center">}}span = 4{{</column>}}

{{<divider-title title="Markdown Example" align="left">}}

```html
{{</*column span="2" color="#999" align="center">}}span = 2{{</column*/>}}

{{</*column span="4" color="#999" align="center">}}span = 4{{</column*/>}}
```

{{<divider-title title="HTML Example" align="left">}}

{{<column span="2" color="#999" align="center">}}span = 2{{</column>}}

{{<column span="2" color="#999" align="center">}}span = 2{{</column>}}

{{<column span="2" color="#999" align="center">}}span = 2{{</column>}}

{{<divider-title title="Markdown Example" align="left">}}

```html
{{</*column span="2" color="#999" align="center">}}span = 2{{</column*/>}}

{{</*column span="2" color="#999" align="center">}}span = 2{{</column*/>}}

{{</*column span="2" color="#999" align="center">}}span = 2{{</column*/>}}
```

{{<divider-title title="HTML Example" align="left">}}

{{<column span="6" color="#999" align="center">}}span = 6{{</column>}}

{{<divider-title title="Markdown Example" align="left">}}

```html
{{</*column span="6" color="#999" align="center">}}span = 6{{</column*/>}}
```

{{<divider-title title="HTML Example" align="left">}}

{{<column span="5" color="#999" align="center">}}span = 5{{</column>}}

{{<column span="1" color="#999" align="center">}}span = 1{{</column>}}

{{<divider-title title="Markdown Example" align="left">}}

```html
{{</*column span="5" color="#999" align="center">}}span = 5{{</column*/>}}

{{</*column span="1" color="#999" align="center">}}span = 1{{</column*/>}}
```

{{<hint type="info" span="6">}}
All shortcodes span properties will display at **100% width** at devices with resolutions smaller than **1024 x 768** regardless of the **span** value specified.
{{</hint>}}

## Divider Title Shortcode

The Divider Title shortcode can be used as a divider.

**Shortcode Parameters**

- **title:** required string - the text to display above the divider
- **align:** optional string - controls the text alignment, defaults to **left**

{{<divider-title title="No alignment set defaults to left" align="left">}}

{{<divider-title title="Aligned to center" align="center">}}

{{<divider-title title="Aligned to right" align="right">}}

```html
{{</*divider-title title="No alignment set defaults to left" align="left"*/>}}

{{</*divider-title title="Aligned to center" align="center"*/>}}

{{</*divider-title title="Aligned to right" align="right"*/>}}
```

## Donwload Shortcode

To link downloadable style guide resources, use the Download shortcode

**Shortcode Parameters**

- **title:** required string - The title for the button
- **span:** required number - [1–6] width of the shortcode
- **url** required string - The URL pointing to the file
- **filename:** required string - Changes the file name under which it will be saved
- **subtitle:** optional string - Other text you may want to display if no value is provided it will display the file size.

{{<divider-title title="HTML Example" align="left">}}

{{<download title="Hugo Catalog Logos" span="3" url="/static/downloads/hugo-catalog-logos.zip" subtitle="">}}

{{<divider-title title="Markdown Example" align="left">}}

```html
{{</*download title="Hugo Catalog Logos" span="3" url="/static/downloads/hugo-catalog-logos.zip" subtitle=""*/>}}
```

## Hint Shortcode

The Hint shortcode highlights important aspects.

**Shortcode Parameters**

- **span:** required number -[1–6] width of the shortcode
- **type:** required string - can be one of 4 types: Info, Danger, Warning and Success

{{<divider-title title="HTML Example" align="left">}}

{{<hint type="info" span="6">}}This is an info hint{{</hint>}}

{{<hint type="danger" span="6">}}This is an danger hint{{</hint>}}

{{<hint type="warning" span="6">}}This is an warning hint{{</hint>}}

{{<hint type="success" span="6">}}This is an success hint{{</hint>}}

{{<divider-title title="Markdown Example" align="left">}}

```html
{{</*hint type="info">}}This is an info hint{{</hint*/>}}

{{</*hint type="danger">}}This is an info hint{{</hint*/>}}

{{</*hint type="warning">}}This is an info hint{{</hint*/>}}

{{</*hint type="success">}}This is an info hint{{</hint*/>}}
```

## Image Shortcode

Images can be used as graphical elements, to document implementation details with static images or behavioral aspects when animated gifs are used.

**Shortcode Parameters**

- **src:** string required - path to the image you want to display, can be local file path or CDN based url
- **overlay:** string optional - path to the image you want to display on hover, can be local file path or CDN based url
- **title:** string optional - the title
- **description:** string optional - markdown-formatted text description
- **light:** boolean optional - a light checkered background
- **dark:** boolean optional - a dark checkered background
- **scale:** boolean optional - scale the image down if it’s wider than the container
- **span:** number required - [1–6] width of the shortcode
- **text_position:** string optional - can either be **top** to place the title and description above it or **bottom** to place it below it

{{<divider-title title="HTML Example" align="left">}}

Image shortcode with a **span** value of 3.

{{<image src="/images/hugo-catalog-logo.svg" span="3" text_position="top" title="" description="" overlay="" light="false" dark="false" scale="true">}}

{{<divider-title title="Markdown Example" align="left">}}

```html
{{</*image src="/images/hugo-catalog-logo.svg" span="3" text_position="top" title="enable_subnav = false" description="" overlay="" light="false" dark="false" scale="true"*/>}}
```

{{<divider-title title="HTML Example" align="left">}}

Image shortcode with a **span** value of 6 and **light** = **true** to enable a transparent background.

{{<image src="/images/hugo-catalog-logo.svg" span="6" text_position="top" title="" description="" overlay="" light="true" dark="false" scale="true">}}

{{<divider-title title="Markdown Example" align="left">}}

```html
{{</*image src="/images/hugo-catalog-logo.svg" span="6" text_position="top" title="" description="" overlay="" light="true" dark="false" scale="true"*/>}}
```

{{<divider-title title="HTML Example" align="left">}}

Image shortcode with a **span** value of 6 and **dark** = **true** to enable a translucent black background.

{{<image src="/images/hugo-catalog-logo.svg" span="6" text_position="top" title="" description="" overlay="" light="false" dark="true" scale="true">}}

{{<divider-title title="Markdown Example" align="left">}}

```html
{{</*image src="/images/hugo-catalog-logo.svg" span="6" text_position="top" title="" description="" overlay="" light="false" dark="true" scale="true"*/>}}
```

{{<divider-title title="HTML Example" align="left">}}

All images will display as responsive images, if you want to display an image at its native size simply set the **scale** property to **false** and the image will render at it's native size.

This example uses an image shortcode with a **span** value of 6, **title**, **description** with the **text_position** set to the top and a **scale** property set to **false**.

{{<image src="/images/logo-image.png" span="6" text_position="top" title="Title" description="This is a sample description" overlay="" light="false" dark="false" scale="false">}}

{{<divider-title title="Markdown Example" align="left">}}

```html
{{</*image src="/images/logo-image.png" span="6" text_position="top" title="Title" description="This is a sample description" overlay="" light="false" dark="false" scale="false"*/>}}
```

You can control the positioning of the **title** and **description** with the **text_position** property. You can either place it to the **top** or **bottom** of the image.

{{<image src="/images/logo-image.png" span="6" text_position="bottom" title="Title" description="This is a sample description" overlay="" light="false" dark="false" scale="true">}}

{{<divider-title title="Markdown Example" align="left">}}

```html
{{</*image src="/images/logo-image.png" span="6" text_position="bottom" title="Title" description="This is a sample description" overlay="" light="false" dark="false" scale="true"*/>}}
```

{{<hint type="info" span="6">}}
In order for the **scale** property to work properly the image needs to be smaller than **960px** width
{{</hint>}}

{{<divider-title title="HTML Example" align="left">}}

The **overlay** property allows you to set an image that you can display on mouse over of the initial image.

{{<image src="/images/subtitle-image.png" span="6" text_position="top" title="" description="" overlay="/static/images/subtitle-image-hover.png" light="false" dark="false" scale="true">}}

{{<divider-title title="Markdown Example" align="left">}}

```html
{{</*image src="/images/subtitle-image.png" span="6" text_position="top" title="" description="" overlay="/static/images/subtitle-image-hover.png" light="false" dark="false" scale="true"*/>}}
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

{{<hint type="info" span="6">}}If you want to enable a video to **autoplay** you must also have **muted** set to **true** otherwise the video will not autoplay.{{</hint>}}

{{<divider-title title="HTML Example" align="left">}}

{{<video src="/images/download-demo.mp4" span="6" autoplay="false" muted="true" loop="false" poster="/images/gitlab-decap-login.png">}}

{{<divider-title title="Markdown Example" align="left">}}

```html
{{</*video src="/images/download-demo.mp4" span="6" autoplay="true" muted="true" loop="false" poster="/images/gitlab-decap-login.png" */>}}
```
