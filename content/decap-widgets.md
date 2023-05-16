---
title: Decap Widgets
---
Decap widgets convert Hugo shortcodes into decap compatible widgets so you can insert them into your markdown files via the decap editor.

## Audio Widget

The **Audio** widget has 6 properties, these are:

- **src:** required string - the url pointing to the source file
- **title:** optional string - a title for the audio clip, otherwise the filename is used
- **span:** required number - [1–6] width of the shortcode
- **autoplay:** optional boolean - if true, the audio clip plays without interaction defaults to **false**
- **muted:** optional boolean - if true, the audio file will be muted default to **false**
- **loop:** optional boolean - if true, the audio clip plays repeatedly defaults to **false**

{{<divider-title title="HTML Example" align="left">}}

{{<audio src="https://samplelib.com/lib/preview/mp3/sample-6s.mp3" title="6-second synth melody" span="3" autoplay="false" muted="false" loop="false">}}

{{<divider-title title="Decap Usage" align="left">}}

{{<video src="/images/audio-widget.mp4" span="6" autoplay="false" muted="false" loop="false" poster="">}}

## Bullet Widget

The **Bullet** widget has 3 properties, these are:

- **type:** required boolean - can be of type **true** or **false**
- **leading_text:** optional string - the text to display at the beginning of the text, displays in bold
- **text** - required string - text to display with the bullet line

{{<divider-title title="HTML Example" align="left">}}

{{<bullet leading_text="Do:" text="example bullet text" type="true">}}

{{<bullet leading_text="Dont:" text="example bullet text" type="false">}}

{{<divider-title title="Decap Usage" align="left">}}

{{<video src="/images/bullet-widget.mp4" span="6" autoplay="false" muted="false" loop="false" poster="">}}

## Catalog Image Widget

The **Catalog Image** widget has 9 properties, these are:

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

{{<catalog-image src="/images/hugo-catalog-logo.svg" span="3" text_position="top" title="Text Position Top" description="places the images title and description above it." overlay="" light="true" dark="false" scale="true">}}

{{<catalog-image src="/images/hugo-catalog-logo.svg" span="3" text_position="bottom" title="Text Position Bottom" description="places the images title and description below it." overlay="" light="false" dark="true" scale="true">}}

{{<catalog-image src="/images/subtitle-image.png" span="6" text_position="top" title="Image with overlay" description="Displays alternate image on hover" overlay="/images/subtitle-image-hover.png" light="false" dark="false" scale="true">}}

{{<divider-title title="Decap Usage" align="left">}}

{{<video src="/images/catalog-image-widget.mp4" span="6" autoplay="false" muted="false" loop="false" poster="">}}

## Code Block Widget

The **Code Block** widget allows you to insert code blocks into your markdown document, you can select the language for your code snippet by clicking the settings icon and selecting the appropriate mode for your code.

{{<divider-title title="HTML Example" align="left">}}

```json
{
    "name":"John",
    "age":30,
    "car":null,
}
```

{{<divider-title title="Decap Usage" align="left">}}

{{<video src="/images/code-block-widget.mp4" span="6" autoplay="false" muted="false" loop="false" poster="">}}

## Color Widget

The **Color** widget has 7 properties, these are:

- **name:** optional string - defines the color name
- **span:** required number - [1–6] width of the shortcode
- **hex:** required string - defines the hex color value and sets the color of the example
- **RGB** optional string - defines the RGB color value
- **Pantone** optional string - defines the pantone color value
- **CMYK** optional string - defines the CMYK color value
- **MUI** optional string - defines MUI color value

{{<divider-title title="HTML Example" align="left">}}

{{<color name="Theme Primary Color" span="3" hex="#003b5c" rgb="0, 59, 92" pantone="302 C" cmyk="100%, 36%, 0%, 64%" mui="">}}

{{<color name="Theme Secondary Color" span="3" hex="#C6007E" rgb="198, 0, 126" pantone="233 C" cmyk="0%, 100%, 36%, 22%" mui="">}}

{{<divider-title title="Decap Usage" align="left">}}

{{<video src="/images/color-widget.mp4" span="6" autoplay="false" muted="false" loop="false" poster="">}}

## Column Widget

The **Column** widget has 3 properties, these are:

- **span:** required number - [1–6] width of the shortcode
- **color:** optional rgba, rgb or hex color value - used to set the background color of the shortcode
- **alignment:** optional string - can be either **left**, **center** or **right** to align the content of the shortcode. Defaults to **left**.

{{<divider-title title="HTML Example" align="left">}}

{{<column span="1" color="#999" align="center">}}Span 1{{</column>}}

{{<column span="1" color="#999" align="center">}}Span 1{{</column>}}

