---
title: Installation
weight: 2
---

Installing Hugo Catalog is very easy, simply run the following command inside your themes folder:

```bash
git clone git@github.com:benmarte/hugo-catalog.git && rm -rf ./hugo-catalog/.git
```

## How to customize and configure Hugo Catalog

In order to customize your Hugo Catalog instance you need to copy the following code to your sites **`config.toml`** file:

```toml
[Params]
    # the path to your site logo
    logo = '/images/hugo-catalog-icon.svg'
    # enables displaying the site name in the header
    disableSiteNameHeader = false
    # sets the sites primary color
    primaryColor = "#003b5c"
    # sets the sites secondary color
    secondaryColor = "#C6007E"
    # sets the sites font family
    fontFamily = "Montserrat"
    # enables subnav page links in nav
    enableSubNav = true
```

## logo - string

The path to your site logo can be a relative to the site or an image hosted on a CDN.

{{<image span="3" src="/images/logo-image.png" title="default hugo catalog logo">}}

{{<image span="3" src="/images/site-name-image.png" title="default hugo catalog text logo">}}

{{<hint type="info">}}
If you delete or comment out this value in your **`config.toml`** the sites title will be displayed as text in place of the logo.
{{</hint>}}

## disableSiteNameHeader - boolean

This controls the display of the site name above the header of the site.

{{<image span="3" src="/images/subtitle-image.png" >}}

{{<image span="3" src="/images/custom-subtitle-image.png" >}}

{{<hint type="info">}}
If you set this value to true and you add a **`subtitle`** parameter to your pages front matter you can display a custom text on each page.
{{</hint>}}

## primaryColor - string

Sets the primary color of the site, this color applies to the sites header, and main links color. If this value is not set the site will use the default fallback value: **`#003b5c`**

{{<color span="6" name="primaryColor" hex="#003b5c">}}

## secondaryColor - string

Sets the secondary color of the site, this color applies to hover states of links in the content area and the sub-nav items on the navigation menu. If this value is not set the site will use the default fallback value: **`#C9177E`**

{{<color span="6" name="secondaryColor" hex="#C9177E">}}

## fontFamily - string

Sets the font family for the site, if this value is not set the site will use the default fallback font-family value: **`Montserrat`**

{{<hint type="info">}}
You can change the font to any [google font](https://fonts.google.com/), just change this value to the font name from google.
{{</hint>}}

## enableSubNav - boolean

This setting controls if the pages table of contents gets rendered as sub nav items for the page being displayed.

{{<image span="3" src="/images/toc.png" title="enableSubNav = true">}}

{{<image span="3" src="/images/toc-disabled.png" title="enableSubNav = false">}}
