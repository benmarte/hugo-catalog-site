---
title: Installation
weight: 2
---

Installing Hugo Catalog is very easy, simply [clone the repo](https://github.com/benmarte/hugo-catalog) edit a few [site settings](#site-settings) and you are on your way to have your own brand style guide.

## Prerequisites

Before using Hugo Catalog you need to have either [Docker](https://docker.com) or [Hugo](https://gohugo.io) installed on your machine. Please refer to the installation links for these if you do not have them installed.

- [Docker](https://www.docker.com/get-started/)
- [Hugo](https://gohugo.io/installation/)

## How to run Hugo Catalog in Docker

In terminal go the the directory where you cloned or downloaded Hugo Catalog and simply run:

```bash
docker-compose up
```

Once you see message similar to this:

```bash
docker-compose up
[+] Running 1/0
✔ Container hugo-catalog
Created                                                                     0.0s
Attaching to hugo-catalog
hugo-catalog  | Start building sites … 
hugo-catalog  | hugo v0.101.0-466fa43c16709b4483689930a4f9ac8add5c9f66+extended
hugo-catalog  | 
hugo-catalog  |                    | EN  
hugo-catalog  | -------------------+-----
hugo-catalog  |   Pages            | 15  
hugo-catalog  |   Paginator pages  |  0  
hugo-catalog  |   Non-page files   |  0  
hugo-catalog  |   Static files     | 17  
hugo-catalog  |   Processed images |  0  
hugo-catalog  |   Aliases          |  0  
hugo-catalog  |   Sitemaps         |  1  
hugo-catalog  |   Cleaned          |  0  
hugo-catalog  | 
hugo-catalog  | Built in 155 ms
hugo-catalog  | Watching for changes in /app/{archetypes,assets,content,data,layouts,themes}
hugo-catalog  | Watching for config changes in /app/config.toml
hugo-catalog  | Environment: "DEV"
hugo-catalog  | Serving pages from memory
hugo-catalog  | Running in Fast Render Mode. For full rebuilds on change: hugo server --disableFastRender
hugo-catalog  | Web Server is available at http://localhost:1313/ (bind address 0.0.0.0)
hugo-catalog  | Press Ctrl+C to stop
```

You can now open view your site by visiting [http://localhost:1313](http://localhost:1313) in your browser.

## Site Settings

Now that your site is up and running you may want to change how it looks so it matches your brand. You can change Hugo Catalog settings in the **`config.toml`** file located in **`./hugo-catalog`**.

In this file you will see the following settings:

```yaml
baseURL = 'http://localhost:1313'
languageCode = 'en-us'
title = 'Hugo Catalog'
theme = 'hugo-catalog'

[markup.goldmark.parser.attribute]
block = true
title = true

[Params]
    # the path to your site logo 
    logo = '/images/hugo-catalog-icon.svg'
    # enables displaying the site name in the header
    disableSiteNameHeader="false"
    # sets the sites primary color
    primaryColor = ""
    # sets the sites secondary color
    secondaryColor = ""
    # sets the sites font family
    fontFamily = ""
```

The portion you want to focus on is the **`[Params]`** array, this contains the following settings:

## logo

The path to your site logo can be relative to the site or hosted on a CDN.

{{<image span="6" src="/images/logo-image.png" scale="false" light="true">}}

{{<hint type="info">}}
If you delete this value the site title will be displayed as text in place of the logo.
{{</hint>}}

{{<image span="6" src="/images/site-name-image.png" scale="false" light="true">}}

## **disableSiteNameHeader**

This controls the display of the site name above the header of the site.

{{<image span="6" src="/images/subtitle-image.png" scale="false" light="true">}}

{{<hint type="info">}}
If you set this value to true and you add a **`subtitle`** parameter to your pages front matter you can display a custom text.
{{</hint>}}

{{<image span="6" src="/images/custom-subtitle-image.png" scale="false" light="true">}}

## primaryColor

Sets the primary color of the site, this color applies to the sites header, and main links color. If this value is not set the site will use the default fallback value: **`#003b5c`**

{{<color span="6" name="primaryColor" hexColor="#003b5c">}}

## secondaryColor

Sets the secondary color of the site, this color applies to hover states of links in the content area and the sub-nav items on the navigation menu. If this value is not set the site will use the default fallback value: **`#C9177E`**

{{<color span="6" name="secondaryColor" hexColor="#C9177E">}}

## fontFamily

Sets the font family for the site, if this value is not set the site will use the default fallback font-family value: **`Montserrat`**

{{<hint type="info">}}
You can change the font to any [google font](https://fonts.google.com/), just change this value to the font name from google.
{{</hint>}}