{{<column span="1" color="#999" align="center">}}Span 1{{</column>}}

{{<column span="1" color="#999" align="center">}}Span 1{{</column>}}

{{<column span="1" color="#999" align="center">}}Span 1{{</column>}}

{{<column span="1" color="#999" align="center">}}Span 1{{</column>}}

{{<column span="2" color="#999" align="center">}}Span 2{{</column>}}

{{<column span="2" color="#999" align="center">}}Span 2{{</column>}}

{{<column span="2" color="#999" align="center">}}Span 2{{</column>}}

{{<column span="3" color="#999" align="center">}}Span 3{{</column>}}

{{<column span="3" color="#999" align="center">}}Span 3{{</column>}}

{{<column span="4" color="#999" align="center">}}Span 4{{</column>}}

{{<column span="2" color="#999" align="center">}}Span 2{{</column>}}

{{<column span="5" color="#999" align="center">}}Span 5{{</column>}}

{{<column span="1" color="#999" align="center">}}Span 1{{</column>}}

{{<column span="6" color="#999" align="center">}}Span 6{{</column>}}

{{<divider-title title="Decap Usage" align="left">}}

{{<video src="/images/column-widget.mp4" span="6" autoplay="false" muted="false" loop="false" poster="">}}

## Divider Title Widget

The **Column** widget has 2 properties, these are:

- **title:** required string - the text to display above the divider
- **align:** optional string - controls the text alignment, defaults to **left**

{{<divider-title title="HTML Example" align="left">}}

{{<divider-title title="Left aligned title" align="left">}}

{{<divider-title title="Center aligned title" align="center">}}

{{<divider-title title="Right aligned title" align="right">}}

{{<divider-title title="Decap Usage" align="left">}}

{{<video src="/images/divider-title.mp4" span="6" autoplay="false" muted="false" loop="false" poster="">}}

## Download Widget

The **Download** widget has 5 properties, these are:

- **title:** required string - The title for the button
- **span:** required number - [1–6] width of the shortcode
- **url** required string - The URL pointing to the file
- **filename:** required string - Changes the file name under which it will be saved
- **subtitle:** optional string - Other text you may want to display if no value is provided it will display the file size.

{{<divider-title title="HTML Example" align="left">}}

{{<download title="Hugo Catalog Logos" span="3" url="/static/downloads/hugo-catalog-logos.zip" subtitle="">}}

{{<divider-title title="Decap Usage" align="left">}}

{{<video src="/images/download-widget.mp4" span="6" autoplay="false" muted="false" loop="false" poster="">}}

## Hint Widget

The **Hint** widget has 3 properties, these are:

- **span:** required number -[1–6] width of the shortcode
- **type:** required string - can be one of 4 types: Info, Danger, Warning and Success
- **content** required markdown - you can write markdown between the opening and closing hint brackets

{{<divider-title title="HTML Example" align="left">}}

{{<hint type="info" span="6">}}This is an info hint{{</hint>}}

{{<hint type="danger" span="6">}}This is an danger hint{{</hint>}}

{{<hint type="warning" span="6">}}This is an warning hint{{</hint>}}

{{<hint type="success" span="6">}}This is an success hint{{</hint>}}

{{<divider-title title="Decap Usage" align="left">}}

{{<video src="/images/hint-widget.mp4" span="6" autoplay="false" muted="false" loop="false" poster="">}}

## Image Shortcode

In some cases you just need to insert an image without any of the advanced features provided by the [Catalog Image Widget](#catalog-image-widget) it is recommended you use the Image shortcode.

The **Image** widget has 3 properties, these are:

- **src:** required string - The URL pointing to the image file
- **title** optional string - used to display a title text for the image
- **Alt Text** optional string - used to display a alternative text when the image cannot be loaded

{{<divider-title title="HTML Example" align="left">}}

![Hugo Catalog Logo](https://benmarte.github.io/hugo-catalog-site/images/hugo-catalog-logo.svg "Hugo Catalog Logo")

{{<divider-title title="Decap Usage" align="left">}}

{{<video src="/images/image-widget.mp4" span="6" autoplay="false" muted="false" loop="false" poster="">}}

## Video Widget

The **Video** widget has 6 properties, these are:

- **span:** required number - [1–6] width of the shortcode
- **src:** required string - the url path of your video
- **muted:** optional boolean - if this value is set to true the video will be muted
- **loop:** optional boolean - if this value is set to true the video will loop
- **autoplay:** optional boolean - if this value is set to true the player will begin playing automatically
- **poster:** optional string - the url path of the image path to use as the cover image

{{<divider-title title="HTML Example & Decap Usage" align="left">}}

{{<video src="/images/download-demo.mp4" span="6" autoplay="false" muted="false" loop="false" poster="">}}
