# What is this all about?

This repository contains resume builder themes.

A resume builder theme is a theme created exclusively for resume builder.

Themes are completely OSS, so feel free to create a PR and share your own themes.

These themes can be displayed as resumes on resume builder by having specific data attributes.

See [this site](https://resume-builder-k.netlify.app/) for the resume builder.

## how to create a theme?

Creating a theme specifically for resume builder is very easy.
All you need to do is to write data attributes starting with `data-theme-id` in html tags.

```html
<p data-theme-id="profile-lastName"></p>
```

The overall rules are as follows

| -- group -- | -- name --   | -- data-theme-id--           |
| ----------- | ------------ | ---------------------------- |
| profile     | last name    | profile-firstName            |
| profile     | first name   | profile-lastNmae             |
| profile     | summary      | profile-summary              |
| profile     | avatar       | profile-avatarUrl            |
| contact     | tell         | contact-tell                 |
| contact     | email        | contact-email                |
| contact     | country      | contact-address-country      |
| contact     | state        | contact-address-state        |
| contact     | city         | contact-address-city         |
| contact     | street       | contact-address-street       |
| contact     | building     | contact-address-building     |
| contact     | zipcode      | contact-address-zipCode      |
| socials     | name         | socials-item-name            |
| socials     | link         | socials-item-link            |
| skills      | name         | skills-item-name             |
| experiences | company name | experiences-item-companyName |
| experiences | position     | experiences-item-position    |
| experiences | from         | experiences-item-from        |
| experiences | to           | experiences-item-to          |
| experiences | summary      | experiences-item-summary     |
| references  | last name    | references-item-lastName     |
| references  | first name   | references-item-firstName    |
| references  | summary      | references-item-summary      |
| references  | avatar       | references-item-avatarUrl    |

## How to use data-theme-id?

Basically, all you have to do is specify in data-theme-id the data attribute relative to the list just described.

However, apart from profiles and contacts, which are used only once in a resume, the dynamically changing number of experiences, skills, socials, and references must be encompassed by a parent tag with a group name in data-theme-id.

```html
<ul>
  <li data-theme-id="socials">
    <a href="twitter.com" data-theme-id="socials-item-link">
      <span data-theme-id="socials-item-name">twitter</span>
    </a>
  </li>
  <li data-theme-id="socials">
    <a href="facebook.com" data-theme-id="socials-item-link">
      <span data-theme-id="socials-item-name">facebook.com</span>
    </a>
  </li>
</ul>
```

## What is the custom attributes?

Custom attributes are attribute values that are specific to the theme in which they are used, and are often useful when used outside of the basic data of the resume builder.

As an example, in custom attributes, when the key is "animal" and the value is "Cat", the value can be reflected in the theme by appending the attribute in the html on the theme as follows.

```html
<p data-theme-id="customs-item-animal">cat</p>
```

## Do you support css?

CSS is supported in inline resource.

## Do you support Javascript?

Javascript is basically supported. However, direct Javascript in HTML may cause syntax errors when loading the theme, so we recommend loading Javascript as an external resource if possible.

```html
<!-- recommended -->
<script type="text/javascript" src="./theme-js.js"></script>

<!-- not recommended -->
<script>
  // some js code
</script>
```
