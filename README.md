# Collab CMS (proof of concept)

First proposal solution for the CMS mechanism that will be implemented on Campus/Collab.

## How to use it

To create a page, access **_/editor_** page. Add some components and configure it's styles (size, padding, colors, ...). After that, click on **save**

## Documentation

This project uses [Craft.js](https://duckduckgo.com) and allow us to easily create an editor interface to be used by the HUB admins to create personalised pages.

> Craft. js is **a open source React framework for building extensible drag-and-drop page editors**. Instead of providing a working page editor implementation with a user interface, Craft. js provides an abstraction for you to implement your own page editor upon.

It's usage is pretty simple (check [Craft.js Docs](https://craft.js.org/r/docs/overview/)).

## Features

-- **Configurable components**
We can specify which components are available to be used by the page creators. Those components are built with React and need to follow Craft.js patterns - it's style should be configurable via the props injected by Craft.js context.

-- **Configurable editor page**

The editor page is fully configurable. We can change it's design and UI in order to be compliant with Campus/Collab/MiOne/GPS design.

-- **Pages are exported as compressed JSON**

Craft.js is exporting each page as JSON object. In order to make it more reliable and safe, we're compressing it. The page loader (viewer) should be able to decompress it.
For compressing/decompressing we're using [lzutf8.js](https://github.com/rotemdan/lzutf8.js/).

## Proposed architecture

###

The **Preview page** will be implmented on the current Campus frontend repository.
A Preview component will be imported from `@campus-cms` library and rendered on a hub entry page.

> `@campus-cms` needs to be implemented and made available as a npm package (similar as `campus-chat` implementation).

Example:

```jsx
import Viewer from '@campus-cms';
import { useState } from 'react';

const HubPage = () => {
	const [pageData, setPageData] = useState();

	useEffect(() => {
		// request to Campus Backend,
		// the page data (compressed JSON) should be returned.
		const data = awaitfetchHubPage();
		setPageData(data);
	}, []);

	if(!pageData) return <></>;

	return (
		<Viewer data={pageData}>
	)
}
```

The **Editor page** will be implemented and hosted in a separate service (like this project). A redirection should be done, whenever an admin clicks the button to Edit/Create a new page.

- Editor page should be able to perform authentication requests.
- Admin will be able to manage multiple pages via the editor. Therefore, editor page should be able to request Hub endpoints. (getHubs, createHubs, manageHubs, ....)
- When a page is exported/edited, a request will be triggered and page data should be saved on Campus Database.

### Sharing the components between editor and viewer

The list of components allowed to be inserted and managed by an admin should be the same on the editor and viewer components. Otherwise, user won't have a consistent experience. For that, we propose to use `@campus-library` package.

> `@campus-library` is a npm package implemented by @henrique and aims to serve as a design system, where all the UI components from Campus infrastructure are located.
