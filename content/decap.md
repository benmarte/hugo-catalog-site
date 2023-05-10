---
title: Decap
---

## Setup Decap

**Prerequisites:**

- [Netlify](https://netlify) account
- [Github](https://github.com) OAuth app

Decap is an open source **W**hat **Y**ou **S**ee **I**s **W**hat **Y**ou **G**et (**WYSIWYG**) that can be used with static site generators in order to provide an easy to use editor view while still taking advantage of using your CI/CD pipeline for deploying your site.

In order to enable decap you need to have a [Netlify](https://netlify) and [Github](https://github.com) account, if you don't have an account sign up for a free one before getting started.

## Creating a Github OAuth App

We will be using Github for authenticating our users in order for them to login and make edits to our site.

Go here: [https://github.com/settings/developers](https://github.com/settings/developers) and click on **New OAuth App** button and fill out the fields for:

- **Applicatiomn Name:** Your apps name
- **Homepage URL:** URL for your site
- **Application Description:** Text description for your app.
- **Authorization Callback URL:** `https://api.netlify.com/auth/done`

![OAuth App](/images/oauth-app.png)

{{<hint type="info">}}
**Authorization Callback URL** value specifically needs to be: `https://api.netlify.com/auth/done`
{{</hint>}}

Once your OAuth app has been created you will need to get your **Client ID** and **Client Secret**. Click on **Generate new client secret** to get your client secret.

![OAuth App](/images/client-secret.png)

{{<hint type="warning">}}
Your client secret will be visible as long as you don't navigate away from this page, so save both your **Client ID** and **Client Secret** because we are going to need them for the next step.
{{</hint>}}

## Setting up your netlify site

Once you login to Netlify under **Sites** click on the **add new site** button dropdown and select deploy manually.

![Add New Site](/images/add-new-site.png)

We are not going to actually use Netlify to host our site we are simply going to use it to enable our editors to login with github so they can make changes with decap.

On the next page simply create a new text file and save it as **index.html** and upload the file to Netlify. Or you can download [this](/downloads/index.zip) file and upload it.

![Netlify Upload](/images/netlify-upload.png)

Once your site has been created click on **site settings**, **access control** and scroll down to the **OAuth** section and under **Authentication providers** click **Install provider**.

![Install Provider](/images/install-provider.png)

In the modal windows select **Github** as your provider and insert the **Client ID** and **Client Secret** from the previous step and click install.

![Install Provider](/images/oauth-provider.png)

Next, click on **Site settings**, **Domain management** and click on **Add a domain** insert your sites domain name. If you are using Github pages to host your site you need to insert: `you_repo_name.github.io` and click **Verify**.

## Decap config.yml

Now we need to edit decaps configuration file which is located in `themes/hugo-catalog/static/admin/config.yml` and you need to set the **repo** value to your github sites repository and your **site_domain** to your netlify subdomain. Here is

```yaml
backend:
  # backend to use
  name: github
  # your github repo ex: benmarte/hugo-catalog
  repo: benmarte/hugo-catalog-site
  # optional, defaults to master
  branch: main
  # your netlify site name ex: netlify-site-name.netlify.app
  site_domain: hugo-catalog.netlify.app

# directory where your images are stored
media_folder: /static/images
# the path the site will use to store your images
public_folder: /images

# enables decap editorial workflow
publish_mode: editorial_workflow

# URL to your company logo to be used in the login screen, logo max width is 300px. Logo can be a relative path or a CDN url.
logo_url: https://benmarte.github.io/hugo-catalog-site/images/hugo-catalog-logo.svg

# Collection of pages decap can access
collections:
  # name
  - name: "content"
    # label displayed in decap under collections
    label: "Pages"
    # directory with markdow files
    folder: "/content"
    create: true
    # the filename will be used to generate the url to the page
    slug: "{{slug}}"
    # fields accessible in decap when creating or editing a page
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Body", name: "body", widget: "markdown" }
```
