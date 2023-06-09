---
title: Installation
weight: 2
---

## Prerequisites

- [Hugo](https://gohugo.io)

Installing Hugo Catalog is very easy, simply run the following command inside your themes folder:

```bash
git clone git@github.com:benmarte/hugo-catalog.git && rm -rf ./hugo-catalog/.git
```

Or simply [download](https://github.com/benmarte/hugo-catalog/archive/refs/heads/main.zip) the theme and place it in your hugo theme directory.

## How to customize and configure Hugo Catalog

In order to customize your Hugo Catalog instance you need to copy the following code to your sites **`config.toml`** file:

```toml
theme = 'hugo-catalog'

[markup.goldmark.parser.attribute]
block = true
title = true

[Params]
    # the path to your site logo
    logo = '/images/hugo-catalog-icon.svg'
    # enables displaying the site name in the header
    disable_site_name_header = false
    # sets the sites primary color
    primary_color = "#003b5c"
    # sets the sites secondary color
    secondary_color = "#C6007E"
    # sets the sites font family
    font_family = "Montserrat"
    # enables subnav page links in nav
    enable_subnav = false

[module]
  [module.hugoVersion]
    extended = true
```

## logo

**Variable Type:** string

The path to your site logo can be a relative to the site or an image hosted on a CDN.

{{<catalog-image src="/images/logo-image.png" span="3" text_position="top" title="Default hugo catalog logo" description="this is a test description" overlay="" light="false" dark="false" scale="true">}}

{{<catalog-image src="/images/site-name-image.png" span="3" text_position="top" title="Default hugo catalog text logo" description="" overlay="" light="false" dark="false" scale="true">}}

{{<hint type="info" span="6">}}
If you delete or comment out this value in your **`config.toml`** the sites title will be displayed as text in place of the logo.
{{</hint>}}

## disable_site_name_header

**Variable Type:** boolean (true/false)

This controls the display of the site name above the header of the site.

{{<catalog-image src="/images/subtitle-image.png" span="3" text_position="top" title="" description="" overlay="" light="false" dark="false" scale="true">}}

{{<catalog-image src="/images/custom-subtitle-image.png" span="3" text_position="top" title="" description="" overlay="" light="false" dark="false" scale="true">}}

{{<hint type="info" span="6">}}
If you set this value to true you will disable displaying the site name in the header, if you add a **subtitle** property to your pages front matter it will display regardless of this settings value.
{{</hint>}}

## primary_color

**Variable Type:** string

Sets the primary color of the site, this color applies to the sites header, and main links color. If this value is not set the site will use the default fallback value: **`#003b5c`**

{{<color name="primary_color" span="6" hex="#003b5c" rgb="" pantone="" cmyk="" mui="">}}

## secondary_color

**Variable Type:** string

Sets the secondary color of the site, this color applies to hover states of links in the content area and the sub-nav items on the navigation menu. If this value is not set the site will use the default fallback value: **`#C9177E`**

{{<color name="secondary_color" span="6" hex="#C9177E" rgb="" pantone="" cmyk="" mui="">}}

## font_family

**Variable Type:** string

Sets the font family for the site, if this value is not set the site will use the default fallback font-family value: **`Montserrat`**

{{<hint type="info" span="6">}}
You can change the font to any [google font](https://fonts.google.com/), just change this value to the font name from google.
{{</hint>}}

## enable_subnav

**Variable Type:** boolean (true/false)

This setting controls if the pages table of contents gets rendered as sub nav items for the page being displayed.

{{<catalog-image src="/images/toc.png" span="3" text_position="top" title="enable_subnav = true" description="" overlay="" light="false" dark="false" scale="true">}}

{{<catalog-image src="/images/toc-disabled.png" span="3" text_position="top" title="enable_subnav = false" description="" overlay="" light="false" dark="false" scale="true">}}
