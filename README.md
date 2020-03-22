# parcel-plugin-package-version

Parcel plugin to read version from package.json

## Install

```
# npm
npm i -d parcel-plugin-package-version

# or yarn
yarn add -D parcel-plugin-package-version
```

## How to use

This plugin puts the package version in an environment variable named `PACKAGE_VERSION`.  
you can retrive it in js like this: `process.env.PACKAGE_VERSION`

### Example

_**package.json**_

```
{
  "version": "1.2.3",
  ...
}
```

_**js script**_

```
console.log("package version: " + process.env.PACKAGE_VERSION);
```

_**output**_

```
package version: 1.2.3
```
